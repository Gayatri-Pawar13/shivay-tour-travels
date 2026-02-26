import "server-only";

import nodemailer from "nodemailer";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) return null;

  const secure =
    process.env.SMTP_SECURE === "true" ? true : process.env.SMTP_SECURE === "false" ? false : port === 465;

  return { host, port, secure, auth: { user, pass } };
}

export async function sendEmailIfConfigured({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  const smtp = getSmtpConfig();
  if (!smtp) return { sent: false as const };

  const fromAddress = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
  const fromName = process.env.SMTP_FROM_NAME ?? "Shivay Tour and Travels";
  const from = `${fromName} <${fromAddress}>`;

  const transporter = nodemailer.createTransport(smtp);
  await transporter.sendMail({ from, to, subject, text });
  return { sent: true as const };
}

