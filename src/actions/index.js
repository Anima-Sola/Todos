const setActiveMainMenuItem = (itemId) => {
    return {
        type: 'SET_ACTIVE_MAIN_MENU_ITEM',
        payload: itemId
    };
};

export  {
    setActiveMainMenuItem
};