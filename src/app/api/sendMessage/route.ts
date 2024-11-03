import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, tel, message } = await req.json();

  // Walidacja danych
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'Wymagane pola są puste' },
      { status: 400 },
    );
  }

  try {
    // Konfiguracja transportera dla nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Użyj np. 'gmail' lub skonfiguruj SMTP swojego serwera pocztowego
      auth: {
        user: process.env.EMAIL_USER, // Twój e-mail
        pass: process.env.EMAIL_PASS, // Hasło lub kod aplikacji
      },
    });

    // Ustawienia e-maila
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'danielsledz2003@gmail.com', // Adres odbiorcy
      subject: 'Nowa wiadomość od użytkownika',
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
