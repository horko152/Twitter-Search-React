import React, {useEffect, useState} from 'react';

import Tweet from '../Tweet';
import {getTweetListRequest} from '../../../../services/Tweets/api';
import './index.css';

const TweetList = ({/*inputValue*/}) => {
    const [listOfTweets, setListOfTweets] = useState([]);
    useEffect(() => {
        getTweetListRequest(/*inputValue*/).then(res => {
            setListOfTweets(res);
            console.log(/*inputValue*/);
        });
    }, []);
    return (
        <div className="tweet-list tweet">
            {/*listOfTweets?.map*/}
            {listOfTweets && listOfTweets.length > 0 && listOfTweets.map(tweet => {
                return <Tweet tweet={tweet}/>;
            })}
        </div>
    );

};
export default TweetList;