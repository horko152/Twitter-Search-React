import React, {useState} from 'react';

import Input from './components/Input';
import TweetList from './components/TweetList';

const Home = () => {

    const [inputValue, setInputValue] = useState();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // after pressing Enter we give input value to the component Tweet list
            console.log('Enter was pressed');
            console.log(inputValue);
            setInputValue('');
        }
    }

    return (
        <div className="main-content">
            <h3 className="search-title">Twitter Search</h3>
            <Input
                value={inputValue}
                onChange={value => setInputValue(value)}
                onKeyPress={handleKeyPress}
            />
            <h3 className="result-title">Result</h3>
            <TweetList /*inputValue={inputValue}*//>
        </div>
    );
};

export default Home;