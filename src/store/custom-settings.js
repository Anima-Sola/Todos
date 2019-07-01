const customSettingsInitialState = {
    activityByType: {
        active: true,
        value: 'education'
    },
    activityByPrice: {
        active: false,
        value: 0.3
    },
    activityByPriceRange: {
        active: false,
        lowerValue: 0,
        higherValue: 0.3
    },
    activityByNumberOfParticipants: {
        active: false,
        value: 1
    },
    activityByAccessibility: {
        active: false,
        value: 0.5
    },
    activityByAccessibilityRange: {
        active: false,
        lowerValue: 0,
        higherValue: 0.9
    }
};

const updateCustomSettingsReducer = (state = customSettingsInitialState, action) => {

    switch (action.type) {
        case 'SET_CUSTOM_ACTIVITY_SETTING':
            return state;

        default:
            return state;
    }

}

export {
    customSettingsInitialState,
    updateCustomSettingsReducer
}
