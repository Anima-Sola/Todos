import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import BoredApiService from '../../services/bored-api-service';
import tick from './tick.png';
import StoreContext from '../store-context';
import { setSelectedTypeOfAction } from '../../actions';

const boredApiService = new BoredApiService();

const MainPage = () => {
    return (
        <div>
            <LoadedActivityContainer />
            <CustomSettings />
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
            <ButtonsContainer>
                <Button onClick={refreshActivity}>Get random activity</Button>
                <Button>Get custom activity</Button>
                <Button>Archive activity</Button>
            </ButtonsContainer>
        </div>
    );
}

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

const CustomSettings = () => {    
    return (
        <div>
            <CustomTitle><span>Custom activity settings</span></CustomTitle>
            <CustomSettingsContainer>   
                <CustomSettingsColumn>
                    <ActivityByTypeSetting id={0} />
                    <ActivityByPriceSetting id={1} />
                    <ActivityByPriceRangeSetting id={2} />
                </CustomSettingsColumn>
                <CustomSettingsColumn>
                    <ActivityByNumberOfParticipantsSetting id={3} />
                    <ActivityByAccessibilitySetting id={4} />
                    <ActivityByAccessibilityRangeSetting id={5} />
                </CustomSettingsColumn>
            </CustomSettingsContainer>
        </div>
    );
}

const ActivityByTypeSetting = ({ id }) => {
    const { customSettingsState, customSettingsDispatch } = useContext(StoreContext);
    const { selectedActivityId, activities, activityTypes } = customSettingsState;

    const isChecked = (selectedActivityId === id);
    const opacity = isChecked ? {opacity: 1} : {};
    
    const getActivityTypeList = () => {
        return activityTypes.map(( type ) => {
            return <option selected={ (type === activities[id].type) }>{ type }</option>
        });
    }
    
    return (
        <CustomSettingsItem style={opacity}>
            <RadioSwitcher id={activities[id].setting} type="radio" name="setting" checked={isChecked} />
            <label htmlFor={activities[id].setting}><span></span>{activities[id].title}</label>
            <Select disabled={!isChecked}>
                {getActivityTypeList()}
            </Select>
        </CustomSettingsItem>
    );
}

const ActivityByPriceSetting = ({ id }) => {
    const { customSettingsState, customSettingsDispatch } = useContext(StoreContext);
    const { selectedActivityId, activities } = customSettingsState;
    const opacity = (selectedActivityId === id) ? {opacity: 1} : {};

    return (
        <CustomSettingsItem style={opacity}>
            <RadioSwitcher id="getActivityByPrice" type="radio" name="setting" />
            <label htmlFor="getActivityByPrice"><span></span>Activity by price</label>
        </CustomSettingsItem>
    );   
}

const ActivityByPriceRangeSetting = () => {
    return (
        <CustomSettingsItem>
            <RadioSwitcher id="getActivityByPriceRange" type="radio" name="setting" />
            <label htmlFor="getActivityByPriceRange"><span></span>Activity by price range</label>
        </CustomSettingsItem>
    );
}

const ActivityByNumberOfParticipantsSetting = () => {
    return (
        <CustomSettingsItem>
            <RadioSwitcher id="getActivityByNumberOfParticipants" type="radio" name="setting" />
            <label htmlFor="getActivityByNumberOfParticipants"><span></span>Activity by number of participants</label>
        </CustomSettingsItem>
    );
}

const ActivityByAccessibilitySetting = () => {
    return (
        <CustomSettingsItem>
            <RadioSwitcher id="getActivityByAccessibility" type="radio" name="setting" />
            <label htmlFor="getActivityByAccessibility"><span></span>Activity by accessibility</label>
        </CustomSettingsItem>
    );
}

const ActivityByAccessibilityRangeSetting = () => {
    return (
        <CustomSettingsItem>
            <RadioSwitcher id="getActivityByAccessibilityRange" type="radio" name="setting" />
            <label htmlFor="getActivityByAccessibilityRange"><span></span>Activity by accessibility range</label>
        </CustomSettingsItem>
    );
}

const CustomTitle = styled.span`
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 35px;
    display: block;
    margin-bottom: 30px;
`;

const CustomSettingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-left: 15%;    
`;

const CustomSettingsColumn = styled.div`
    width: 50%;
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
`;

const CustomSettingsItem = styled.div`
    width: 100%;
    margin-bottom: 30px;
    opacity: 0.5;
`;

const RadioSwitcher = styled.input`
    display: none;

    & + label {
        cursor:pointer;
    }

    & + label span {
        display:inline-block;
        width:35px;
        height:35px;
        margin: -3px 10px 0 0;
        vertical-align:middle;
        border: 1px solid #fff;
        border-radius: 2px;
    }
    
    :checked + label span {
        background: url(${tick}) no-repeat;
    }

`;

const Select = styled.select`
    width: 80%;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
    color: #fff;
    background: none;
    margin-top: 10px;
    border-radius: 3px;

    option {
        background: #242527;
        color: #fff;
        border: 1px solid #fff;
    }

`;

const ResultContainer = styled.div`
    margin: 20px 10%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
`;

const Button = styled.button`
    border: 1px solid #fff;
    padding: 10px;
    margin: 0 10px;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
    background: transparent;
    color: #fff;
    border-radius: 7px;
    min-width: 200px;
    cursor: pointer;

    :hover {
        font-weight: bold;
    }

`;

export default MainPage;


/*const RadioSwitcher = styled.input`
    display: none;

    & + label {
        cursor:pointer;
        opacity: 0.5;
    }

    & + label span {
        display:inline-block;
        width:35px;
        height:35px;
        margin: -3px 10px 0 0;
        vertical-align:middle;
        border: 1px solid #fff;
        border-radius: 2px;
    }

    :checked + label {
        opacity: 1;
    }
    
    :checked + label span {
        background: url(${tick}) no-repeat;
    }

`;*/