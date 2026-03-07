# Auto-Bud

Strona firmowa Auto-Bud Bosch Car Service dla lokalizacji w Rudzie Śląskiej i Świętochłowicach. Projekt działa na Next.js App Router, jest wdrażany na Vercel i zawiera bieżącą konfigurację SEO pod domenę `https://www.auto-bud.com.pl`.

## Stack

- Next.js 16.1.6
- React 19
- TypeScript 5
- Tailwind CSS 3.4
- Nodemailer
- Vercel Analytics
- Vercel Speed Insights

## Zakres projektu

- strony lokalizacji: `/swietochlowice`, `/godula`, `/bykowina`
- landingi lokalne: `/slask`, `/mechanik-swietochlowice`, `/stacja-diagnostyczna-ruda-slaska`
- katalog usług oparty o route `src/app/uslugi/[slug]/page.tsx`
- formularz kontaktowy i formularz zgłoszenia wizyty
- generowane `robots.txt` i `sitemap.xml`
- metadata, canonicale i JSON-LD dla stron SEO

## Wymagania

- Node.js w aktualnej wersji LTS zgodnej z Next.js 16
- npm

## Uruchomienie lokalne

```bash
git clone https://github.com/DanielSledz03/auto-bud.git
cd auto-bud
npm install
```

Utwórz `.env.local`:

```env
EMAIL_USER=twoj-adres@gmail.com
EMAIL_PASS=twoje-haslo-aplikacji-gmail
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

`NEXT_PUBLIC_GTM_ID` jest opcjonalne. `EMAIL_USER` i `EMAIL_PASS` są wymagane przez endpointy formularzy w `src/app/api/sendMessage/route.ts` oraz `src/app/api/reservation-request/route.ts`.

Start lokalnie:

```bash
npm run dev
```

Aplikacja będzie dostępna pod `http://localhost:3000`.

## Skrypty

- `npm run dev` - tryb developerski
- `npm run build` - build produkcyjny
- `npm run start` - uruchomienie buildu produkcyjnego
- `npm run lint` - lint całego projektu

## SEO i domeny

- Canonical host: `https://www.auto-bud.com.pl`
- `auto-bud.com.pl` oraz `m.auto-bud.com.pl` są przekierowywane do wariantu `www` na poziomie Vercel
- `src/proxy.ts` odpowiada za:
  - usuwanie trailing slash
  - czyszczenie parametru `yandex-source`
  - redirect `/katowice` -> `/slask`
  - redirecty starych adresów `/obiekty/...` do aktualnych stron lokalizacji
- `next.config.mjs` zawiera dodatkowe redirecty literówek i nagłówki `X-Robots-Tag: noindex` dla `manifest.json` oraz `/_next/static/*`
- `src/app/robots.ts` generuje `robots.txt`
- `src/app/sitemap.ts` generuje `sitemap.xml`
- wspólny helper metadata i danych strukturalnych znajduje się w `src/lib/seo.ts`

## Deployment

- projekt jest podpięty do Vercel przez `.vercel/project.json`
- branch produkcyjny: `main`
- push na `main` uruchamia deployment na Vercel
- po zmianach SEO warto uruchomić lokalnie:

```bash
npm run lint
npm run build
```

## Kluczowe pliki

- `next.config.mjs`
- `src/proxy.ts`
- `src/lib/seo.ts`
- `src/app/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/app/api/sendMessage/route.ts`
- `src/app/api/reservation-request/route.ts`

## Dodatkowa dokumentacja

- `SEO_IMPLEMENTATION_NOTES.md`
- `SEO_AUDIT.md`

## Repozytorium

Repo jest prywatny. Główne repo GitHub: `DanielSledz03/auto-bud`.
