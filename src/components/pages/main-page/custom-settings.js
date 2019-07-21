import React, { useContext } from 'react';
import styled from 'styled-components';
import StoreContext from '../../store-context';
import tick from './tick.png';
import plus from './plus.png';
import minus from './minus.png';
import { 
        setSelectedTypeOfAction,
        setSelectedCustomActivity,
        incValueAction,
        decValueAction,
        incLowerValueAction,
        decLowerValueAction,
        incHigherValueAction,
        decHigherValueAction
    } from '../../../actions';

const SelectSetting = ({ activityId }) => {
    const { customSettingsState, customSettingsDispatch } = useContext(StoreContext);
    const { selectedActivityId, activities, activityTypes } = customSettingsState;
    const { radioSwitcherId, CustomSettingTitle } = activities[activityId];

    const isChecked = (selectedActivityId === activityId);
    const opacity = isChecked ? {opacity: 1} : {};
    
    const getActivityTypeList = () => {
        let key = 0;
        return activityTypes.map(( type ) => {
            return <option key={key++} selected={ (type === activities[activityId].type) }>{ type }</option>
        });
    }
    
    const setSelectedType = () => {
        const select = document.getElementById('activity_type_select');
        customSettingsDispatch(setSelectedTypeOfAction(select.value));
    }
    
    const setCustomActivity = () => {
        customSettingsDispatch(setSelectedCustomActivity(activityId));
    }
    
    return (
        <CustomSettingsItem style={opacity}>
            <RadioSwitcher id={radioSwitcherId} type="radio" name="setting" checked={isChecked} onClick={setCustomActivity} checked={isChecked} readOnly />
            <label htmlFor={radioSwitcherId}><span></span>{CustomSettingTitle}</label>
            <Select disabled={!isChecked} id="activity_type_select" onChange={setSelectedType} >
                {getActivityTypeList()}
            </Select>
        </CustomSettingsItem>
    );
}

const SingleValueSetting = ({ activityId }) => {
    const { customSettingsState, customSettingsDispatch } = useContext(StoreContext);
    const { selectedActivityId, activities } = customSettingsState;
    const { value, radioSwitcherId, CustomSettingTitle } = activities[activityId];
    
    const isChecked = (selectedActivityId === activityId);
    const opacity = isChecked ? { opacity: 1 } : {};

    const setCustomActivity = () => {
        customSettingsDispatch(setSelectedCustomActivity(activityId));
    }

    const incValue = () => {
        customSettingsDispatch(incValueAction(activityId));
    }

    const decValue = () => {
        customSettingsDispatch(decValueAction(activityId));
    }

    return (
        <CustomSettingsItem style={opacity}>
            <RadioSwitcher id={radioSwitcherId} type="radio" name="setting" onClick={setCustomActivity} checked={isChecked} />
            <label htmlFor={radioSwitcherId}><span></span>{CustomSettingTitle}</label>
            <ValueContainer>
                <ValueButton onClick={decValue} disabled={!isChecked}><img src={minus} alt='minus' /></ValueButton>
                <Value>{ value }</Value>
                <ValueButton onClick={incValue} disabled={!isChecked}><img src={plus} alt='plus' /></ValueButton>
            </ValueContainer>
        </CustomSettingsItem>
    );   
}

const RangeValuesSetting = ({ activityId }) => {
    const { customSettingsState, customSettingsDispatch } = useContext(StoreContext);
    const { selectedActivityId, activities } = customSettingsState;
    const { lowerValue, higherValue, radioSwitcherId, CustomSettingTitle } = activities[activityId];

    const isChecked = (selectedActivityId === activityId);
    const opacity = isChecked ? { opacity: 1 } : {};
    
    const setCustomActivity = () => {
        customSettingsDispatch(setSelectedCustomActivity(activityId));
    }

    const incLowerValue = () => {
        customSettingsDispatch(incLowerValueAction(activityId));
    }

    const decLowerValue = () => {
        customSettingsDispatch(decLowerValueAction(activityId));
    }

    const incHigherValue = () => {
        customSettingsDispatch(incHigherValueAction(activityId));
    }

    const decHigherValue = () => {
        customSettingsDispatch(decHigherValueAction(activityId));
    }

    return (
        <CustomSettingsItem style={opacity}>
            <RadioSwitcher id={radioSwitcherId} type="radio" name="setting" onClick={setCustomActivity} checked={isChecked} />
            <label htmlFor={radioSwitcherId}><span></span>{CustomSettingTitle}</label>
            <ValueContainer>
                <ValueButton onClick={decLowerValue} disabled={!isChecked}><img src={minus} alt='minus' /></ValueButton>
                <Value>{ lowerValue }</Value>
                <ValueButton onClick={incLowerValue } disabled={!isChecked}><img src={plus} alt='plus' /></ValueButton>
                <ValueButton onClick={decHigherValue} disabled={!isChecked}><img src={minus} alt='minus' /></ValueButton>
                <Value>{ higherValue }</Value>
                <ValueButton onClick={incHigherValue} disabled={!isChecked}><img src={plus} alt='plus' /></ValueButton>
            </ValueContainer>
        </CustomSettingsItem>
    );
}

const CustomSettings = () => {    
    return (
        <div>
            <CustomTitle><span>Custom activity settings</span></CustomTitle>
            <CustomSettingsContainer>   
                <CustomSettingsColumn>
                    <CustomSettingsItemBorderBottomRight>
                        <SelectSetting activityId={0} />
                    </CustomSettingsItemBorderBottomRight>
                    <CustomSettingsItemBorderBottomRight>
                        <SingleValueSetting activityId={1} />
                    </CustomSettingsItemBorderBottomRight>
                    <CustomSettingsItemBorderRight>
                        <RangeValuesSetting activityId={2} />
                    </CustomSettingsItemBorderRight>
                </CustomSettingsColumn>
                <CustomSettingsColumn>
                    <CustomSettingsItemBorderBottom>
                        <SingleValueSetting activityId={3} />
                    </CustomSettingsItemBorderBottom>
                    <CustomSettingsItemBorderBottom>
                        <SingleValueSetting activityId={4} />
                    </CustomSettingsItemBorderBottom>
                    <RangeValuesSetting activityId={5} />
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
    user-select: none;
    
    @media (max-width: 576px) {
        display: block;
    }    

`;

const CustomSettingsColumn = styled.div`
    width: 50%;
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 18px;
    }
    
    @media (max-width: 576px) {
        width: 100%;
        font-size: 20px; 
    }  
`;

const CustomSettingsItemBorderBottomRight = styled.div`
    border-bottom: 1px dashed #fff;
    border-right: 1px dashed #fff;

    @media (max-width: 576px) {
        border-right: none;
    }  

`;


const CustomSettingsItemBorderRight = styled.div`
    border-right: 1px dashed #fff;

    @media (max-width: 576px) {
        border-right: none;
        border-bottom: 1px dashed #fff;
    }  

`;

const CustomSettingsItemBorderBottom = styled.div`
    border-bottom: 1px dashed #fff;
`;

const CustomSettingsItem = styled.div`
    width: 100%;
    padding: 14px 10px;
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
    width: 100%;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
    color: #fff;
    background: none;
    margin: 14px 0 0 0;
    border-radius: 3px;

    :hover:enabled {
        cursor: pointer;
    }

    option {
        background: #242527;
        color: #fff;
        border: 1px solid #fff;
    }

`;

const ValueContainer = styled.div`
    margin-top: 14px;
    width: 80%;
    display: flex;
    align-items: center;
`;

const Value = styled.div`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 25px;
    color: #fff;
    margin: 4px 10px 0 10px;
    min-width: 60px;
    text-align: center;
    user-select: none;
`;

const ValueButton = styled.button`
    width: 40px;
    height: 30px;
    background: none;
    border-radius: 3px;
    border: 1px solid #fff;
    
    :hover:enabled {
        background-color: black;
        cursor: pointer;
    }

    img {
        margin: -2px -9px;
    }
`;

export default CustomSettings;