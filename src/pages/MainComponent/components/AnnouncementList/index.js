import React from 'react';
import Announcement from '../Announcement';
import './index.css';

const AnnouncementList = ({listOfAnnouncements, deleteAnnouncement, editRow}) => {

    return (
        <div className="announcement-list">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Crated_At</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {listOfAnnouncements?.map((announcement, index) => {
                    return <Announcement
                        key={index}
                        announcement={announcement}
                        deleteAnnouncement={deleteAnnouncement}
                        editRow={editRow}
                    />;
                })}
                </tbody>
            </table>
        </div>
    );

};
export default AnnouncementList;