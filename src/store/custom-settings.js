const customSettingsInitialState = {
    selectedActivityId: 0,
    activities: [
        {
            id: 0,
            type: 'Education',
            radioSwitcherId: 'activityByType',
            CustomSettingTitle: 'Activity by type'
        },
        {
            id: 1,
            value: 0.1,
            radioSwitcherId: 'getActivityByPrice',
            CustomSettingTitle: 'Activity by price',
            step: 0.05,
            max: 1,
            min: 0
        },
        {
            id: 2,
            lowerValue: 0,
            higherValue: 0.3,
            radioSwitcherId: 'getActivityByPriceRange',
            CustomSettingTitle: 'Activity by price range',
            step: 0.05,
            lowerMax: 1,
            lowerMin: 0,
            higherMax: 1,
            higherMin: 0
        },
        {
            id: 3,
            value: 1,
            radioSwitcherId: 'getActivityByNumberOfParticipants',
            CustomSettingTitle: 'Activity by number of participants',
            step: 1,
            max: 1,
            min: 9999
        },
        {
            id: 4,
            value: 0.5,
            radioSwitcherId: 'getActivityByAccessibility',
            CustomSettingTitle: 'Activity by accessibility',
            step: 0.01,
            max: 0,
            min: 1
        },
        {
            id: 5,
            lowerValue: 0,
            higherValue: 0.9,
            radioSwitcherId: 'getActivityByAccessibilityRange',
            CustomSettingTitle: 'Activity by accessibility range',
            step: 0.01,
            lowerMax: 1,
            lowerMin: 0,
            higherMax: 1,
            higherMin: 0
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

const updateTypeOfAction = (state, activityId) => {
    const activities = [...state.activities];
    activities[0].type = activityId;
    return { ...state, activities };
}

const updateValue = (state, activityId, direction) => {
    const activities = [...state.activities];
    const { max, min, step, value } = activities[activityId];

    const newValue = Math.round((value + direction * step) * 100) / 100;
    console.log(newValue, min, max);

    const canUpdate = (newValue >= min) && (newValue <= max);

    activities[activityId].value = canUpdate ? newValue : value;

    return { ...state, activities };
};

const updateRangeValue = (activityId, limitType, direction) => {

};

const updateCustomSettingsReducer = (state = customSettingsInitialState, action) => {

    switch (action.type) {
        case 'SET_SELECTED_CUSTOM_ACTIVITY':
                return { ...state, selectedActivityId: action.payload }
        
        case 'SET_SELECTED_TYPE_OF_ACTION':
            return updateTypeOfAction(state, action.payload);

        case 'INC_VALUE':
            return updateValue(state, action.payload, 1);

        case 'DEC_VALUE':
            return updateValue(state, action.payload, -1);

        case 'INC_LOWER_VALUE':
            updateRangeValue(state, action.payload, 'lowerMax', 1);
            return state;

        case 'DEC_LOWER_VALUE':
            updateRangeValue(state, action.payload, 'lowerMin' -1);
            return state;

        case 'INC_HIGHER_VALUE':
            updateRangeValue(state, action.payload, 'higherMax', 1);
            return state;
    
        case 'DEC_HIGHER_VALUE':
            updateRangeValue(state, action.payload, 'higherMin', -1);
            return state;

        default:
            return state;
    }

}

export {
    customSettingsInitialState,
    updateCustomSettingsReducer
}
