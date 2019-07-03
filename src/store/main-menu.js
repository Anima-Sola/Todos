const mainMenuInitialState = {
  selectedItemId: 0,
  items: [
    {
      id: 0,
      title: 'Find Activity',
      link: '/'
    },
    {
      id: 1,
      title: 'Archive',
      link: '/archive'
    },
    {
      id: 2,
      title: 'About',
      link: '/about'
    }
  ]
};

const updateMainMenuReducer = (state = mainMenuInitialState, action) => {

    switch (action.type) {
        case 'SET_ACTIVE_MAIN_MENU_ITEM':
            return {...state, selectedItemId: action.payload }

        default:
            return state;
    }

};

export {
  mainMenuInitialState,
  updateMainMenuReducer
}