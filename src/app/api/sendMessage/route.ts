import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, tel, message } = await req.json();

    // Walidacja pól
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Wymagane pola są puste' },
        { status: 400 },
      );
    }

    // Konfiguracja transportera dla SMTP Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Twój adres Gmail
        pass: process.env.EMAIL_PASS, // Wygenerowane "App Password"
      },
    });

    // Konfiguracja wiadomości e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'omega-trans@gazeta.pl',
      subject: 'Formularz na stronie Auto-Bud',
      text: `Imię i nazwisko: ${name}\nEmail: ${email}\nTelefon: ${tel}\nWiadomość: ${message}`,
    };

    // Wysyłanie e-maila
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Wiadomość została wysłana' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Błąd podczas wysyłania wiadomości:', error);
    return NextResponse.json(
      { message: 'Błąd serwera. Spróbuj ponownie później.' },
      { status: 500 },
    );
  }
}
