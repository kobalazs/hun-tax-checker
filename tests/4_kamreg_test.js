
Feature('4 Kamarai tagdíj befizetésének ellenőrzése');

Scenario('A Magyar Kereskedelmi és Iparkamara oldala üzemel', (I) => {
    I.amOnPage('https://www.kamreg.hu/mkkir/index.html');
    I.waitForText('Üdvözöljük a területi kereskedelmi és iparkamarák online Kamarai Regisztrációs oldalán');
});

Scenario('Nincs kamarai tartozás', (I) => {
    console.log('  ℹ Adószám: ' + process.env.ADOSZAM);

    I.amOnPage('https://www.kamreg.hu/mkkir/index.html');
    I.wait(2);

    process.env.ADOSZAM.substring(2).split('').forEach((character) => {
        I.appendField('input[name=adoszam]', character);
        I.wait(0.1);
    });
    I.click('Tovább');
    I.wait(2);

    I.fillField('input[name=password]', process.env.MKIK_JELSZO);
    I.click('Bejelentkezés');
    I.wait(2);

    for (var i = 0; i < 3; i++) {
        I.click('Tovább');
        I.wait(2);
    }

    I.see('A beérkezett és feldolgozott adatok alapján Önnek nincs tartozása.');
    I.saveScreenshot('kamreg.png', true);
});
