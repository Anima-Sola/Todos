let archiveInitialState = JSON.parse(localStorage.getItem('archiveState'));

if(archiveInitialState === null) {
    
    archiveInitialState = {
        activities: []
    }

}

const updateArchiveReducer = (state = archiveInitialState, action) => {

    switch (action.type) {
        case 'ARCHIVE_NEW_ACTIVITY':
            state.activities.push(action.payload);
            return state;

        default:
            return state;
    }

};

export {
    archiveInitialState,
    updateArchiveReducer
}