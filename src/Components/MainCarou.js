import React, { useState, useEffect } from 'react'
import datas from './../Data/data';
import CarouselSmall from './CarouselSmall';
import Product1 from '../Assets/images/image-product-1.jpg';
import Next from '../Assets/images/icon-next.svg'
import Previous from '../Assets/images/icon-previous.svg'
import { useDispatch, useSelector } from 'react-redux';
import { lightboxAction } from './../Store/Action/lightboxAction';
import { setLightbox } from './../Store/Action/lightboxObjAction';
import { setProd } from './../Store/Action/productAction';


const MainCarou = () => {
   
    const [id, setId] = useState('01');
    // dimension tracker
    const [width, setWidth] = useState(window.innerWidth);
    // set image
    const [img, setImg] = useState(Product1)
    // reducer dispatcher
    const dispatch = useDispatch();
    // active image id from reducer
    const activeId = useSelector(state => state.lightboxObjReducer.id)
    // current product object
    const product = useSelector(state => state.lightboxObjReducer)

    const products = useSelector(state => state.productReducer)
    // increment check
    // const [products, setProducts] = useState([]);

    // making carousel active
    useEffect(() => {
        const getProduct = async (cb) => {
          const data = await fetch(`https://treen-api.herokuapp.com/api/v1/products?page=4`)
          const resp = await data.json();
          const newDoc = resp.doc.map((e) => {
              return {
                  id: e.id,
                  img: e.images[0],
                  price: e.price,
                  category: e.category,
                  keyFeatures: e.keyFeatures,
                  description: e.description,
                  specification: e.specification
              }
          })
          cb(newDoc);
      } 

       getProduct((product) => {
          dispatch(setProd(product))
          dispatch(setLightbox({id: product[1].id, img:product[1].img, price:product[1].price}))
          console.log(product);
         
       })

    
    }, [])

    const checkInc = (num) => {
        if (num === (datas.length - 1)) {
            num = 0;
        } else {
            num++;
        }
        return num;
    }
    // decrement check
    const checkDec = (num) => {
        if (num === 0) {
            num = (datas.length - 1);
        } else {
            num--;
        }
        return num;
    }
    
    // display next carousel item
    const nextHandler = () => {
        // initialize index
        let index;
        // loop through data to find active product
        for(let i = 0; i < datas.length; i++){
            if(datas[i].id === activeId){
                index = i;
                break;
            }
        }
        // get the next carousel
       let val = checkInc(index)
        // make product active product
       dispatch(setLightbox(datas[val]))
    }
    // display prev carousel item 
    const prevHandler = () => {
        // initialize index
        let index;
        // loop through to find active carousel 
        for(let i = 0; i < datas.length; i++){
            if(datas[i].id === activeId){
                index = i;
                break;
            }
        }
        // return previous index
       let val = checkDec(index)
        // set item to active product
       dispatch(setLightbox(datas[val]))
    }

    // event listener to track window resize 
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])


    

    // handle lightbox display 
    const clickHandler = (img,id) => {
        dispatch(lightboxAction())
    }

    // adding border on active product
    const setActive = (id) => { // get id
        // // return element with id
        const imgId = products.filter(e => e.id === id )
        // // set element with id as active
        dispatch(setLightbox({id: imgId[0].id, img:imgId[0].img, price:imgId[0].price}))
        // // set internal id
        setId(imgId[0].id)
        // set internal img
        setImg(imgId[0].img); 
    }
    if(!products) {
        return <h1>no data</h1>
    }



    // carousal list product
    const smlCarou = products.map(data => {
        // let current element be false
        let current = false
        // find element with active id
        if (data.id === product.id) {
            current = true
        } 
        // render carousel
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

export default MainCarou;
