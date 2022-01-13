const productReducer = (state=[], action) => {
    if (action.type === 'SETIN') {
        return action.payload
    }

    return state;
}

export default productReducer;