import React from 'react'
import MainCarou from './MainCarou';
import Close from '../Assets/images/icon-close.svg'
import ImageController from './ImageController';
import { useDispatch } from 'react-redux';
import { lightboxAction } from './../Store/Action/lightboxAction';

const LightBox = () => {

    const dispatch = useDispatch()
    return (
        <div className="lightbox" >
            <div className="lightbox_cont">
                <div className="control_close" onClick={() => dispatch(lightboxAction())}>
                    <img src={Close} alt="close_button" className="close"/>
                </div>
                <MainCarou  />
                <ImageController />
                
            </div>
        </div>
    )
}

export default LightBox
