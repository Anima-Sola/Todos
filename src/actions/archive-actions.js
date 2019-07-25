const archiveNewActivity = (activity) => {
    return {
        type: 'ARCHIVE_NEW_ACTIVITY',
        payload: activity
    };
};

export default archiveNewActivity;