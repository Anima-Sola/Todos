import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../../spinner';
import BoredApiService from '../../../services/bored-api-service';

const boredApiService = new BoredApiService();

const ShowLoadedActivity = ({ loadedActivity }) => {
    
    return (
        <div>
            <LoadedActivity>{loadedActivity.activity}</LoadedActivity>
            <ActivityDetails>
                <span>Accessibility: {loadedActivity.accessibility}</span>
                <span>Participants: {loadedActivity.participants}</span>
                <span>Price: {loadedActivity.price}</span>
                <span>Type: {loadedActivity.type}</span>
            </ActivityDetails>
        </div>
    );

}

const LoadedActivityContainer = () => {

    const [isLoading, setLoadingStatus] = useState(true);
    const [loadedActivity, setLoadedActivity] = useState({});
    
    useEffect(() => {

        if(isLoading) {

            boredApiService.getRandomActivity()
                .then((data) => {
                    setLoadingStatus(false);
                    setLoadedActivity(data);
                });
        
        }

    });

    const result = isLoading ? <Spinner /> : <ShowLoadedActivity loadedActivity={loadedActivity} />

    const refreshActivity = () => {
        setLoadingStatus(true);
    }
        
    return (
        <div>
            <ResultContainer>
                {result}
            </ResultContainer>
            <ResultButtonsContainer>
                <ResultButton onClick={refreshActivity}>Random activity</ResultButton>
                <ResultButton>Custom activity</ResultButton>
                <ResultButton>Archive activity</ResultButton>
            </ResultButtonsContainer>
        </div>
    );
}

const ResultContainer = styled.div`
    margin: 20px 10%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 576px) { 
        height: 170px;
    }
`;

const LoadedActivity = styled.span`
    font-family: 'Nunito Sans', sans-serif;
    color: #fff;
    font-size: 40px;
    text-align: center;
    display: block;
    width: 100%;
`;

const ActivityDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito Sans', sans-serif;
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;

    span {
        padding: 0 10px;
    }
`;

const ResultButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
`;

const ResultButton = styled.button`
    border: 1px solid #fff;
    padding: 10px;
    margin: 0 10px;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
    background: transparent;
    color: #fff;
    border-radius: 7px;
    width: 200px;
    cursor: pointer;
    outline: none;

    :hover {
        font-weight: bold;
        background-color: black;
    }

`;

export default LoadedActivityContainer;