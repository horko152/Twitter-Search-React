import React from 'react';
import Announcement from './Announcement';
import './index.css';

const AnnouncementList = ({listOfAnnouncements, setListOfAnnouncements, editRow, setSelectedSimilar}) => {

    const deleteAnnouncement = (id) => {
        setListOfAnnouncements(listOfAnnouncements.filter(announcement => announcement.id !== id))
    }


    return (
        <div className="announcement-list">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th className="in-center">Crated_At</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {listOfAnnouncements.length > 0 ? (listOfAnnouncements?.map((announcement, index) => {
                        return <Announcement
                            key={index}
                            announcement={announcement}
                            deleteAnnouncement={deleteAnnouncement}
                            editRow={editRow}
                            setSelectedSimilar={setSelectedSimilar}
                        />;
                    })
                ) : (
                    <tr className="error-row">
                        <td>No announcements</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );

};
export default AnnouncementList;