import React, { useEffect, useState } from 'react';

import Tweet from '../Tweet';
import {getTweetListRequest} from '../../../../services/Tweets/api';

const TweetList = () => {
    const [listOfTweets, setListOfTweets] = useState([]);
    useEffect(() => {
		getTweetListRequest().then(res => {
			setListOfTweets(res);
		});
	}, []);
    return(
        <div className = "tweet-list">
            {listOfTweets.map( tweet => {
                return <Tweet tweet = {tweet}/>;
            })}
        </div>
    );

};
export default TweetList;