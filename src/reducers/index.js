import updateMainMenu from './main-menu';
import updateCustomSettings from './custom-settings';

const reducer = (state, action) => {

    return {
        mainMenuItems: updateMainMenu(state, action),
        customSettings: updateCustomSettings(state, action)
    };

};

export default reducer;