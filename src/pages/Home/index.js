import React, {useState, useEffect} from 'react';
import {debounce, result} from 'lodash';
import Input from './components/Input';
import TweetList from './components/TweetList';
import './index.css';
import '../../assets/reset.css';


const Home = () => {

    const [inputValue, setInputValue] = useState();
    const [listOfTweets, setListOfTweets] = useState([]);

    const gettingData = () => {
        fetch(`http://localhost:8000/api/twitter/search?q=${inputValue}`)
        .then((result) => result.json())
        .then((result) => {
            console.log(result);
            if(result?.statuses)
            {
                setListOfTweets(result.statuses);
            }
            }
        )
    }
    console.log(listOfTweets);
    const debounceMethod = debounce(gettingData,500);
    useEffect(() => {
        console.log("Some text");
        debounceMethod();
    },[inputValue])

    return (
        <div className="main-content">
            <h3 className="search-title">Twitter Search</h3>
            <Input
                value={inputValue}
                onChange={value => setInputValue(value)}
            />
            <h3 className="result-title">Result</h3>
            <TweetList
                listOfTweets={listOfTweets}
            />
        </div>
);
};

export default Home;