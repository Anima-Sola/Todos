const archiveNewActivityAction = (activity) => {
    return {
        type: 'ARCHIVE_NEW_ACTIVITY',
        payload: activity
    };
};

const makeActivityFavouriteAction = (key) => {
    return {
        type: 'MAKE_ACTIVITY_FAVOURITE',
        payload: key
    }
}

const makeActivityNonFavouriteAction = (key) => {
    return {
        type: 'MAKE_ACTIVITY_NON_FAVOURITE',
        payload: key
    }
}

const removeActivityAction = (key) => {
    return {
        type: 'REMOVE_ACTIVITY',
        payload: key
    }
}

export {
    archiveNewActivityAction,
    makeActivityFavouriteAction,
    makeActivityNonFavouriteAction,
    removeActivityAction
}