import React, {useState, useEffect} from 'react';
import _, {debounce} from 'lodash';
import moment from 'moment'
import Input from "../MainComponent/components/Input";
import AnnouncementList from "../MainComponent/components/AnnouncementList";
import AddAnnouncement from "./components/AddAnnouncement";
import EditAnnouncement from "./components/EditAnnouncement";


import './index.css';

const MainComponent = () => {

    const [inputValue, setInputValue] = useState();

    const [editing, setEditing] = useState(false);

    const initialFormState = {id: null, title: '', date: null, description:''}
    const [currentAnnouncement, setCurrentAnnouncement] = useState(initialFormState)
    const listData = [
        {id: 1, title: 'Looking for a job', date: '12-08-2018', description: 'junior something developer'},
        {id: 2, title: 'Looking for a new job', date: '12-08-2018', description: 'junior something developer'},
        {id: 3, title: 'Looking for a old job', date: '12-08-2018', description: 'junior something developer'}
    ];
    const [listOfAnnouncements, setListOfAnnouncements] = useState(listData);

    const newDate = new Date();
    const addNewAnnouncement = (announcement) => {
        const newAnnouncement = {
            ...announcement,
            id: listOfAnnouncements.length + 1,
            date: moment().format('DD-MM-YYYY'),
        }
        setListOfAnnouncements([ ...listOfAnnouncements, newAnnouncement ]);
    }

    const deleteAnnouncement = (id) => {
            setListOfAnnouncements(listOfAnnouncements.filter(announcement => announcement.id !== id))
    }

    const updateAnnouncement = (id, updatedAnnouncement) => {
        setEditing(false);
        setListOfAnnouncements(listOfAnnouncements.map(announcement => (announcement.id === id ? updatedAnnouncement : announcement)))
    }

    const editRow = announcement =>{
        setEditing(true);
        setCurrentAnnouncement({id: announcement.id, title: announcement.title, date: announcement.date, description: announcement.description});
    }

    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //         console.log(inputValue);
    //
    //     }, 3000)
    //
    //     return () => clearTimeout(delayDebounceFn)
    // }, [inputValue])

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
                        listOfAnnouncements={listOfAnnouncements}
                        deleteAnnouncement = {deleteAnnouncement}
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
                        <AddAnnouncement addNewAnnouncement={addNewAnnouncement}/>
                        </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default MainComponent;