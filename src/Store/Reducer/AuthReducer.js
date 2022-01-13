const authReducer = (state='', action) => {
    if (action.type === 'SETTER') {
        return action.payload
    }

    return state;
}

export default authReducer;