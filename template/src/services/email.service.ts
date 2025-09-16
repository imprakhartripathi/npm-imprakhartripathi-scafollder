import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_MAIL,
    pass: process.env.MAIL_PASS,
  },
});

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export async function sendContactEmail(payload: ContactPayload) {
  const { name, email, subject, message } = payload;

  if (!process.env.APP_MAIL) throw new Error("APP_MAIL not configured");

  const html = `
    Enter Message Here
  `;

  try {
    const info = await transporter.sendMail({
      // Show the actual sender while keeping authenticated mailbox; use replyTo for responses
      from: `${name} <${process.env.APP_MAIL}>`,
      replyTo: email,
      to: process.env.APP_MAIL,
      subject: `[Enter Subject] ${subject}`,
      html,
      envelope: {
        from: process.env.APP_MAIL as string,
        to: process.env.APP_MAIL as string,
      },
      headers: {
        "X-Original-Sender": email,
      },
    });
    return { success: true, id: info.messageId };
  } catch (err) {
    throw new Error(`Failed to send contact email: ${getErrorMessage(err)}`);
  }
}