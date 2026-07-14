import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export class UserRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data: {
    email: string;
    password?: string;
  }): Promise<User> {
    return prisma.user.create({
      data,
    });
  }

  async update(
    id: string,
    data: Partial<{
      timezone: string;
      reminderTime: string;
      frequencyDays: number;
      systemDesignFrequency: number;
      isActive: boolean;
    }>
  ): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async findActiveUsers(): Promise<User[]> {
    return prisma.user.findMany({
      where: { isActive: true },
    });
  }

  async delete(id: string): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  }
}

export const userRepository = new UserRepository();
