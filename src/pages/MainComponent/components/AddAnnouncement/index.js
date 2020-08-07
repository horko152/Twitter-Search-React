import React, { useState } from 'react';
import './index.css';

const AddAnnouncement = ({addNewAnnouncement}) => {

    const initialFormState = {id: null, title: '', date: null, description:''}
    const [announcement, setAnnouncement] = useState(initialFormState);

    const handleInputChange = (event) => {
        const {name, value} = event.currentTarget
        setAnnouncement({...announcement, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(!announcement.title || !announcement.description) return addNewAnnouncement(announcement);
        console.log(announcement);
        setAnnouncement(initialFormState);
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