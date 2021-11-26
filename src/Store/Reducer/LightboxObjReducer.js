

const data = {
    id: '01',
    img: '/static/media/image-product-1.520cc50b.jpg 01'
}

const lightboxObjReducer = (state=data,action) => {
    if(action.type === 'SET') {
        return {
            id: action.payload.id,
            img: action.payload.img
        }
    }
    return state;
}

export default lightboxObjReducer;

