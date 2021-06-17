const functions = require("firebase-functions");
const express = require('express');
const PORT = 24560;
const app = express();

/* JSON body parse*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test', (req, res, next) => {
    res.send('LOL:: Connected to server.')
});

app.post('/login', (req, res, next) => {
    console.info('API call: /login');
    const data = req.body;

    if (data.phone) {
        res.json({ 'status': 'Welcome! Firebase Key: (Hash)' });
    } else {
        res.status(500).json({ 'status': 'wrong input' });
    }
});

app.listen(PORT, () => {
    console.log('Server is running...');
});

exports.app = functions.https.onRequest(app);