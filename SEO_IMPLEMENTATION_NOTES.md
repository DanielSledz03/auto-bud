# SEO_IMPLEMENTATION_NOTES.md

Data: 25 lutego 2026

## 1) Architektura SEO w projekcie

### Metadata
- Wspólny helper: `src/lib/seo.ts` -> `buildPageMetadata(...)`
- Każda nowa strona SEO powinna używać helpera i mieć:
  - unikalny `title`
  - unikalny `description`
  - poprawny `path` (canonical)
  - lokalne `keywords` (pomocniczo)

### JSON-LD
- Globalny graph (Organization + WebSite + lokalizacje) jest wstrzykiwany w `src/app/layout.tsx` przez `organizationGraph`.
- Dla stron lokalizacji i landingów lokalnych używaj:
  - `createLocationJsonLd('swietochlowice' | 'godula' | 'bykowina')`
  - `<script type="application/ld+json">...</script>` na stronie.
- Breadcrumb JSON-LD: komponent `src/components/Seo/Breadcrumbs.tsx`.
- FAQ JSON-LD: komponent `src/components/Seo/FaqSection.tsx` (FAQ musi być widoczne na stronie).

### Crawlability
- Mapa strony: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- Redirecty: `next.config.mjs`

## 2) Jak dodać nową usługę
1. Dodaj stronę usługi (lub wpis do `src/app/uslugi/[slug]/page.tsx`).
2. Uzupełnij metadata przez `buildPageMetadata`.
3. Dodaj link do usługi na:
- `/uslugi`
- stronach lokalnych, jeśli usługa tam występuje
- ewentualnie na landingach lokalnych
4. Jeśli strona ma FAQ, użyj `FaqSection`.
5. Dodaj URL do `src/app/sitemap.ts`.

## 3) Jak dodać nową lokalizację
1. Dodaj rekord w `src/data/businessLocations.ts` (pełny NAP + telefony + geo + godziny).
2. Rozszerz dane SEO w `src/lib/seo.ts`:
- `locationDescriptions`
- `locationTypes`
- `locationOfferCatalog`
3. Dodaj stronę lokalizacji z:
- unikalnym H1
- NAP
- sekcją "Obsługujemy Śląsk"
- CTA do `/wizyta` i `/kontakt`
- `Breadcrumbs` + `FaqSection`
- lokalnym JSON-LD przez `createLocationJsonLd(...)`
4. Dodaj nową lokalizację do:
- menu/stopki
- `sitemap.ts`

## 4) Jak dodać nowy landing lokalny
1. Twórz tylko strony z realną wartością (nie duplikuj 1:1 istniejących treści).
2. Rekomendowana struktura:
- H1 pod intencję lokalną
- opis usługi/lokalizacji
- NAP i telefony
- FAQ (minimum 3-5 pytań)
- CTA + linki do właściwych stron lokalizacji/usług
3. Dodaj stronę do:
- `sitemap.ts`
- internal linking (home/usługi/kontakt/stopka, jeśli istotne)
4. Rozważ redirecty literówek w `next.config.mjs`.

## 5) Zasady treści SEO (lokalne)
- Pisz naturalnie, bez keyword stuffing.
- Używaj lokalnych fraz w kontekście (miasto + usługa + wartość dla użytkownika).
- Utrzymuj spójny NAP we wszystkich miejscach.
- Nie publikuj fake adresów ani nieistniejących oddziałów.
- Nie dodawaj `AggregateRating/Review` schema bez spełnienia wytycznych Google.

## 6) Performance i jakość techniczna
- Dla obrazów above-the-fold ustawiaj rozsądnie `priority` i `sizes`.
- Unikaj globalnych preloadów ciężkich obrazów na wszystkich podstronach.
- Po zmianach uruchamiaj:
  - `npm run lint`
  - `npm run build`

## 7) Miesięczny proces utrzymania SEO
1. Sprawdź GSC:
- zapytania lokalne
- CTR i pozycje URL landingów/lokalizacji
- status indeksacji
2. Rozbuduj FAQ/treści na podstawie realnych zapytań użytkowników.
3. Aktualizuj linkowanie wewnętrzne po dodaniu nowych stron.
4. Raz na miesiąc zweryfikuj sitemap i redirecty.

## 8) Pliki kluczowe do SEO
- `src/lib/seo.ts`
- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `next.config.mjs`
- `src/app/swietochlowice/page.tsx`
- `src/app/godula/page.tsx`
- `src/app/bykowina/page.tsx`
- `src/app/mechanik-swietochlowice/page.tsx`
- `src/app/stacja-diagnostyczna-ruda-slaska/page.tsx`
