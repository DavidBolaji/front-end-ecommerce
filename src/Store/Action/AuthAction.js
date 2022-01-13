export const auth = (token) => {
    return {
        type: 'SETTER',
        payload: token
    }
}