const express = require('express');
const cors = require('cors');
const { scrapeData } = require('./scraper'); // Import the scraper function

const app = express();
const port = 8383;

// Middleware
app.use(cors());
app.use(express.static('public'));

app.get('/api/items', async (req, res) => {
    try {
        const prices = await scrapeData();
        res.status(200).send(prices);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`);
});
