const setSelectedCustomActivity = (id) => {
    return {
        type: 'SET_SELECTED_CUSTOM_ACTIVITY',
        payload: id
    };
};

const setSelectedTypeOfAction = (type) => {
    return {
        type: 'SET_SELECTED_TYPE_OF_ACTION',
        payload: type
    };
};

const incPriceValueAction = (id) => {
    return {
        type: 'INC_PRICE_VALUE',
        payload: id
    };
};

const decPriceValueAction = (id) => {
    return {
        type: 'DEC_PRICE_VALUE',
        payload: id
    };
};

const incLowerPriceValueAction = (step = 0.05) => {
    return {
        type: 'INC_LOWER_PRICE_VALUE',
        payload: step
    };
};

const decLowerPriceValueAction = (step = 0.05) => {
    return {
        type: 'DEC_LOWER_PRICE_VALUE',
        payload: step
    };
};

const incHigherPriceValueAction = (step = 0.05) => {
    return {
        type: 'INC_HIGHER_PRICE_VALUE',
        payload: step
    };
};

const decHigherPriceValueAction = (step = 0.05) => {
    return {
        type: 'DEC_HIGHER_PRICE_VALUE',
        payload: step
    };
};

const incNumberOfParticipantsValueAction = (step = 1) => {
    return {
        type: 'INC_NUMBER_OF_PARTICIPANTS_VALUE',
        payload: step
    };
};

const decNumberOfParticipantsValueAction = (step = 1) => {
    return {
        type: 'DEC_NUMBER_OF_PARTICIPANTS_VALUE',
        payload: step
    };
};

const incAccessibilityValueAction = (step = 0.01) => {
    return {
        type: 'INC_ACCESSIBILITY_VALUE',
        payload: step
    };
};

const decAccessibilityValueAction = (step = 0.01) => {
    return {
        type: 'DEC_ACCESSIBILITY_VALUE',
        payload: step
    };
};

const incLowerAccessibilityValueAction = (step = 0.01) => {
    return {
        type: 'INC_LOWER_ACCESSIBILITY_VALUE',
        payload: step
    };
};

const decLowerAccessibilityValueAction = (step = 0.01) => {
    return {
        type: 'DEC_LOWER_ACCESSIBILITY_VALUE',
        payload: step
    };
};

const incHigherAccessibilityValueAction = (step = 0.01) => {
    return {
        type: 'INC_HIGHER_ACCESSIBILITY_VALUE',
        payload: step
    };
};

const decHigherAccessibilityValueAction = (step = 0.01) => {
    return {
        type: 'DEC_HIGHER_ACCESSIBILITY_VALUE',
        payload: step
    };
};


export {
    setSelectedTypeOfAction,
    setSelectedCustomActivity,
    incPriceValueAction,
    decPriceValueAction,
    incLowerPriceValueAction,
    decLowerPriceValueAction,
    incHigherPriceValueAction,
    decHigherPriceValueAction,
    incNumberOfParticipantsValueAction,
    decNumberOfParticipantsValueAction,
    incAccessibilityValueAction,
    decAccessibilityValueAction,
    incLowerAccessibilityValueAction,
    decLowerAccessibilityValueAction,
    incHigherAccessibilityValueAction,
    decHigherAccessibilityValueAction 
};