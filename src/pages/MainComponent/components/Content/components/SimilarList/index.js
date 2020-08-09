import React, {useEffect, useState} from 'react';
import AnnouncementList from '../AnnouncementList';
import ignoreCase from "ignore-case";

const SimilarList = ({listOfAnnouncements, setListOfAnnouncements, editRow, selectedSimilar}) => {
    const [similarListOfAnnouncement, setSimilarListOfAnnouncement] = useState([]);


    useEffect(() => {

        setSimilarListOfAnnouncement(listOfAnnouncements.filter(announcement =>
            announcement.title.search(selectedSimilar.title)
            // ||
            // announcement.description.search(selectedSimilar.description.split(" "))
        ));
        //TODO similar list filter here
    }, [selectedSimilar?.id]);

    useEffect(() => {
        setSimilarListOfAnnouncement(listOfAnnouncements);
    }, [listOfAnnouncements]);

    return (
        <div className="search-content">
            <h3 className="similar-list-title">Similar List</h3>
            <AnnouncementList
                listOfAnnouncements={similarListOfAnnouncement}
                setListOfAnnouncements={setListOfAnnouncements}
                editRow={editRow}
            />
        </div>
    );
};

export default SimilarList;