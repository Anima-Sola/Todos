const setSelectedTypeOfAction = (type) => {
    return {
        type: 'SET_SELECTED_TYPE_OF_ACTION',
        payload: type
    };
};

const setSelectedCustomActivity = (id) => {
    return {
        type: 'SET_SELECTED_CUSTOM_ACTIVITY',
        payload: id
    };
};

export {
    setSelectedTypeOfAction,
    setSelectedCustomActivity
};