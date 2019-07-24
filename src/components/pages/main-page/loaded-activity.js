import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import StoreContext from '../../store-context';
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

const ShowNoSuchActivityMessage = () => {
    
    return (
        <div>
            <LoadedActivity>No activities found with the specified parameters</LoadedActivity>
        </div>
    );

}

const LoadedActivityContainer = () => {
    const [loadingStatus, setLoadingStatus] = useState({ 
        isLoading: true, 
        serviceMethod: boredApiService.getRandomActivity() 
    });

    const { customSettingsState } = useContext(StoreContext);
    const { selectedActivityId, activities } = customSettingsState;
    
    useEffect(() => {

        if(loadingStatus.isLoading) {

            loadingStatus.serviceMethod
                .then((data) => {
                    
                    if (data.error === undefined) {

                        setLoadingStatus({
                            isLoading: false,
                            isActivityExists: true, 
                            data: data,
                        });
                    
                    } else {
                        
                        setLoadingStatus({
                            isLoading: false, 
                            isActivityExists: false,
                        });

                    }

                });
        
        }

    });

    const getRandomActivity = () => {
        setLoadingStatus({ 
            isLoading: true, 
            serviceMethod: boredApiService.getRandomActivity() 
        });
    }

    const getCustomActivity = () => {

        const { value, lowerValue, higherValue, customSetting } = activities[selectedActivityId];

        if (value === undefined) {

            setLoadingStatus({ 
                isLoading: true, 
                serviceMethod: boredApiService[customSetting](lowerValue, higherValue) 
            });
            
        } else {
            
            setLoadingStatus({ 
                isLoading: true, 
                serviceMethod: boredApiService[customSetting](value) 
            });
   
        }

    }

    let result = '';

    if (loadingStatus.isLoading) {
        result = <Spinner />;
    } else {
        result = (loadingStatus.isActivityExists) ? <ShowLoadedActivity loadedActivity={loadingStatus.data} /> : <ShowNoSuchActivityMessage />;
    }
        
    return (
        <div>
            <ResultContainer>
                {result}
            </ResultContainer>
            <ResultButtonsContainer>
                <ResultButton onClick={getRandomActivity}>Random activity</ResultButton>
                <ResultButton onClick={getCustomActivity}>Custom activity</ResultButton>
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