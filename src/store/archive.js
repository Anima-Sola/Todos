let archiveInitialState = JSON.parse(localStorage.getItem('archiveState'));

if(archiveInitialState === null) {
    
    archiveInitialState = {
        activities: []
    }

}

const findActivityIndexByKey = (state, key) => {

    const activityIndex = state.activities.findIndex((currentValue) => {
        return currentValue.key === key;
    });

    return activityIndex;
}

const toggleFavouriteActivity = (state, key) => {
    const activityIndex = findActivityIndexByKey(state, key);

    if(activityIndex !== undefined) {
        state.activities[activityIndex].isFavourite = !state.activities[activityIndex].isFavourite;
    }

    return state;
}

const removeActivity = (state, key) => {
    const activityIndex = findActivityIndexByKey(state, key);

    if(activityIndex !== undefined) {
        state.activities.splice(activityIndex, 1);
    }

    return state;
}

const updateArchiveReducer = (state = archiveInitialState, action) => {

    switch (action.type) {
        case 'ARCHIVE_NEW_ACTIVITY':
            action.payload.isFavourite = false;
            state.activities.push(action.payload);
            return state;

        case 'TOGGLE_FAVOURITE_ACTIVITY':
            return toggleFavouriteActivity(state, action.payload);

        case 'REMOVE_ACTIVITY':
            return removeActivity(state, action.payload);

        default:
            return state;
    }

};

export {
    archiveInitialState,
    updateArchiveReducer
}