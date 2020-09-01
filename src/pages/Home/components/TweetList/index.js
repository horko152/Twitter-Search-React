import React, {useState} from 'react';

import Tweet from './Tweet';
import './index.css';

const TweetList = ({listOfTweets}) => {

    return (
        <div className="tweet-list">
            {listOfTweets?.map(tweet => {
                return <Tweet tweet={tweet}/>;
            })}
        </div>
    );

};
export default TweetList;