import React, { useState } from 'react';
import {initialFormState} from "../../../../constants";
import './index.css';
import moment from "moment";

const AddAnnouncement = ({setListOfAnnouncements,listOfAnnouncements,lastId}) => {
    const [announcement, setAnnouncement] = useState(initialFormState);

    const handleInputChange = (event) => {
        const {name, value} = event.currentTarget
        setAnnouncement({...announcement, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(announcement.title && announcement.description) return addNewAnnouncement(announcement);
        setAnnouncement(initialFormState);
    }

    const addNewAnnouncement = (announcement) => {
        const newAnnouncement = {
            ...announcement,
            id: lastId,
            date: moment().format('DD-MM-YYYY'),
        }
        setListOfAnnouncements([...listOfAnnouncements, newAnnouncement]);
    }

    return (
        <form
            onSubmit={handleSubmit}>
            <div className="input-container">
            <label>Title</label>
            <input
                type="text"
                name="title"
                value={announcement.title}
                onChange={handleInputChange}
            />
            <label>Description</label>
            <input
                type="text"
                name="description"
                value={announcement.description}
                onChange={handleInputChange}
            />
            </div>
            <button>Add new announcement</button>
        </form>
    )
}

export default AddAnnouncement