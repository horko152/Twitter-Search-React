import React, {useState} from 'react';

import Tweet from '../Tweet';
import './index.css';

const TweetList = ({/*inputValue*/}) => {
    const [listOfTweets, setListOfTweets] = useState([]);

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