let customSettingsInitialState = JSON.parse(localStorage.getItem('customSettingsState'));

if(customSettingsInitialState === null) {

    customSettingsInitialState = {
        selectedActivityId: 0,
        activities: [
            {
                id: 0,
                value: 'Education',
                customSetting: 'getActivityByType',
                CustomSettingTitle: 'By type'
            },
            {
                id: 1,
                value: 0,
                customSetting: 'getActivityByPrice',
                CustomSettingTitle: 'By price (0..1)',
                step: 0.05,
                max: 1,
                min: 0
            },
            {
                id: 2,
                lowerValue: 0,
                higherValue: 0.3,
                customSetting: 'getActivityByPriceRange',
                CustomSettingTitle: 'By price range (0..1)',
                step: 0.05,
                lowerMin: 0,
                higherMax: 1
            },
            {
                id: 3,
                value: 1,
                customSetting: 'getActivityByNumberOfParticipants',
                CustomSettingTitle: 'By num of participants (1..100)',
                step: 1,
                max: 100,
                min: 1
            },
            {
                id: 4,
                value: 0.5,
                customSetting: 'getActivityByAccessibility',
                CustomSettingTitle: 'By accessibility (0..1)',
                step: 0.01,
                max: 1,
                min: 0
            },
            {
                id: 5,
                lowerValue: 0,
                higherValue: 0.2,
                customSetting: 'getActivityByAccessibilityRange',
                CustomSettingTitle: 'By accessibility range (0..1)',
                step: 0.01,
                lowerMin: 0,
                higherMax: 1
            }
        ],
        activityTypes: [
            'Education',
            'Recreational',
            'Social',
            'DIY',
            'Charity',
            'Cooking',
            'Relaxation',
            'Music',
            'Busywork',
        ]
    };

}

const updateTypeOfAction = (state, activityId) => {
    const activities = [...state.activities];
    activities[0].value = activityId;
    return { ...state, activities };
}

const updateValue = (max, min, step, value, direction) => {
    const newValue = Math.round((value + direction * step) * 100) / 100;
    const canUpdate = (newValue >= min) && (newValue <= max);
    return canUpdate ? newValue : value;
}

const updateSingleValue = (state, activityId, direction) => {
    const activities = [...state.activities];
    const { max, min, step, value } = activities[activityId];

    activities[activityId].value = updateValue( max, min, step, value, direction );

    return { ...state, activities };
};

const updateLowerRangeValue = (state, activityId, direction) => {
    const activities = [...state.activities];
    const { higherValue, lowerMin, step, lowerValue } = activities[activityId];

    activities[activityId].lowerValue = updateValue( higherValue, lowerMin, step, lowerValue, direction );

    return { ...state, activities };
};

const updateHigherRangeValue = (state, activityId, direction) => {
    const activities = [...state.activities];
    const { higherMax, lowerValue, step, higherValue } = activities[activityId];

    activities[activityId].higherValue = updateValue( higherMax, lowerValue, step, higherValue, direction );

    return { ...state, activities };
};

const updateCustomSettingsReducer = (state = customSettingsInitialState, action) => {

    switch (action.type) {
        case 'SET_SELECTED_CUSTOM_ACTIVITY':
                return { ...state, selectedActivityId: action.payload }
        
        case 'SET_SELECTED_TYPE_OF_ACTION':
            return updateTypeOfAction(state, action.payload);

        case 'INC_VALUE':
            return updateSingleValue(state, action.payload, 1);

        case 'DEC_VALUE':
            return updateSingleValue(state, action.payload, -1);

        case 'INC_LOWER_VALUE':
            return updateLowerRangeValue(state, action.payload, 1);

        case 'DEC_LOWER_VALUE':
            return updateLowerRangeValue(state, action.payload, -1);

        case 'INC_HIGHER_VALUE':
            return updateHigherRangeValue(state, action.payload, 1);
    
        case 'DEC_HIGHER_VALUE':
            return updateHigherRangeValue(state, action.payload, -1);

        default:
            return state;
    }

}

export {
    customSettingsInitialState,
    updateCustomSettingsReducer
}
