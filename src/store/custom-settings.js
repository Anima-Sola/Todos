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
            value: 10.05,
            radioSwitcherId: 'getActivityByPrice',
            CustomSettingTitle: 'Activity by price',
            incValueAction: 'incPriceValueAction',
            decValueAction: 'decPriceValueAction',
            changingStep: 0.05
        },
        {
            id: 2,
            lowerValue: 0,
            higherValue: 0.3,
            radioSwitcherId: 'getActivityByPriceRange',
            CustomSettingTitle: 'Activity by price range',
            incLowerValueAction: 'incLowerPriceValueAction',
            decLowerValueAction: 'decLowerPriceValueAction',
            incHigherValueAction: 'incHigherPriceValueAction',
            decHigherValueAction: 'decHigherPriceValueAction',
            changingStep: 0.05
        },
        {
            id: 3,
            value: 1,
            radioSwitcherId: 'getActivityByNumberOfParticipants',
            CustomSettingTitle: 'Activity by number of participants',
            incValueAction: 'incNumberOfParticipantsValueAction',
            decValueAction: 'decNumberOfParticipantsValueAction',
            changingStep: 1
        },
        {
            id: 4,
            value: 0.5,
            radioSwitcherId: 'getActivityByAccessibility',
            CustomSettingTitle: 'Activity by accessibility',
            incValueAction: 'incAccessibilityValueAction',
            decValueAction: 'decAccessibilityValueAction',
            changingStep: 0.01
        },
        {
            id: 5,
            lowerValue: 0,
            higherValue: 0.9,
            radioSwitcherId: 'getActivityByAccessibilityRange',
            CustomSettingTitle: 'Activity by accessibility range',
            incLowerValueAction: 'incLowerAccessibilityValueAction',
            decLowerValueAction: 'decLowerAccessibilityValueAction',
            incHigherValueAction: 'incHigherAccessibilityValueAction',
            decHigherValueAction: 'decHigherAccessibilityValueAction',
            changingStep: 0.01
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

const updateCustomSettingsReducer = (state = customSettingsInitialState, action) => {

    switch (action.type) {
        case 'SET_SELECTED_TYPE_OF_ACTION':
            const activities = [...state.activities];
            activities[0].type = action.payload;
            return {...state, activities};

        case 'SET_SELECTED_CUSTOM_ACTIVITY':
            return { ...state, selectedActivityId: action.payload }

        case 'INC_PRICE_VALUE':
            console.log(action.id);
            return;

        case 'DEC_PRICE_VALUE':
            console.log(action.id);
            return;

        default:
            return state;
    }

}

export {
    customSettingsInitialState,
    updateCustomSettingsReducer
}
