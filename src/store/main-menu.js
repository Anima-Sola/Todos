const mainMenuInitialState = [
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
];

const activateMainMenuItem = (Items, itemId) => {
        
  const changedMainMenuItems = Items.map((item) => {
    item.active = false;
    return item;
  });

  changedMainMenuItems[itemId].active = true;

  return changedMainMenuItems;

}

const updateMainMenuReducer = (state = mainMenuInitialState, action) => {

    switch (action.type) {
        case 'SET_ACTIVE_MAIN_MENU_ITEM':
            return activateMainMenuItem(state, action.payload);

        default:
            return state;
    }

};

export {
  mainMenuInitialState,
  updateMainMenuReducer
}