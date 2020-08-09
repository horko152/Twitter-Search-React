import React, {useState, useEffect} from 'react';
import _, {includes} from 'lodash';
import ignoreCase from 'ignore-case'
import Input from "../MainComponent/components/Input";
import AnnouncementList from "../MainComponent/components/AnnouncementList";
import AddAnnouncement from "./components/AddAnnouncement";
import EditAnnouncement from "./components/EditAnnouncement";
import {listData, initialFormState} from "./constants";

import './index.css';

const MainComponent = () => {
    const [inputValue, setInputValue] = useState();
    const [editing, setEditing] = useState(false);
    const [currentAnnouncement, setCurrentAnnouncement] = useState(initialFormState);
    const [listOfAnnouncements, setListOfAnnouncements] = useState(listData);
    const [searchListOfAnnouncement, setSearchListOfAnnouncement] = useState(listData);
    const [similarListOfAnnouncement, setSimilarListOfAnnouncement] = useState([]);

    useEffect(() => {
        setSearchListOfAnnouncement(listOfAnnouncements.filter(announcement =>
            ignoreCase.includes(announcement.title, inputValue))
        );
    }, [inputValue]);

    useEffect(() => {
        setSearchListOfAnnouncement(listOfAnnouncements);
    }, [listOfAnnouncements]);

    const editRow = announcement => {
        setEditing(true);
        setCurrentAnnouncement({
            id: announcement.id,
            title: announcement.title,
            date: announcement.date,
            description: announcement.description
        });
    }

    return (
        <div className="main">
            <h3 className="site-title">Announcement Website</h3>
            <div className="main-content">
                <div className="search-content">
                    <Input
                        value={inputValue}
                        onChange={value => setInputValue(value)}
                    />
                    <AnnouncementList
                        listOfAnnouncements={searchListOfAnnouncement}
                        setListOfAnnouncements={setListOfAnnouncements}
                        editRow={editRow}
                    />
                </div>
                {editing ? (
                    <div>
                        <h3 className="edit-announcement-title">Edit Announcement</h3>
                        <EditAnnouncement
                            editting={editing}
                            setEditing={setEditing}
                            currentAnnouncement={currentAnnouncement}
                            listOfAnnouncements={listOfAnnouncements}
                            setListOfAnnouncements={setListOfAnnouncements}
                        />
                    </div>
                ) : (
                    <div>
                        <h3 className="add-announcement-title">Add New Announcement</h3>
                        <AddAnnouncement
                            setListOfAnnouncements={setListOfAnnouncements}
                            listOfAnnouncements={listOfAnnouncements}
                            lastId={listOfAnnouncements[listOfAnnouncements?.length - 1]?.id + 1}
                        />
                    </div>
                )}
                <div className="search-content">
                <h3 className="similar-list-title">Similar List</h3>
                <AnnouncementList
                    listOfAnnouncements={similarListOfAnnouncement}
                    setListOfAnnouncements={setSimilarListOfAnnouncement}
                    editRow={editRow}
                />
                </div>
            </div>
        </div>
    );
};

export default MainComponent;