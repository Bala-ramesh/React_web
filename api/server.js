import { Resend } from 'resend';
import { z } from 'zod';

// 1. Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// 2. Define a strict schema to prevent Malware/Injection attacks
// This ensures no one can send 10MB of malicious code to your inbox
const ContactSchema = z.object({
  name: z.string().min(2).max(50).trim(),
  email: z.string().email(),
  subject: z.string().min(2).max(100).trim(),
  message: z.string().min(10).max(2000).trim(),
});

export default async function handler(req, res) {
  // --- A. SECURITY: CORS HEADERS ---
  const origin = req.headers.origin;
  const allowedOrigins = [
    'https://bala-ramesh.github.io', // Your GitHub Pages URL
    'http://localhost:3000',
    'http://localhost:5173'
  ];

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle Preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // --- B. SECURITY: INPUT VALIDATION ---
    const validation = ContactSchema.safeParse(req.body);
    
    if (!validation.success) {
      return res.status(400).json({ 
        message: 'Invalid input', 
        errors: validation.error.errors 
      });
    }

    const { name, email, subject, message } = validation.data;

    // --- C. SENDING THE EMAIL ---
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Change this after verifying your domain
      to: process.env.MY_PERSONAL_EMAIL, 
      reply_to: email, // This allows you to click "Reply" in your email app
      subject: `[Portfolio] ${subject}`,
      // Use 'text' instead of 'html' to make any malicious scripts inert/harmless
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ message: 'Email service error', error });
    }

    return res.status(200).json({ message: 'Email sent successfully!' });

  } catch (err) {
    console.error('System Error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}