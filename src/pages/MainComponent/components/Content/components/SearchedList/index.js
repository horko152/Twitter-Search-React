import React, { useEffect, useState } from 'react';
import { listData } from '../../../../constants';
import ignoreCase from 'ignore-case';
import AnnouncementList from '../AnnouncementList';

const SearchedList = ({ listOfAnnouncements, setListOfAnnouncements, inputValue, editRow }) => {
    const [ searchListOfAnnouncement, setSearchListOfAnnouncement ] = useState(listData);

    useEffect(() => {
        setSearchListOfAnnouncement(listOfAnnouncements.filter(announcement =>
            ignoreCase.includes(announcement.title, inputValue))
        );
    }, [ inputValue, listOfAnnouncements ]);

    useEffect(() => {
        setSearchListOfAnnouncement(listOfAnnouncements);
    }, [ listOfAnnouncements ]);

    return (
        <AnnouncementList
            listOfAnnouncements={searchListOfAnnouncement}
            setListOfAnnouncements={setListOfAnnouncements}
            editRow={editRow}
        />
    );
};

export default SearchedList;