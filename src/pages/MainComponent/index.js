import React, {useState, useEffect} from 'react';
import Input from "../MainComponent/components/Input";
import AnnouncementList from "../MainComponent/components/AnnouncementList";


import './index.css';

const MainComponent = () => {

    const [inputValue, setInputValue] = useState();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(inputValue);

        }, 3000)

        return () => clearTimeout(delayDebounceFn)
    }, [inputValue])

    return (
        <div className="main">
            <h3 className="site-title">Announcement Website</h3>
            <div className="main-content">
                <div className="search-content">
                    <Input
                        value={inputValue}
                        onChange={value => setInputValue(value)}
                    />
                    <h3 className="result-title">Result</h3>
                </div>
                <div className="list-content">
                    <AnnouncementList
                        // listOfAnnouncement = {listOfAnnouncements}
                    />
                    <h3 className="add-announcement-title">Add New Announcement</h3>

                </div>
            </div>
        </div>
    );
};

export default MainComponent;