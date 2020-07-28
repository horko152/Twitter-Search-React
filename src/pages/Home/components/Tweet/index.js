import React from 'react';

const Tweet = ({ tweet }) => {
    return(
        <div className = "tweet-content">
            <div className = "tweet-title">
                <p className = "tweet-author">{tweet.author}</p>
                <p className = "tweet-date">{tweet.date}</p>
            </div>
            <p className = "tweet-text">{tweet.text}</p>
        </div>
    );
};

export default Tweet;