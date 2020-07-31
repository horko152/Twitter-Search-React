import React from 'react';
import './index.css';

const Tweet = ({tweet}) => {
    return (
        <div className="tweet-content tweet">
            <div className="tweet-title">
                <p className="tweet-author">{tweet.author}</p>
                <p className="tweet-date">{tweet.date}</p>
            </div>
            <p className="tweet-text">{tweet.text}</p>
        </div>
    );
};

export default Tweet;