import React, {useEffect, useState} from 'react';

const Input = () => {
    const [inputValue,setInputValue] = useState();

    return(
        <div className = "input-content">
        <input className ="search-input" type = "text" value = {inputValue} placeholder = "Search tweets"></input>
    </div>
    );
};

export default Input;