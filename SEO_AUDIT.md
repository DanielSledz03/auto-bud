# SEO_AUDIT.md

Data audytu i wdrożenia: 25 lutego 2026
Projekt: Auto-Bud Bosch Car Service (Next.js App Router)
Język: pl-PL

## Cel biznesowy i frazy priorytetowe
- mechanik Świętochłowice / mechanik swietochlowice
- mechanik Śląsk / serwis samochodowy Śląsk / naprawa auta Śląsk
- naprawa auta Świętochłowice
- stacja diagnostyczna Ruda Śląska / stacja kontroli pojazdów Ruda Śląska (Godula, Bykowina)

## Zakres audytu "PRZED"
Przeanalizowane obszary:
- routing i indeksowalne strony (`src/app/**/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`)
- metadata (title, description, canonical, OG/Twitter)
- H1 i struktura treści lokalnych
- JSON-LD (Organization/LocalBusiness/Breadcrumb/FAQ)
- linkowanie wewnętrzne (home, usługi, kontakt, lokalizacje)
- redirecty i warianty URL
- obrazy/LCP (priorytety, preload, `sizes`)
- podstawowe elementy a11y i jakości copy

## Najważniejsze znaleziska "PRZED"

### P0
1. Brak dedykowanych landing pages pod intencje:
- `mechanik Świętochłowice`
- `stacja diagnostyczna Ruda Śląska`

2. Structured data wymagało dopracowania local SEO:
- brak jawnego powiązania marki z lokalizacjami przez `hasPOS`
- brak łatwego helpera do osadzania osobnego JSON-LD LocalBusiness/AutoRepair na stronach lokalnych
- brak `hasOfferCatalog/makesOffer` na poziomie lokalizacji

3. Brak redirectów dla popularnej literówki URL (np. `swietochlwoice`) i wariantów zapisu strony docelowej.

### P1
1. Zbyt słabe linkowanie wewnętrzne do kluczowych intencji lokalnych (home/usługi/kontakt).
2. Strony `/godula` i `/bykowina` miały poprawne treści, ale bez osobnej sekcji "Obsługujemy Śląsk".
3. H1 na stronach Godula/Bykowina były mniej precyzyjne pod docelowe frazy lokalne.
4. Globalny preload obrazu hero w `layout.tsx` ładował zasób na wszystkich podstronach.

### P2
1. Drobna literówka językowa w treści stałej (`pordczas`).
2. Brak formalnych notatek utrzymaniowych SEO dla dalszej rozbudowy.

## Wdrożenia "PO" (P0 -> P1 -> P2)

## P0 wdrożone
- Dodane landingi z unikalną treścią, CTA, NAP, FAQ i linkowaniem:
  - `/mechanik-swietochlowice`
  - `/stacja-diagnostyczna-ruda-slaska`
- Rozbudowane metadata i lokalne frazy dla:
  - `/swietochlowice`
  - `/godula`
  - `/bykowina`
  - `/uslugi`
  - `/kontakt`
- Rozbudowane schema w `src/lib/seo.ts`:
  - `Organization` + `hasPOS` dla 3 lokalizacji
  - osobne obiekty `AutoRepair`/`AutomotiveBusiness` dla każdej lokalizacji
  - `hasOfferCatalog` + `makesOffer`
  - helper `createLocationJsonLd(...)` do osadzania JSON-LD na podstronach
- Osadzone osobne JSON-LD lokalizacji na stronach:
  - `/swietochlowice`
  - `/godula`
  - `/bykowina`
  - landingi lokalne

## P1 wdrożone
- Rozszerzone treści lokalizacji o sekcję "Obsługujemy Śląsk" i linki do pobliskich miast.
- Wzmocnione internal linking:
  - Home (`HomeHeader`, `ServiceArea`) -> frazy lokalne i landingi
  - Usługi -> lokalizacje + landingi
  - Kontakt -> linki do kluczowych landingów
  - Stopka -> dodatkowe linki lokalne
- Aktualizacja sitemap (`src/app/sitemap.ts`) o nowe landingi.
- Dodane redirecty 301 w `next.config.mjs`:
  - `/mechanik-swietochlwoice` -> `/mechanik-swietochlowice`
  - `/mechanik-swietochłowice` -> `/mechanik-swietochlowice`
  - `/stacja-kontroli-pojazdow-ruda-slaska` -> `/stacja-diagnostyczna-ruda-slaska`
- Usunięty globalny preload obrazu hero z `layout.tsx`.
- Dodane `sizes` dla wybranych obrazów i `priority` dla hero lokalizacji (`LocationHeader`).

## P2 wdrożone
- Poprawiona literówka w `src/constants/swietochlowice.tsx`.
- Dodany dokument utrzymaniowy: `SEO_IMPLEMENTATION_NOTES.md`.

## Checklist wykonania
- [x] Audyt routingu i stron
- [x] Weryfikacja title/description/canonical/OG/Twitter
- [x] Weryfikacja H1
- [x] Weryfikacja robots/sitemap
- [x] Weryfikacja linkowania wewnętrznego
- [x] Rozbudowa treści lokalnych
- [x] Dodanie landing pages pod intencje lokalne
- [x] JSON-LD: Organization + LocalBusiness/AutoRepair + Breadcrumb + FAQ
- [x] Redirecty 301 dla wybranych wariantów URL
- [x] Sanity checks (`lint`, `build`)

## Komendy uruchomione i wyniki
1. `npm run lint`
- wynik początkowy: błędy formatowania Prettier

2. `npm run lint -- --fix`
- wynik: sukces, automatyczna poprawa formatowania

3. `npm run lint`
- wynik końcowy: sukces

4. `npm run build`
- wynik: sukces, build produkcyjny zakończony poprawnie

## Uwaga strategiczna
Wdrożone zostały najlepsze praktyki SEO on-site i local SEO, ale nie ma gwarancji "Top1". Wyniki rankingowe zależą też od czynników off-site (profil linków, Google Business Profile, opinie, konkurencja).

## Następne kroki (poza kodem)
1. Podpiąć i skonfigurować Google Search Console (mapa strony + monitoring zapytań).
2. Ujednolicić NAP i kategorie w Google Business Profile dla 3 punktów.
3. Systematycznie zbierać opinie klientów dla każdej lokalizacji.
4. Raz w miesiącu analizować zapytania lokalne i rozwijać FAQ/landingi pod realne frazy z GSC.
