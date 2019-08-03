import React, { useState,  useContext } from 'react';
import styled from 'styled-components';
import StoreContext from '../../store-context';
import star from './star.png';
import solidstar from './solidstar.png';
import busket from './busket.png';
import { 
    makeActivityFavouriteAction,
    makeActivityNonFavouriteAction,
    removeActivityAction
} from '../../../actions';

const Archive = () => {
    const { archiveState, archiveDispatch } = useContext(StoreContext);
    const activities = archiveState.activities;
    const [ list, updateList ] = useState(0);

    const makeActivityFavourite = (key) => {
        console.log('1');
        archiveDispatch(makeActivityFavouriteAction(key));
        localStorage.setItem('archiveState', JSON.stringify(archiveState));
        updateList(list + 1);
    }

    const makeActivityNonFavourite = (key) => {
        archiveDispatch(makeActivityNonFavouriteAction(key));
        localStorage.setItem('archiveState', JSON.stringify(archiveState));
        updateList(list - 1);
    }

    const removeActivity = (key) => {
        archiveDispatch(removeActivityAction(key));
        localStorage.setItem('archiveState', JSON.stringify(archiveState));
        updateList(list + 1);
    }

    const styledActivities = activities.map( (value) => {
        const { accessibility, activity, key, participants, price, type, isFavourite } = value;
        const parameters = `Accessibility: ${accessibility} Participants: ${participants} Price: ${price} Type: ${type}`;
        const bold = (isFavourite) ? { fontWeight: 'bold' } : {};
        const star = (isFavourite) ? 
            <SolidStar title="Make activity non favourite" onClick={() => makeActivityNonFavourite(key)} /> : 
            <Star title="Make activity favourite" onClick={() => makeActivityFavourite(key)}/>

        return (
            <ArchiveItem key={key}>
                <ArchiveData>
                    <ArchiveItemTitle style={bold} >{activity}</ArchiveItemTitle>
                    <ArchiveItemParameters>{parameters}</ArchiveItemParameters>
                </ArchiveData>

                {star}
                <Busket title="Remove activity" onClick={() => removeActivity(key)}/>
            </ArchiveItem>
        );
    })

    return (
        <div>
            <ArchiveTitle>Archive of activities</ArchiveTitle>
            <div>
                {styledActivities}
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const ArchiveData = styled.div`
    width: calc(100% - 140px);
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

const Star = styled.div`
    width: 70px;
    height: 70px
    background: url(${star}) no-repeat;
    cursor: pointer;
`;

const SolidStar = styled.div`
    width: 70px;
    height: 70px
    background: url(${solidstar}) no-repeat;
    cursor: pointer;
`;

const Busket = styled.div`
    width: 70px;
    height: 70px;
    background: url(${busket}) no-repeat;
    cursor: pointer;
`;

export default Archive;