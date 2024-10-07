import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Home from './page/Home';
import Review from './page/Review';
import Login from './page/Login';

const UserRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/review' element={<Review/>}/>
      </Routes>
  )
}

export default UserRoutes