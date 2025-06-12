# Testy E2E Playwright

Projekt zawiera zestaw testów end-to-end napisanych przy użyciu frameworka [Playwright](https://playwright.dev/), które automatyzują testowanie różnych funkcjonalności aplikacji webowej.

---

## Spis testów

| Plik testowy           | Opis testów                                 |
|-----------------------|---------------------------------------------|
| `checkbox-radio.spec.ts` | Testy wyboru i interakcji z checkboxami i radio buttonami |
| `login.spec.ts`          | Testy logowania – poprawne i błędne próby  |
| `form.spec.ts`           | Walidacja formularzy                        |
| `table.spec.ts`          | Wyszukiwanie i interakcje z tabelą         |
| `iframe.spec.ts`         | Testy interakcji z osadzonym iframe        |
| `dropdown.spec.ts`       | Testy wyboru z rozwijanej listy (dropdown) |

---

## Wymagania

- Node.js (wersja 16 lub wyższa)
- npm lub yarn

---

## Instalacja

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/Stober79/TestyE2E_Playwright.git
   cd TestyE2E_Playwright
   
2. Zainstaluj zależności:
   
   npm install
   # lub
   yarn install

4. Zainstaluj przeglądarki Playwright:
   
   npx playwright install

# Uruchamianie testów

1. Aby uruchomić wszystkie testy, wykonaj:
   
   npx playwright test
   
2. Możesz również uruchomić pojedynczy plik testowy, np.:

   npx playwright test login.spec.ts



