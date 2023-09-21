import './App.css';
import Login from './StudentLogin';
import StaffLogin from './StaffLogin'; 
import AdminLogin from './AdminLogin';
import StaffSignup from './StaffSignup';
import HomePage from './home';
import Admin from './Admin';
import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import Studentprofile from './Studentprofile';
import Courses from './Courses';
import Exams from './Exams';
import Grades from './Grades';
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
   <Route path="/Studentprofile" element={<Studentprofile/>}/>
   <Route path="/Courses" element ={<Courses/>}/>
   <Route path="/Exams" element ={<Exams/>}/>
   <Route path="/Grades" element ={<Grades/>}/>
   
   </Routes>
   </Layout>
   </BrowserRouter>
  );
}

export default App;
