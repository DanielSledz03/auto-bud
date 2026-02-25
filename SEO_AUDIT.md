# SEO Audit - Auto-Bud Bosch Car Service

Data audytu: 23 lutego 2026

## Założenia biznesowe
- Priorytetowe frazy:
  - warsztat samochodowy Świętochłowice
  - warsztat samochodowy Katowice
  - serwis samochodowy Śląsk / warsztat samochodowy Śląsk
- Podejście: white-hat zgodne z Google Search Essentials.

## Problemy i priorytety

| Priorytet | Problem | Dlaczego to ważne | Jak zmierzyć efekt | Status |
|---|---|---|---|---|
| P0 | Brak dedykowanego landingu pod Katowice | Brak silnego dopasowania intencji lokalnej dla frazy „warsztat samochodowy Katowice” | GSC: wzrost wyświetleń i kliknięć dla zapytań z „katowice”; pozycje URL `/katowice` | Wdrożono |
| P0 | Brak dedykowanej strony obszaru „Śląsk” i listy miast | Słabe pokrycie fraz regionalnych i brak jasnego sygnału local service area | GSC: wyświetlenia fraz z „śląsk”; kliknięcia URL `/slask` | Wdrożono |
| P0 | Zbyt mało podstron usługowych long-tail | Niewystarczające pokrycie intencji typu diagnostyka/klimatyzacja/olej/hamulce/przegląd | Liczba wejść organicznych na URL usług; wzrost liczby zapytań long-tail w GSC | Wdrożono |
| P0 | Niespójny NAP w danych strukturalnych i sekcjach strony | Ryzyko osłabienia sygnałów lokalnych i mniejszej wiarygodności danych | Walidacja schema + spójność NAP na stronie i w GBP | Wdrożono |
| P0 | Brak BreadcrumbList i lokalnego FAQ schema na podstronach | Mniej czytelna architektura dla Google i mniejsze szanse na rich results | Rich Results Test, GSC (Ulepszenia), obecność okruszków w SERP | Wdrożono |
| P0 | Zbyt mało silnego linkowania wewnętrznego do stron docelowych | Trudniejszy crawl i słabsza dystrybucja mocy linków wewnętrznych | Crawl (Screaming Frog): liczba linków wewnętrznych do `/katowice`, `/slask`, usług | Wdrożono |
| P1 | Brak spójnych breadcrumbs w UI | Gorsza nawigacja użytkownika i niższa czytelność hierarchii | Crawl + test manualny; współczynnik zaangażowania na podstronach | Wdrożono |
| P1 | Brak jawnego 301 z non-www na www | Potencjalna duplikacja hosta i rozproszenie sygnałów rankingowych | Test `curl -I` dla hostów; logi i GSC (kanoniczny host) | Wdrożono (po stronie Next) |
| P1 | Słaba jakość stron 404 | Gorszy UX i strata ruchu przy błędnych URL | Crawl: liczba 404 i zachowanie użytkowników (GA4) | Wdrożono |
| P1 | Nadmiar JS w kluczowych komponentach hero/usług | Niepotrzebna hydracja może pogarszać CWV | Lighthouse (LCP/TBT), Web Vitals (CrUX/GA4) | Wdrożono częściowo |
| P1 | Niewystarczająco czytelne CTA do umówienia wizyty | Niższa konwersja z ruchu organicznego | GA4: kliknięcia CTA i wejścia na `/wizyta` z SEO | Wdrożono |
| P2 | Meta keywords historycznie przeładowane | Sygnał o niskiej jakości edycji SEO, bez realnej wartości rankingowej | Manual QA metadanych + utrzymanie porządku | Wdrożono (uproszczono) |
| P2 | Brak pełnego procesu monitoringu po wdrożeniu | Bez monitoringu trudno potwierdzić efekt i iterować | Dashboard GSC/GA4 + miesięczny raport | Do wdrożenia poza kodem |

## Co zostało wdrożone w repozytorium
- Nowe strony lokalne:
  - `/katowice`
  - `/slask`
- Rozbudowa lokalna i on-page:
  - `/swietochlowice` (H1, intro lokalne, FAQ lokalne, linki usługowe)
  - `/uslugi` + nowe podstrony usług (`/uslugi/[slug]`)
- Technical SEO:
  - aktualizacja `robots.txt` i `sitemap.xml`
  - canonical i metadata przez wspólny helper
  - custom `404` (`not-found.tsx`)
  - redirect 301 non-www -> www
- Structured data:
  - globalny `@graph` (Organization + WebSite + AutoRepair dla 3 lokalizacji)
  - BreadcrumbList na podstronach
  - FAQPage tam, gdzie FAQ jest widoczne
- Local SEO i NAP:
  - jedno źródło danych NAP dla 3 lokalizacji
  - spójne dane kontaktowe i mapy w sekcjach strony
- UX/CWV/a11y:
  - ograniczenie client-side JS w hero i kartach usług
  - poprawa linków i CTA (`/wizyta`)
  - poprawki a11y nawigacji (button/aria)

## Szybka metoda pomiaru efektu (30-90 dni)
1. GSC -> Performance:
   - filtry zapytań: `warsztat samochodowy świętochłowice`, `warsztat samochodowy katowice`, `serwis samochodowy śląsk`.
   - porównanie 28 dni vs poprzednie 28 dni.
2. GSC -> Pages:
   - monitorować URL: `/katowice`, `/slask`, `/uslugi/*`.
3. GA4:
   - ruch organiczny landing pages + kliknięcia CTA do `/wizyta`.
4. Crawl:
   - kontrola canonical, status 200/301, brak przypadkowego `noindex`.
5. CWV/Lighthouse:
   - pomiar LCP/CLS dla home, `/katowice`, `/swietochlowice`, `/uslugi`.
