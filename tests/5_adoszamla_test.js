
Feature('5 Adó folyószámla egyenleg ellenőrzése');

Scenario('Az adószámla lekérdezése elindítva', (I) => {
    console.log('  ℹ Adóazonosító jel: ' + process.env.ADOAZONOSITO_JEL);
    console.log('  ℹ Ügyfélkapu felhasználónév: ' + process.env.UGYFELKAPU_FELHASZNALONEV);
    console.log('  ℹ Ügyfélkapu jelszó: ' + '*'.repeat(process.env.UGYFELKAPU_JELSZO.length));
    console.log('  ✋ Az eredmény kézzel ellenőrizendő az alábbi módon:');
    console.log('     1 Ügyfélkapu belépés itt: https://ugyfelkapu.magyarorszag.hu/');
    console.log('     2 Bal oldali menüben eBEV szolgáltatás');
    console.log('     3 Fönti menüben Szolgáltatások / Adószámla és Pótlékadó / Adószámla');

    I.amOnPage('https://gate.gov.hu/sso/ap/ApServlet?partnerid=mohu');
    I.wait(2);
    
    I.fillField('input[name=felhasznaloNev]', process.env.UGYFELKAPU_FELHASZNALONEV);
    I.fillField('input[name=jelszo]', process.env.UGYFELKAPU_JELSZO);
    I.click('Belépés');
    I.wait(2);
    I.click('ide!');
    I.wait(2);
    I.click('eBEV-szolgáltatás');
    I.wait(2);

    I.amOnPage('https://ebev.nav.gov.hu/lekerdezes?showIgeny=fo');
    I.click('Új lekérdezés');
    I.selectOption('select[name=0]', process.env.ADOAZONOSITO_JEL);
    I.click('Lekérdezés indítása');
});
