import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type PreferredTimeOfDay = 'RANO' | 'POLUDNIE';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidTimeOfDay = (value: unknown): value is PreferredTimeOfDay =>
  value === 'RANO' || value === 'POLUDNIE';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      locationId,
      locationName,
      serviceId,
      serviceName,
      issueDescription,
      preferredDate,
      preferredVisitDate,
      preferredTimeOfDay,
      preferredContactTimeOfDay,
      plate,
      makeModel,
      fullName,
      email,
      phone,
      notes,
    } = data ?? {};

    const resolvedPreferredDate = preferredVisitDate ?? preferredDate ?? '';
    const resolvedPreferredTimeOfDay =
      preferredContactTimeOfDay ?? preferredTimeOfDay;
    const normalizedServiceId =
      typeof serviceId === 'string' ? serviceId.trim().toLowerCase() : '';
    const normalizedServiceName =
      typeof serviceName === 'string' ? serviceName.trim().toLowerCase() : '';
    const normalizedIssueDescription =
      typeof issueDescription === 'string' ? issueDescription.trim() : '';
    const normalizedNotes = typeof notes === 'string' ? notes.trim() : '';

    const hasLocation = Boolean(locationId || locationName);
    const hasService = Boolean(serviceId || serviceName);
    const isOtherService =
      normalizedServiceId === 'inne' || normalizedServiceName === 'inne';

    if (
      !hasLocation ||
      !hasService ||
      !resolvedPreferredDate ||
      !plate ||
      !makeModel ||
      !fullName ||
      !email ||
      !phone ||
      !isValidTimeOfDay(resolvedPreferredTimeOfDay)
    ) {
      return NextResponse.json(
        { message: 'Wymagane pola są puste lub niepoprawne' },
        { status: 400 },
      );
    }

    if (isOtherService && !normalizedIssueDescription) {
      return NextResponse.json(
        { message: 'Przy opcji "Inne" wymagany jest opis problemu.' },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { message: 'Niepoprawny adres email' },
        { status: 400 },
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { message: 'Brak konfiguracji serwera poczty' },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sledziuxjp@gmail.com',
      subject: 'Nowe zgłoszenie wizyty online - Auto-Bud',
      text: [
        `Lokalizacja: ${locationName || locationId}`,
        `Usługa: ${serviceName || serviceId}`,
        `Preferowany dzień wizyty: ${resolvedPreferredDate}`,
        `Preferowana pora kontaktu: ${resolvedPreferredTimeOfDay}`,
        `Numer rejestracyjny: ${plate}`,
        `Model/Marka: ${makeModel}`,
        `Imię i nazwisko: ${fullName}`,
        `Email: ${email}`,
        `Telefon: ${phone}`,
        `Opis problemu / cel wizyty: ${normalizedIssueDescription || '-'}`,
        `Uwagi: ${normalizedNotes || '-'}`,
      ].join('\n'),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Zgłoszenie zostało wysłane' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Błąd podczas wysyłania zgłoszenia terminu:', error);
    return NextResponse.json(
      { message: 'Błąd serwera. Spróbuj ponownie później.' },
      { status: 500 },
    );
  }
}
