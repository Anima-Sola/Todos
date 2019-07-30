import React, { useContext } from 'react';
import styled from 'styled-components';
import StoreContext from '../../store-context';
import star from './star.png';
import solidstar from './solidstar.png';
import busket from './busket.png';

const Archive = () => {
    const { archiveState } = useContext(StoreContext);
    const { activities } = archiveState;


    const showActivities = () => {

        const styledActivities = activities.map( (value) => {

            const { accessibility, activity, key, participants, price, type } = value;

            const parameters = `Accessibility: ${accessibility} Participants: ${participants} Price: ${price} Type: ${type}`;

            return (
                <ArchiveItem key={key}>
                    <ArchiveData>
                        <ArchiveItemTitle>{activity}</ArchiveItemTitle>
                        <ArchiveItemParameters>{parameters}</ArchiveItemParameters>
                    </ArchiveData>

                    <SolidStar />
                    <Busket />
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
`;

const SolidStar = styled.div`
    width: 70px;
    height: 70px
    background: url(${solidstar}) no-repeat;
`;

const Busket = styled.div`
    width: 70px;
    height: 70px;
    background: url(${busket}) no-repeat;
`;

export default Archive;