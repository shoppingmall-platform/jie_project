import { Route, Routes, useLocation} from 'react-router-dom';
import Header from './user/component/Header';
import UserRoutes from './user/UserRoutes';
import Admin from './admin/Admin';
import { ThemeProvider } from '@mui/material';
import { userTheme } from './user/UserTheme';
import { adminTheme } from './admin/AdminTheme';

function App() {
  //let [authenticate, setAuthenticate] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  return(
    <div>
      { !isAdmin && <Header/> }
      <Routes>
        <Route 
          path='/*' 
          element={
            <ThemeProvider theme={userTheme}>
              <UserRoutes/>
            </ThemeProvider>
            }/>
        <Route 
          path='/admin/*' 
          element={
            <ThemeProvider theme={adminTheme}>
              <Admin/>
            </ThemeProvider>}/>
      </Routes>
    </div>
  )
}

export default App;
