import React, { useState } from 'react'

const CarouselSmall = (props) => {

    const [hover, setHover] = useState(false)

    const hoverHandler = () => {
        setHover(prev => !prev)
    }

    const added = {
        border: '3px solid hsl(26, 98%, 53%)',
        borderRadius: '10px',
        backgroundColor: 'hsl(26, 98%, 53%)'
    }

    return (
        <React.Fragment>
            <div className='small_img' onClick={props.onClick}  onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
                {props.active || hover ? <div className="overlay" ></div> : null}
                <img src={props.src} style={props.active ? added : {}}  alt={props.id} id={props.id}   />
            </div>
        </React.Fragment>
    )
}

export default CarouselSmall
