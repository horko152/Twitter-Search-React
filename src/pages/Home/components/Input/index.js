import React, {useState} from 'react';
import './index.css';

const Input = () => {
    const [inputValue, setInputValue] = useState();
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // after pressing Enter we call method that generate new list of tweets by keyword
            console.log(inputValue);
            console.log('Enter was pressed');
        }
    }
    return (
        <div className="input-content">
            <input className="search-input" type="text" value={inputValue} onKeyPress={handleKeyPress}
                   onChange={e => setInputValue(e.target.value)} placeholder="Search tweets"/>
        </div>
    );
};

export default Input;