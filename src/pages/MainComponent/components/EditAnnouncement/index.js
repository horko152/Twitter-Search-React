import React, {useEffect, useState} from 'react'
import "./index.css"

const EditAnnouncement = ({currentAnnouncement, updateAnnouncement, setEditing, editing}) => {

    const [announcement, setAnnouncement] = useState(currentAnnouncement)

    useEffect(() => {
        setAnnouncement(currentAnnouncement)
        console.log(announcement)
        },[editing])
    const handleInputChange = event => {
        const { name, value } = event.target
        setAnnouncement({ ...announcement, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!announcement.title || !announcement.description) return updateAnnouncement(announcement.id, announcement)
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <div className="button-container">
            <button>Update announcement</button>
            <button
                onClick={() => setEditing(false)}
                className="button"
            >
                Cancel
            </button>
            </div>
        </form>
    )
}

export default EditAnnouncement