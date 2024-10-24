import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminTopBar from './component/AdminTopBar';
import SideBar from './component/SideBar';

import AdminDashboard from './page/AdminDashboard';
import UserMain from './page/customers/CustomerMain';
import ProductMain from './page/product/ProductMain';
import OrderMain from './page/order/OrderMain';
import ProductList from './page/product/ProductList';
import ProductAdd from './page/product/ProductAdd';
import ProductCategories from './page/product/ProductCategories';
import ProductManage from './page/product/ProductManage';


function Admin() {
  return (
    <div>
      <AdminTopBar/>
      <SideBar/>
      <Routes>
        {/* 상위 메뉴 경로 */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/customers" element={<UserMain />} />
        <Route path="/products" element={<ProductMain />} />
        <Route path="/orders" element={<OrderMain />} />

        {/* 상품의 세부 메뉴 경로들 */}
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/products/add" element={<ProductAdd />} />
        <Route path="/products/manage" element={<ProductManage />} />
        <Route path="/products/categories" element={<ProductCategories />} />
{/*
        고객의 세부 메뉴 경로들 
        <Route path="/customers/list" element={<CustomerList />} />
        <Route path="/customers/manage" element={<CustomerManage />} />

        {/* 주문의 세부 메뉴 경로들 
        <Route path="/orders/list" element={<OrderList />} />
        <Route path="/orders/delivery" element={<OrderDelivery />} />
        <Route path="/orders/cancel" element={<OrderCancel />} />
        */}
      </Routes>
      
    </div>
  );
}

export default Admin;
