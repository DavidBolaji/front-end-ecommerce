import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Close from '../Assets/images/icon-close.svg'
import { toggleNav } from './../Store/Action/navAction';

const URL = [
    {
        id: '05',
        urlName: 'collection',
        anchor: '#collection'
    },
    {
        id: '01',
        urlName: 'man',
        anchor: '#man'
    },
    {
        id: '02',
        urlName: 'woman',
        anchor: '#woman'
    },
    {
        id: '03',
        urlName: 'about',
        anchor: '#about'
    },{
        id: '04',
        urlName: 'contact',
        anchor: '#contact'
    }
    
];

const Sidebar = () => {

    const navState = useSelector(state => state.navReducer);
    const dispatch = useDispatch();
    
    return (
        <React.Fragment>
            {navState && <div className="overlay" onClick={() => dispatch(toggleNav())}></div>}
            {navState && <div className="sidebar" style={{marginLeft: navState && '0px'}}>
                
                <img src={Close} alt="close_icon" className="close" onClick={() => dispatch(toggleNav())} />
                <ul>
                    {URL.map(nav => <li key={nav.id}><a href={nav.anchor}>{nav.urlName}</a></li>)}
                </ul>
            </div>}
        </React.Fragment>
    )
}

export default Sidebar
