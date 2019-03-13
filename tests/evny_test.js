
Feature('Egyéni vállalkozók nyilvántartása');

Scenario('ENYF Portál működése', (I) => {
    I.amOnPage('https://www.nyilvantarto.hu/evny-lekerdezo/');
    I.see('Egyéni vállalkozók nyilvántartása');
});
