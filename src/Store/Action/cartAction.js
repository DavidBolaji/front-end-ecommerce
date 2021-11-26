export const addToCart = (obj) => {
    return {
        type: 'ADD',
        payload: obj
    }
}

export const clearCart = () => {
    return {
        type: 'REMOVE'
    }
}