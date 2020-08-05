
export const getTweetListRequest = async params => {
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
        // q: input value
        // return await server.get('search/tweets', {
        //     q: 'node.js', function(error, tweets, response) {
        //         console.log(tweets);
        //     }
        // });
};