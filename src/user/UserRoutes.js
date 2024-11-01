import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Home from './page/Home';
import Review from './page/Review';
import Login from './page/Login';
import Category from './page/Category';
import Signup from './page/Signup';

const UserRoutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/category/cate_no/:cateNo' element={<Category />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
  )
}

export default UserRoutes