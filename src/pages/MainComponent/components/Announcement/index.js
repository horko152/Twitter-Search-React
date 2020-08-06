import React from 'react';
import './index.css';

const Announcement = ({announcement}) => {
    return (
            <tr key={announcement.id} className="table-row">
                <td className="announcement-title">{announcement.title}</td>
                <td className="announcement-date">{announcement.date}</td>
                <td className="announcement-description">{announcement.description}</td>
                <td className="button-container">
                    <button className="button">Edit</button>
                    <button className="button">Delete</button>
                </td>
            </tr>
    );
};

export default Announcement;