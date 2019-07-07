import React, { useContext } from 'react';
import styled from 'styled-components';
import StoreContext from '../../store-context';
import tick from './tick.png';
import { 
        setSelectedTypeOfAction,
        setSelectedCustomActivity,
        incPriceValueAction,
        decPriceValueAction,
        incLowerPriceValueAction,
        decLowerPriceValueAction,
        incHigherPriceValueAction,
        decHigherPriceValueAction,
        incNumberOfParticipantsValueAction,
        decNumberOfParticipantsValueAction,
        incAccessibilityValueAction,
        decAccessibilityValueAction,
        incLowerAccessibilityValueAction,
        decLowerAccessibilityValueAction,
        incHigherAccessibilityValueAction,
        decHigherAccessibilityValueAction 
    } from '../../../actions';

const SelectSetting = ({ id }) => {
    const { customSettingsState, customSettingsDispatch } = useContext(StoreContext);
    const { selectedActivityId, activities, activityTypes } = customSettingsState;

    const isChecked = (selectedActivityId === id);
    const opacity = isChecked ? {opacity: 1} : {};
    const disabledStyles = isChecked ? {} : { cursor: 'default' };
    
    const getActivityTypeList = () => {
        return activityTypes.map(( type ) => {
            return <option selected={ (type === activities[id].type) }>{ type }</option>
        });
    }
    
    const setSelectedType = () => {
        const select = document.getElementById('activity_type_select');
        customSettingsDispatch(setSelectedTypeOfAction(select.value));
    }
    
    const setCustomActivity = () => {
        customSettingsDispatch(setSelectedCustomActivity(id));
    }
    
    return (
        <CustomSettingsItem style={opacity}>
            <RadioSwitcher id={activities[id].radioSwitcherId} type="radio" name="setting" checked={isChecked} onClick={setCustomActivity}/>
            <label htmlFor={activities[id].radioSwitcherId}><span></span>{activities[id].CustomSettingTitle}</label>
            <Select disabled={!isChecked} id="activity_type_select" onChange={setSelectedType} style={disabledStyles} >
                {getActivityTypeList()}
            </Select>
        </CustomSettingsItem>
    );
}

const SingleValueSetting = ({ id }) => {
    const { customSettingsState, customSettingsDispatch } = useContext(StoreContext);
    const { selectedActivityId, activities } = customSettingsState;
    
    const isChecked = (selectedActivityId === id);
    const opacity = isChecked ? { opacity: 1 } : {};
    const Plus = isChecked ? <EnabledPlus>+</EnabledPlus> : <DisabledPlus>+</DisabledPlus>;
    const Minus = isChecked ? <EnabledMinus>-</EnabledMinus> : <DisabledMinus>-</DisabledMinus>;

    const setCustomActivity = () => {
        customSettingsDispatch(setSelectedCustomActivity(id));
    }

    const incValue = () => {
        customSettingsDispatch(eval(activities[id].incValueAction(id)));
    }

    const decValue = () => {
        customSettingsDispatch(window[activities[id].decValueAction](id));
    }

    return (
        <CustomSettingsItem style={opacity}>
            <RadioSwitcher id={activities[id].radioSwitcherId} type="radio" name="setting" onClick={setCustomActivity} />
            <label htmlFor={activities[id].radioSwitcherId}><span></span>{activities[id].CustomSettingTitle}</label>
            <ValueContainer>
                <ValueButton onClick={decValue} disabled={!isChecked}>{Minus}</ValueButton>
                <Value>{ activities[id].value }</Value>
                <ValueButton onClick={incValue} disabled={!isChecked}>{Plus}</ValueButton>
            </ValueContainer>
        </CustomSettingsItem>
    );   
}

const RangeValuesSetting = ({ id }) => {
    const { customSettingsState, customSettingsDispatch } = useContext(StoreContext);
    const { selectedActivityId, activities } = customSettingsState;

    const isChecked = (selectedActivityId === id);
    const opacity = isChecked ? { opacity: 1 } : {};
    const Plus = isChecked ? <EnabledPlus>+</EnabledPlus> : <DisabledPlus>+</DisabledPlus>;
    const Minus = isChecked ? <EnabledMinus>-</EnabledMinus> : <DisabledMinus>-</DisabledMinus>;
    
    const setCustomActivity = () => {
        customSettingsDispatch(setSelectedCustomActivity(id));
    }

    return (
        <CustomSettingsItem style={opacity}>
            <RadioSwitcher id={activities[id].radioSwitcherId} type="radio" name="setting" onClick={setCustomActivity}  />
            <label htmlFor={activities[id].radioSwitcherId}><span></span>{activities[id].CustomSettingTitle}</label>
            <ValueContainer>
                <ValueButton>{Minus}</ValueButton>
                <Value>{ activities[id].lowerValue }</Value>
                <ValueButton>{Plus}</ValueButton>
                <ValueButton>{Minus}</ValueButton>
                <Value>{ activities[id].higherValue }</Value>
                <ValueButton>{Plus}</ValueButton>
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
                    <SelectSetting id={0} />
                    <SingleValueSetting id={1} />
                    <RangeValuesSetting id={2} />
                </CustomSettingsColumn>
                <CustomSettingsColumn>
                    <SingleValueSetting id={3} />
                    <SingleValueSetting id={4} />
                    <RangeValuesSetting id={5} />
                </CustomSettingsColumn>
            </CustomSettingsContainer>
        </div>
    );
}

const ValueContainer = styled.div`
    margin-top: 20px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Value = styled.div`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 25px;
    color: #fff;
    margin: 4px 10px 0 10px;
    min-width: 10%;
    text-align: center;
    user-select: none;
`;

const ValueButton = styled.button`
    width: 30px;
    height: 30px;
    background: none;
    border-radius: 3px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 30px;
    outline: none;
    margin: 0 10px;    
`;

const DisabledPlus = styled.div`
    color: #fff;
    font-size: 30px;
    margin: -3px 0 0 -1px;
    cursor: default;
`;

const DisabledMinus = styled.div`
    color: #fff;
    font-size: 30px;
    margin-top: -6px;
    cursor: default;
`;

const EnabledPlus = styled(DisabledPlus)`
    :hover {
        font-weight: bold;
    }
`;

const EnabledMinus = styled(DisabledMinus)`
    :hover {
        font-weight: bold;
    }
`;

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
    margin-bottom: 23px;
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
    margin: 20px 0 0 5%;
    border-radius: 3px;
    cursor: pointer;

    option {
        background: #242527;
        color: #fff;
        border: 1px solid #fff;
    }

`;

export default CustomSettings;