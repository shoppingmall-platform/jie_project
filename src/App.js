import { Route, Routes, useLocation} from 'react-router-dom';
import Header from './component/Header';
import UserRoutes from './UserRoutes';
import Admin from './admin/Admin';
//import ProductDetail from './page/ProductDetail';


function App() {
  //let [authenticate, setAuthenticate] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  return(
    <div>
      { !isAdmin && <Header/> }
      <Routes>
        <Route path='/*' element={<UserRoutes/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
    </div>
  )
}

export default App;
