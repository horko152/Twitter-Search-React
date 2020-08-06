import React, {useState} from 'react';

import Announcement from '../Announcement';
import './index.css';

const AnnouncementList = () => {
    const listData = [
        {id: 1, title: 'Looking for a job', date: '12-08-2018', description: 'junior something developer'},
        {id: 2, title: 'Looking for a new job', date: '12-08-2018', description: 'junior something developer'},
        {id: 3, title: 'Looking for a old job', date: '12-08-2018', description: 'junior something developer'}
    ]
    const [listOfAnnouncements, setListOfAnnouncements] = useState(listData);

    return (
        <div className="announcement-list">
            {/*listOfTweets?.map*/}
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Crated_At</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
            {listOfAnnouncements && listOfAnnouncements.length > 0 && listOfAnnouncements.map(announcement => {
                return <Announcement announcement={announcement}/>;
            })}
                </tbody>
            </table>
        </div>
    );

};
export default AnnouncementList;