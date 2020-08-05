const express = require('express')
const Twitter = require('twitter')
const app = express()
const port = 8000

const client = new Twitter({
    consumer_key: process.env.REACT_APP_CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/twitter/search', (request, res) => {
    let q = request.param('q') || 'react';
    console.log(q)
    client.get('/search/tweets', {q: q}, function (error, tweets, response) {
        res.send(tweets);
    });
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})