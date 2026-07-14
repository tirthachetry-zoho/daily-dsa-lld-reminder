import * as NextAuthNS from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { userRepository } from "@/repositories/user-repository";
import { z } from "zod";
import bcrypt from "bcryptjs";

// next-auth v5's default export and its type exports aren't reliably
// recognized under "moduleResolution": "bundler", so we define a minimal
// local config type and cast the default export to a callable.
type SessionUser = { id: string; email?: string | null };
type NextAuthSession = { user: SessionUser } | null;
type NextAuthConfigLike = {
  session?: { strategy: string };
  pages?: { signIn?: string };
  providers: unknown[];
  callbacks?: any;
};
type NextAuthReturn = {
  handlers: { GET: (...args: unknown[]) => Promise<Response>; POST: (...args: unknown[]) => Promise<Response> };
  signIn: unknown;
  signOut: unknown;
  auth: (...args: unknown[]) => Promise<NextAuthSession>;
};
const NextAuth = (NextAuthNS as unknown as {
  default: (config: NextAuthConfigLike) => NextAuthReturn;
}).default;

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await userRepository.findByEmail(email);

          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return { id: user.id, email: user.email };
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: Record<string, unknown>; user?: { id?: string; email?: string | null } }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { session: { user: { id?: string; email?: string | null } }; token: Record<string, unknown> }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
});