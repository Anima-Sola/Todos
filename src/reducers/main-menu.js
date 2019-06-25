const activateMainMenuItem = (Items, itemId) => {
        
  const changedMainMenuItems = Items.map((item) => {
    item.active = false;
    return item;
  });

  changedMainMenuItems[itemId].active = true;

  return changedMainMenuItems;

}

const updateMainMenu = (state, action) => {

    if(state === undefined) {
        return [
            {
              id: 0,
              title: 'Find Activity',
              active: true,
              link: '/'
            },
            {
              id: 1,
              title: 'Archive',
              active: false,
              link: '/archive'
            },
            {
              id: 2,
              title: 'About',
              active: false,
              link: '/about'
            }
        ]
    }

    switch (action.type) {
        case 'SET_ACTIVE_MAIN_MENU_ITEM':
            return activateMainMenuItem(state.mainMenuItems, action.payload);

        default:
            return state;
    }

};

export default updateMainMenu;