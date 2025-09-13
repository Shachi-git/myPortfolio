import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    })

await transporter.sendMail({
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: `📩 Portfolio Contact | ${name} (${email})`,
  text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
})


    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error sending email:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
