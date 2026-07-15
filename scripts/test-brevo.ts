// Test script to verify Brevo API configuration
import 'dotenv/config';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;

console.log('Testing Brevo API configuration...');
console.log('BREVO_API_KEY:', BREVO_API_KEY ? `${BREVO_API_KEY.substring(0, 10)}...` : 'NOT SET');
console.log('EMAIL_FROM:', EMAIL_FROM || 'NOT SET');

if (!BREVO_API_KEY) {
  console.error('ERROR: BREVO_API_KEY is not set in environment variables');
  process.exit(1);
}

if (!EMAIL_FROM) {
  console.error('ERROR: EMAIL_FROM is not set in environment variables');
  process.exit(1);
}

// Test sending an email
const testEmail = async () => {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          email: EMAIL_FROM,
        },
        to: [{ email: "tirthachetri12@gmail.com" }],
        subject: "Test Email from Brevo API",
        htmlContent: "<html><body><h1>Test Email</h1><p>This is a test email sent via Brevo API.</p></body></html>",
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Email sent successfully!');
      console.log('Response:', result);
    } else {
      console.error('❌ Failed to send email');
      console.error('Status:', response.status);
      console.error('Error:', result);
    }
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};

testEmail();
