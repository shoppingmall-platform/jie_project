//import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './page/Home';
import Login from './page/Login';
//import ProductDetail from './page/ProductDetail';


function App() {
  //let [authenticate, setAuthenticate] = useState(false);
  return(
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App;
