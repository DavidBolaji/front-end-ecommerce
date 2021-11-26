import React, { useState, useEffect } from 'react'
import datas from './../Data/data';
import CarouselSmall from './CarouselSmall';
import Product1 from '../Assets/images/image-product-1.jpg';
import Next from '../Assets/images/icon-next.svg'
import Previous from '../Assets/images/icon-previous.svg'
import { useDispatch, useSelector } from 'react-redux';
import { lightboxAction } from './../Store/Action/lightboxAction';
import { setLightbox } from './../Store/Action/lightboxObjAction';



const MainCarou = () => {
    const [id, setId] = useState('01');
    const [loaded, setLoaded] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [img, setImg] = useState(Product1)
    const dispatch = useDispatch();
    const activeId = useSelector(state => state.lightboxObjReducer.id)
    const product = useSelector(state => state.lightboxObjReducer)
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


    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    useEffect(() => {
        setActive(product.id)
    }, [])



     const clickHandler = (img,id) => {
        console.log(img,id);
        dispatch(lightboxAction())
    }

     const setActive = (id) => {
        const imgId = datas.filter(data => data.id === id )
        dispatch(setLightbox({id: imgId[0].id, img:imgId[0].img}))
        setId(imgId[0].id)
        setImg(imgId[0].img); 
    }

    const smlCarou = datas.map(data => {
        let current = false
        if (data.id === product.id) {
            current = true
        } 

        return <CarouselSmall
                    key={data.id} 
                    active={current}  
                    id={data.id} 
                    onClick={() => setActive(data.id)} 
                    src={data.img}
                    active={current} 
                /> 
    })
    
    return (
        <div className="carousel">
            <div className="focus" onClick={() => width > 850 && clickHandler(img,id)}>
                <img src={product.img} alt="shoes"  />
                
                <div className="left" onClick={prevHandler} style={{display: width > 850 && 'none'}}>
                    <img src={Previous} alt="prev_button"/>
                </div>
                <div className="right" onClick={nextHandler} style={{display: width > 850 && 'none'}}>
                    <img src={Next} alt="next_button" />
                </div>
            </div>
            <div className="scroll">
                {smlCarou}
            </div>
        </div>
    )
}

export default MainCarou
