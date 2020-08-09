import React from 'react';
import './index.css';

const Announcement = ({announcement, deleteAnnouncement, editRow}) => {

    const handleDeleteAnnouncement = (id) => {
        let answer = window.confirm('Are you sure?');
        if (answer) deleteAnnouncement(id);
    }
    const handleOnClickTableRow = () => {
        console.log(announcement);
    }
    return (
        <tr key={announcement.id} className="table-row" data-item={announcement} onClick={handleOnClickTableRow}>
            <td className="announcement-title">{announcement.title}</td>
            <td className="announcement-date">{announcement.date}</td>
            <td className="announcement-description">{announcement.description}</td>
            <td className="button-container">
                <button
                    className="button"
                    onClick={() => {
                        editRow(announcement)
                    }}
                >
                    Edit
                </button>
                <button
                    className="button"
                    onClick={() => {
                        handleDeleteAnnouncement(announcement.id)
                    }}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Announcement;