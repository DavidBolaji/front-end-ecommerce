import React from 'react';
import Next from '../Assets/images/icon-next.svg'
import Previous from '../Assets/images/icon-previous.svg'
import { useSelector, useDispatch } from 'react-redux';
import datas from './../Data/data';
import { setLightbox } from './../Store/Action/lightboxObjAction';

const ImageController = () => {
    const activeId = useSelector(state => state.lightboxObjReducer.id)
    const dispatch = useDispatch()

    const checkInc = (num) => {
        if (num === (datas.length - 1)) {
            num = 0;
        } else {
            num++;
        }
        return num;
    }

    const checkDec = (num) => {
        if (num === 0) {
            num = (datas.length - 1);
        } else {
            num--;
        }
        return num;
    }
    

    const nextHandler = () => {
        
        let index;
        for(let i = 0; i < datas.length; i++){
            if(datas[i].id === activeId){
                index = i;
                break;
            }
        }
       let val = checkInc(index)
       dispatch(setLightbox(datas[val]))
    }

    const prevHandler = () => {
        let index;
        for(let i = 0; i < datas.length; i++){
            if(datas[i].id === activeId){
                index = i;
                break;
            }
        }
       let val = checkDec(index)
       dispatch(setLightbox(datas[val]))
    }

    return (
        <React.Fragment>
            <div className="left" onClick={prevHandler}>
                <img src={Previous} alt="prev_button"/>
            </div>
            <div className="right" onClick={nextHandler}>
                <img src={Next} alt="next_button" />
            </div>
        </React.Fragment>
    )
}

export default ImageController
