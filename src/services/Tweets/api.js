var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.REACT_APP_CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

export const getTweetListRequest = async params => {
    return await [
        {
            author: 'dsadasdas',
            date: '12-08-2033',
            text: 'dasdasdasdawedawfdefasfdsfasdfsa'
        },
        {
            author: 'igor',
            date: '30-09-2010',
            text: 'takto'
        },
        {
            author: 'igor',
            date: '30-09-2010',
            text: 'takto'
        },
        {
            author: 'igor',
            date: '30-09-2010',
            text: 'takto'
        }
    ]
    // q: input value 
   /*  return await client.get('search/tweets', {q: 'node.js', function(error, tweets, response) {
    console.log(tweets);
    }
 }); */
};
