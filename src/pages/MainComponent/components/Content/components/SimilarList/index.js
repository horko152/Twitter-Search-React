import React, { useEffect, useState } from 'react';
import AnnouncementList from '../AnnouncementList';

const SimilarList = ({ listOfAnnouncements, setListOfAnnouncements,  editRow }) =>{
    const [ similarListOfAnnouncement, setSimilarListOfAnnouncement ] = useState([]);

    useEffect(() => {
        //TODO similar list filter here
    }, [  ]);

    useEffect(() => {
        setSimilarListOfAnnouncement(listOfAnnouncements);
    }, [ listOfAnnouncements ]);

    return (
        <div className="search-content">
            <h3 className="similar-list-title">Similar List</h3>
            <AnnouncementList
                listOfAnnouncements={[]}
                setListOfAnnouncements={setListOfAnnouncements}
                editRow={editRow}
            />
        </div>
    );
};

export default SimilarList;