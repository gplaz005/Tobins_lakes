export const BUTTON_UP = 'BUTTON_UP';
export const buttonUp = index => ({
    type: BUTTON_UP,
    payload: { index },
});

export const BUTTON_DOWN = 'BUTTON_DOWN';
export const buttonDown = index => ({
    type: BUTTON_DOWN,
    payload: { index },
});