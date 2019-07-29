import React, { useContext } from 'react';
import styled from 'styled-components';
import StoreContext from '../../store-context';

const Archive = () => {
    const { archiveState } = useContext(StoreContext);
    const { activities } = archiveState;


    const showActivities = () => {

        const styledActivities = activities.map( (value) => {

            const { accessibility, activity, key, participants, price, type } = value;

            const parameters = `Accessibility: ${accessibility} Participants: ${participants} Price: ${price} Type: ${type}`;

            return (
                <ArchiveItem key={key}>
                    <ArchiveItemTitle>{activity}</ArchiveItemTitle>
                    <ArchiveItemParameters>{parameters}</ArchiveItemParameters>
                </ArchiveItem>
            );
        })

        return styledActivities;

    }

    return (
        <div>
            <ArchiveTitle>Archive of activities</ArchiveTitle>
            <div>
                {showActivities()}
            </div>
        </div>
    );
}

const ArchiveTitle = styled.span`
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 35px;
    display: block;
    margin: 10px 0;
`;

const ArchiveItem = styled.div`
    width: 100%;
    border-bottom: 1px dashed #fff;
    //margin: 10px 0;
    padding: 10px;
`;

const ArchiveItemTitle = styled.div`
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 27px;
`;

const ArchiveItemParameters = styled.div`
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 15px;
    margin-top: 10px;
`;

export default Archive;