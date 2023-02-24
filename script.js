const gemeente = {
    naam: 'Bar',
    hoofdstad: 'Foobarstad',
    steden: [
        {
            postcode: '10234',
            naam: 'Foobarstad',
            inwoners: 10234,
            burgemeester: {
                naam: 'nhoJ',
                aangetreden: 2020,
            },
        },

        {
            postcode: '10101',
            naam: 'Nieuw Foo',
            inwoners: 34567,
            burgemeester: {
                naam: 'enaJ',
                aangetreden: 2019,
            },
        },

        {
            postcode: '34633',
            naam: 'Bardorp',
            inwoners: 12354,
            burgemeester: {
                naam: 'hargaZ',
                aangetreden: 2020,
            },
        },

        {
            postcode: '29567',
            naam: 'Barfoo',
            inwoners: 1376,
            burgemeester: {
                naam: 'leraK',
                aangetreden: 2022,
            },
        },

        {
            postcode: '55555',
            naam: 'Prodstad',
            inwoners: 55555,
            burgemeester: {
                naam: 'iL',
                aangetreden: 2018,
            },
        },

        {
            postcode: '23412',
            naam: 'Developerdorp',
            inwoners: 3,
            burgemeester: {
                naam: 'nalA',
                aangetreden: 2021,
            },
        },

        {
            postcode: '33669',
            naam: 'Nieuw developerdorp',
            inwoners: 52978,
            burgemeester: {
                naam: 'regsdE',
                aangetreden: 2020,
            },
        },
    ],
};

for (let i = 1; i < gemeente.steden.length + 1; i++) {
    let naamReversed = gemeente.steden[i].burgemeester.naam;
    let fixedNaam = namen.split('').reverse().join('');
    let burgemeesterElement = document.getElementById(`burgemeester${i + 1}`);
    burgemeesterElement.innerHTML = fixedNaam;

    document.getElementById("naam" + i).innerHTML = gemeente.steden[i].naam;
    document.getElementById("inwonersaantal" + i).innerHTML = gemeente.steden[i].inwoners;
    document.getElementById("postcode" + i).innerHTML = gemeente.steden[i].postcode;
}
