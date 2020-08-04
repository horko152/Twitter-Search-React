import Twitter from 'twitter';
// const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.REACT_APP_CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

export const getTweetListRequest = async params => {
    if (params == null) {
        return [
            {
                author: 'Ernest Klein',
                date: '12-08-2033',
                text: 'Hello world'
            },
            {
                author: 'Vasyl Klymiv',
                date: '30-09-2010',
                text: 'This story about a project for searching tweets on Twitter'
            },
            {
                author: 'Vasyl Klymiv',
                date: '30-09-2010',
                text: 'This story about a project for searching tweets on Twitter'
            },
            {
                author: 'Vasyl Klymiv',
                date: '30-09-2010',
                text: 'This story about a project for searching tweets on Twitter'
            }
        ]
    } else {
        // q: input value
        return await client.get('search/tweets', {
            q: params, function(error, tweets, response) {
                console.log(tweets);
            }
        });
    }
};
