
Feature('2 Közösségi (EU) adószám meglétének ellenőrzése');

Scenario('A European Commission oldala üzemel', (I) => {
    I.amOnPage('http://ec.europa.eu/taxation_customs/vies/');
    I.see('VIES VAT number validation');
});

Scenario('A közösségi (EU) adószám létezik', (I) => {
    console.log('  ℹ Adószám: ' + process.env.ADOSZAM);
    I.amOnPage('http://ec.europa.eu/taxation_customs/vies/');

    I.selectOption('select[name=memberStateCode]', process.env.ADOSZAM.substring(0, 2));
    I.fillField('input[name=number]', process.env.ADOSZAM.substring(2, 10));

    I.selectOption('select[name=requesterMemberStateCode]', process.env.ADOSZAM.substring(0, 2));
    I.fillField('input[name=requesterNumber]', process.env.ADOSZAM.substring(2, 10));

    I.click('Verify');
    I.wait(1);
    I.see('Yes, valid VAT number');
    I.saveScreenshot('vies.png', true);
});
