const lightBoxReducer = (state=false,action) => {
    if(action.type === 'TOGGLE') {
        return !state;
    }
    return state;
}

export default lightBoxReducer;