import './App.css';
import Login from './StudentLogin';
import StaffLogin from './StaffLogin'; 
import AdminLogin from './AdminLogin';
import StaffSignup from './StaffSignup';
import HomePage from './home';
import Admin from './Admin';
import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
function App() {
  return (
   <BrowserRouter>
   <Layout>
   <Routes>
   <Route path="/" element={<HomePage/>}/>
   <Route path="/StaffSignup" element={<StaffSignup/>}/>
   <Route path="/StaffLogin" element={<StaffLogin/>}/>
   <Route path="/StudentLogin" element={<Login/>}/>
   <Route path="/AdminLogin" element={<AdminLogin/>}/>
   
   <Route path="/Admin" element={<Admin/>}/>
   
   </Routes>
   </Layout>
   </BrowserRouter>
  );
}

export default App;
