

const data = {
    id: '01',
    img: '../../Assets/images/image-product-1-thumbnail.jpg'
}

const lightboxObjReducer = (state=data,action) => {
    if(action.type === 'SET') {
        return {
            id: action.payload.id,
            img: action.payload.img,
            price: action.payload.price
        }
    }
    return state;
}

export default lightboxObjReducer;

