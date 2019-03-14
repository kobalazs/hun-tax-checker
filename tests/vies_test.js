
Feature('Közösségi (EU) adószám meglétének ellenőrzése');

Scenario('A European Commission oldala üzemel', (I) => {
    I.amOnPage('http://ec.europa.eu/taxation_customs/vies/');
    I.see('VIES VAT number validation');
});

Scenario('A vállalkozás állapota működő', (I) => {
    console.log('  * Adószám eleje: ' + process.env.ADOSZAM_ORSZAGKODJA + process.env.ADOSZAM_ELSO_NYOLC_SZAMJEGYE);
    I.amOnPage('http://ec.europa.eu/taxation_customs/vies/');

    I.selectOption('select[name=memberStateCode]', process.env.ADOSZAM_ORSZAGKODJA);
    I.fillField('input[name=number]', process.env.ADOSZAM_ELSO_NYOLC_SZAMJEGYE);

    I.selectOption('select[name=requesterMemberStateCode]', process.env.ADOSZAM_ORSZAGKODJA);
    I.fillField('input[name=requesterNumber]', process.env.ADOSZAM_ELSO_NYOLC_SZAMJEGYE);

    I.click('Verify');
    I.wait(1);
    I.see('Yes, valid VAT number');
    I.saveScreenshot('vies.png', true);
});
