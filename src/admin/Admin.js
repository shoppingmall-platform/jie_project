import { Routes, Route } from 'react-router-dom';
import UserMgmt from './UserMgmt';
import ProductMgmt from './ProductMgmt';
import AdminDashboard from './AdminDashboard';
import OrderMgmt from './OrderMgmt';
import AdminTopBar from './component/AdminTopBar';

function Admin() {
  return (
    <div>
      <AdminTopBar/>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/users" element={<UserMgmt />} />
        <Route path="/products" element={<ProductMgmt />} />
        <Route path="/orders" element={<OrderMgmt />} />
      </Routes>
    </div>
  );
}

export default Admin;
