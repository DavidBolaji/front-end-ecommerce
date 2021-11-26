import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import './Styles/style.css'
import Shop from './Components/Shop';
import LightBox from './Components/LightBox';
import Sidebar from './Components/Sidebar';
import { useSelector } from 'react-redux';


function App() {
  
  const lightboxState = useSelector(state => state.lightBoxReducer)
  return (
    <React.Fragment>
      {lightboxState && <LightBox />}
      <div className="container">
          <Sidebar />
          <Navbar />
          <Shop />
          
      </div>
    </React.Fragment>
  );
}

export default App;
