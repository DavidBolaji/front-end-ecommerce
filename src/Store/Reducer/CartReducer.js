const INITIAL_DATA = {
    counter: 0,
    price: 0,
}

const cartReducer = (state=INITIAL_DATA, action) => {
    if (action.type === 'ADD') {
        return {
            counter: state.counter + action.payload.counter,
            price: state.price + (action.payload.price * action.payload.counter)
        }
    } else if (action.type === 'REMOVE') {
        return INITIAL_DATA;
    } 

    return state;
}

export default cartReducer;