import React from 'react';

import Input from './components/Input';
import TweetList from './components/TweetList';

const Home = () => {

    return (
        <div className = "main-content">
            <h3 className = "search-title">Twitter Search</h3>
            <Input/>
            <h3 className = "result-title">Result</h3>
            <TweetList/>
        </div>
    );
};

export default Home;