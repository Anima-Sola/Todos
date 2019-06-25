import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import BoredApiService from '../../services/bored-api-service';
import tick from './tick.png';

const boredApiService = new BoredApiService();

const MainPage = () => {

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
            <CustomSettings />
        </div>
    );
}

const CustomSettings = () => {
    
    return (
        
        <div>
            <CustomTitle><span>Custom activity settings</span></CustomTitle>
            <CustomSettingsContainer>   
                <CustomSettingsColumn>
                    <CustomSettingsItem>
                        <RadioSwitcher id="getActivityByType" type="radio" name="setting" value="getActivityByType" />
                        <label for="getActivityByType"><span></span>Activity by type</label>
                        <Select>
                            <option>Education</option>
                            <option>Recreational</option>
                            <option>Social</option>
                            <option>DIY</option>
                            <option>Charity</option>
                            <option>Cooking</option>
                            <option>Relaxation</option>
                            <option>Music</option>
                            <option>Busywork</option>
                        </Select>
                    </CustomSettingsItem>
                    <CustomSettingsItem>
                        <RadioSwitcher id="getActivityByPrice" type="radio" name="setting" value="getActivityByPrice" />
                        <label for="getActivityByPrice"><span></span>Activity by price</label>
                    </CustomSettingsItem>
                    <CustomSettingsItem>
                        <RadioSwitcher id="getActivityByPriceRange" type="radio" name="setting" value="getActivityByPriceRange" />
                        <label for="getActivityByPriceRange"><span></span>Activity by price range</label>
                    </CustomSettingsItem>
                </CustomSettingsColumn>
                <CustomSettingsColumn>
                    <CustomSettingsItem>
                        <RadioSwitcher id="getActivityByNumberOfParticipants" type="radio" name="setting" value="getActivityByNumberOfParticipants" />
                        <label for="getActivityByNumberOfParticipants"><span></span>Activity by number of participants</label>
                    </CustomSettingsItem>
                    <CustomSettingsItem>
                        <RadioSwitcher id="getActivityByAccessibility" type="radio" name="setting" value="getActivityByAccessibility" />
                        <label for="getActivityByAccessibility"><span></span>Activity by accessibility</label>
                    </CustomSettingsItem>
                    <CustomSettingsItem>
                        <RadioSwitcher id="getActivityByAccessibilityRange" type="radio" name="setting" value="getActivityByAccessibilityRange" />
                        <label for="getActivityByAccessibilityRange"><span></span>Activity by accessibility range</label>
                    </CustomSettingsItem>
                </CustomSettingsColumn>
            </CustomSettingsContainer>
        </div>

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
`;

const RadioSwitcher = styled.input`
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