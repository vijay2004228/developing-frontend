import './App.css';
import Login from './StudentLogin';
import StaffLogin from './StaffLogin'; 
import AdminLogin from './AdminLogin';
import StaffSignup from './StaffSignup';
import HomePage from './home';
import  {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<HomePage/>}/>
   <Route path="/StaffSignup" element={<StaffSignup/>}/>
   <Route path="/StaffLogin" element={<StaffLogin/>}/>
   <Route path="/StudentLogin" element={<Login/>}/>
   <Route path="/AdminLogin" element={<AdminLogin/>}/>
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
