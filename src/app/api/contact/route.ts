// app/api/contact/route.ts (Next.js 13+ routing with NextRequest and NextResponse)
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function GET(req: NextRequest) {
  // Respond with a simple JSON message for GET request
  return NextResponse.json({ message: 'hi' });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message }: ContactFormData = body;

    // Resend.com API endpoint
    const resendEndpoint = 'https://api.resend.com/emails';

    // Create email data
    const emailData = {
      from: email,
      to: 'gauravkalakoti19@gmail.com', // Replace with your email address
      subject: `Contact Form Submission from ${name} - portfolio`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    // Send email using Resend.com
    const response = await fetch(resendEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, // Use your Resend API key
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
