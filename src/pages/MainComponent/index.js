import React, {useState, useEffect} from 'react';
import _, {debounce} from 'lodash';
import moment from 'moment'
import Input from "../MainComponent/components/Input";
import AnnouncementList from "../MainComponent/components/AnnouncementList";
import AddAnnouncement from "./components/AddAnnouncement";
import EditAnnouncement from "./components/EditAnnouncement";
import {listData, initialFormState} from "./constants";

import './index.css';

const MainComponent = () => {
    const [inputValue, setInputValue] = useState();
    const [editing, setEditing] = useState(false);
    const [currentAnnouncement, setCurrentAnnouncement] = useState(initialFormState); // TODO Поміняти карент анонсмент
    const [listOfAnnouncements, setListOfAnnouncements] = useState(listData);
    const [searchListOfAnnouncement, setSearchListOfAnnouncement] = useState(listData);

    useEffect(() => {
        // TODO фільтрувати по інпут велью
    }, [inputValue]);

    useEffect(() => {
        setSearchListOfAnnouncement(listOfAnnouncements);
    }, [listOfAnnouncements]);

    // TODO перекинути в дочірній компонент
    const deleteAnnouncement = (id) => {
        setListOfAnnouncements(listOfAnnouncements.filter(announcement => announcement.id !== id))
    }

    // TODO перекинути в дочірній компонент
    const updateAnnouncement = (id, updatedAnnouncement) => {
        setEditing(false);
        setListOfAnnouncements(listOfAnnouncements.map(announcement =>
            (announcement.id === id ? updatedAnnouncement : announcement)
        ))
    }

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
                    <h3 className="result-title">Result</h3>
                </div>
                <div className="list-content">
                    <AnnouncementList
                        listOfAnnouncements={searchListOfAnnouncement}
                        deleteAnnouncement={deleteAnnouncement}
                        editRow={editRow}
                    />
                    {editing ? (
                        <div>
                            <h3 className="edit-announcement-title">Edit Announcement</h3>
                            <EditAnnouncement
                                editting={editing}
                                setEditing={setEditing}
                                currentAnnouncement={currentAnnouncement}
                                updateAnnouncement={updateAnnouncement}
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
                </div>
            </div>
        </div>
    );
};

export default MainComponent;