import React, {useEffect} from 'react';
import Navbar from './Components/Navbar';
import './Styles/style.css'
import Shop from './Components/Shop';
import LightBox from './Components/LightBox';
import Sidebar from './Components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './Store/Action/AuthAction';
import { setProd } from './Store/Action/productAction';
import io from 'socket.io-client';



// const socket = io.connect('http://localhost:5000/')

function App() {
  const dispatch = useDispatch();
  const authenticate = useSelector(state => state.authReducer);  
  useEffect(() => {

      const login = async (cb) => {
          const data = await fetch(`https://treen-api.herokuapp.com/api/v1/users/login`, {
              method:'POST',
              body: JSON.stringify({
                  email: 'ologunlekodavid245@gmail.com',
                  password: 'david1234'
              }),
              headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
              },
          })
          const resp = await data.json()
          cb(resp.token);
      }
      login((token) => {
          dispatch(auth(token))
      }) 
      
  }, [])
  
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
