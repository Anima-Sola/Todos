const customSettingsInitialState = {
    selectedActivityId: 0,
    activities: [
        {
            id: 0,
            setting: 'activityByType',
            title: 'Activity by type',
            type: 'Education'
        },
        {
            id: 1,
            setting: 'activityByPrice',
            title: 'Activity by price',
            value: 0.3
        },
        {
            id: 2,
            setting: 'activityByPriceRange',
            title: 'Activity by price range',
            lowerValue: 0,
            higherValue: 0.3
        },
        {
            id: 3,
            setting: 'activityByNumberOfParticipants',
            title: 'Activity by number of participants',
            value: 1
        },
        {
            id: 4,
            setting: 'activityByAccessibility',
            title: 'Activity by accessibility',
            value: 0.5
        },
        {
            id: 5,
            setting: 'activityByAccessibilityRange',
            title: 'Activity by accessibility range',
            lowerValue: 0,
            higherValue: 0.9
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
            return state;

        default:
            return state;
    }

}

export {
    customSettingsInitialState,
    updateCustomSettingsReducer
}
