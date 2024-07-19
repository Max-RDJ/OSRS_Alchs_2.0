const cheerio = require('cheerio');

let osrsItems = [
    ["Coal", "453"],
    ["Mithril+platebody", "1121"],
    ["Adamant+platebody", "1123"]
];

async function scrapeData() {
    let results = [];
    try {
        const fetch = (await import('node-fetch')).default;

        // Fetch the page HTML for each item
        for (let i = 0; i < osrsItems.length; i++) {
            const itemName = osrsItems[i][0];
            const itemId = osrsItems[i][1];
            const url = `https://secure.runescape.com/m=itemdb_oldschool/${itemName}/viewitem?obj=${itemId}`;

            console.log(url);

            const res = await fetch(url);
            if (!res.ok) {
                console.error(`Failed to fetch data for ${itemName}. Status: ${res.status}`);
                continue;
            }

            const html = await res.text();
            const $ = cheerio.load(html);
            const price_history = getPrices($);

            console.log(price_history);
            results.push(price_history);
        }
    } catch (err) {
        console.log(err.message);
    }
    return results;
}

function getPrices($) {
    const price = $('h3 > span').map((_, el) => $(el).text()).get()[0];
    const itemName = $('.item-description > h2').map((_, el) => $(el).text()).get()[0];
    return { itemName, price };
}

module.exports = { scrapeData };
