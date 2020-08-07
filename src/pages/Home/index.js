import React, {useState, useEffect} from 'react';

import Input from './components/Input';
import TweetList from './components/TweetList';

import {getTweetListRequest} from "../../services/TweetList/api";
// import Server from '../../server/server.js';

const Home = () => {

    const [inputValue, setInputValue] = useState();
    // const [listOfTweets, setListOfTweets] = useState([]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            // Send Axios request here
        }, 3000)

        return () => clearTimeout(delayDebounceFn)
    }, [inputValue])


    return (
        <div className="main-content">
            <h3 className="search-title">Twitter Search</h3>
            <Input
                value={inputValue}
                onChange={value => setInputValue(value)}
            />
            <h3 className="result-title">Result</h3>
            <TweetList /*inputValue={inputValue}*//>
        </div>
    );
};

export default Home;