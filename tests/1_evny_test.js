
Feature('1 Egyéni vállalkozók nyilvántartásának ellenőrzése');

Scenario('Az EVNY Portál üzemel', (I) => {
    I.amOnPage('https://www.nyilvantarto.hu/evny-lekerdezo/');
    I.see('Egyéni vállalkozók nyilvántartása');
});

Scenario('A vállalkozás állapota működő', (I) => {
    console.log('  ℹ Nyilvántartási szám: ' + process.env.NYILVANTARTASI_SZAM);
    I.amOnPage('https://www.nyilvantarto.hu/evny-lekerdezo/');
    I.fillField('form[name=form2] input[name=nyilvszam]', process.env.NYILVANTARTASI_SZAM);
    I.click('Lekérdezés', 'form[name=form2]');
    I.wait(1);
    I.see('Működő');
    I.saveScreenshot('evny.png', true);
});
