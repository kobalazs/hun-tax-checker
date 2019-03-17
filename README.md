# hun-tax-checker
Automated taxation status checker for Hungarian private entrepreneurs

## Dependencies
Unix-based system with Docker & Docker Compose installed and running
(Might work on Windows too, didn't care to test...)

## How To Use
1. Copy `.env.example` to `.env`
2. Fill your personal details in `.env`
3. Run `$ ./start.sh`
4. Screenshots can be found in `/results`

## Checks Performed
1. ✔ Vállalkozás státusza az egyéni vállalkozók nyilvántartásában
2. ✔ Közösségi (EU) adószám megléte
3. ✔ Helyi iparűzési adó befizetési státusza (csak Budapesten)
4. ⏳ Kamarai tagdíj befizetési státusza (csak Magyar Kereskedelmi és Iparkamara)
5. ⏳ Adó folyószámla egyenleg (tartozások vagy túlfizetések)
