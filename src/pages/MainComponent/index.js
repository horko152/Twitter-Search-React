import React, { useState } from 'react';
import Input from "../MainComponent/components/Input";
import Content from './components/Content';
import { listData } from "./constants";

import './index.css';

const MainComponent = () => {
    const [ inputValue, setInputValue ] = useState();

    const [ listOfAnnouncements, setListOfAnnouncements ] = useState(listData);


    return (
        <div className="main">
            <h3 className="site-title">Announcement Website</h3>
            <div className="main-content">
                <div className="search-content">
                    <Input
                        value={inputValue}
                        onChange={value => setInputValue(value)}
                    />
                </div>
                <Content
                    listOfAnnouncements={listOfAnnouncements}
                    setListOfAnnouncements={setListOfAnnouncements}
                    inputValue={inputValue}
                />

            </div>
        </div>
    );
};

export default MainComponent;