import React from 'react';
import dateFormat from 'dateformat';
import './index.css';

const Tweet = ({tweet}) => {
    return (
        <div className="tweet-content tweet">
            <div className="tweet-title">
                <p className="tweet-author">{tweet.user.name}</p>
                <p className="tweet-date">{dateFormat(tweet.created_at,"mmmm dS, yyyy, h:MM:ss TT")}</p>
            </div>
            <p className="tweet-text">{tweet.text}</p>
        </div>
    );
};

export default Tweet;