
Feature('3 Helyi iparűzési adó befizetésének ellenőrzése');

Scenario('A Budapesti Adó Főosztály oldala üzemel', (I) => {
    I.amOnPage('https://ssl.budapest.hu/web_hair/mbej.do');
    I.waitForText('E-ügyintézés');
});

Scenario('Az adószámla kivonat letöltve', (I) => {
    console.log('  ℹ Ügyfélkapu felhasználónév: ' + process.env.UGYFELKAPU_FELHASZNALONEV);
    console.log('  ℹ Ügyfélkapu jelszó: ' + '*'.repeat(process.env.UGYFELKAPU_JELSZO.length));
    console.log('  ✋ Az eredmény kézzel ellenőrizendő a results/hipa.png kép megtekintésével!');

    I.amOnPage('https://gate.gov.hu/sso/ap/ApServlet?partnerid=bpfph&target=https-ssl.budapest.hu-443-web_hair');
    I.wait(2);
    
    I.fillField('input[name=felhasznaloNev]', process.env.UGYFELKAPU_FELHASZNALONEV);
    I.fillField('input[name=jelszo]', process.env.UGYFELKAPU_JELSZO);
    I.click('Belépés');
    I.wait(2);
    I.click('ide!');
    I.wait(2);

    I.amOnPage('https://ssl.budapest.hu/web_hair/fszla.do');
    I.waitForText('Adószámla kivonat');
    I.saveScreenshot('hipa.png', true);
});
