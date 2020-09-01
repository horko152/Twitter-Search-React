import React, {useState} from 'react';
import EditAnnouncement from './components/EditAnnouncement';
import AddAnnouncement from './components/AddAnnouncement';
import {initialFormState} from '../../constants';
import SearchedList from './components/SearchedList';
import SimilarList from './components/SimilarList';

const Content = ({listOfAnnouncements, setListOfAnnouncements, inputValue}) => {

    const [editing, setEditing] = useState(false);
    const [currentAnnouncement, setCurrentAnnouncement] = useState(initialFormState);
    const [selectedSimilar, setSelectedSimilar] = useState(initialFormState);

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
        <>
            <SearchedList
                inputValue={inputValue}
                listOfAnnouncements={listOfAnnouncements}
                setListOfAnnouncements={setListOfAnnouncements}
                editRow={editRow}
                setSelectedSimilar={setSelectedSimilar}
            />
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
            <SimilarList
                inputValue={inputValue}
                listOfAnnouncements={listOfAnnouncements}
                setListOfAnnouncements={setListOfAnnouncements}
                editRow={editRow}
                selectedSimilar={selectedSimilar}
            />
        </>
    );
};

export default Content
