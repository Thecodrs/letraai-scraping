const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

let DAYS = 28; // 28
let MONTHS = 12; // 11 months
let START_YEAR = 2006; // 3 years till 2020

let baseUrl = 'https://www.buzzfeed.com/archive/2020';

function generateBuzzfeedUrlByYear() {
    let iterator = 0;
    while (START_YEAR < 2020) {
        START_YEAR += 1;
        iterator += 1;

        baseUrl = `https://www.buzzfeed.com/archive/${START_YEAR}`;
        generateBuzzfeedUrlByMonth(baseUrl);
    }
}

generateBuzzfeedUrlByYear();

function generateBuzzfeedUrlByMonth(yearUrl) {
    let urls = [];

    for(let i = 0; i < MONTHS; i++) {
        const iterator = i + 1;
        const url = `${yearUrl}/${iterator}/2`;
        console.log('Month: ', url);
        console.log('Year: ', yearUrl);
        console.log('************************');
        console.log('************************');
        urls.push(url);

        generateBuzzfeedUrlByday(iterator, yearUrl);
    }
    // console.log('Months: ', urls);
    return urls;
}


function generateBuzzfeedUrlByday(month, yearlUrl) {
    let listOfDays = [];
    for(let i = 0; i < DAYS; i++) {
        const iterator = i + 1;
        const url = `${yearlUrl}/${month}/${iterator}`;
        listOfDays.push(url);
    }
    console.log('Days: ', listOfDays);
    return listOfDays;
}


function crawlPage() {
    nightmare
    .goto('https://www.buzzfeed.com/archive')
    .click('#mod-story-card-2 > .js-card__content > .xs-px05 > .xs-mb05 > .js-card__link')
    .goto('https://www.buzzfeed.com/patrickt47946a871/name-the-musical-from-only-a-high-school-productio-eeixbwe0ux')
    .end()
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
};

crawlPage();

// 2020/1/2
// Year/Month/Day
// 2020 (4 years from now)
// Month (11 months)
// Days (28 days)

// https://www.buzzfeed.com/archive/2020/1/2

