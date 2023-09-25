import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Policy from './components/Policy';
// import { Policy } from '@mui/icons-material';
// import 
import Terms from './components/Terms';
import FAQ from './components/Faq';

const App = () => {
  const { currentRole } = useSelector(state => state.user);

  return (
   <>
    <Router>
      {currentRole === null &&
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choose" element={<ChooseUser visitor="normal" />} />
          <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />
          <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
          <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
          <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />
          <Route path="/Adminregister" element={<AdminRegisterPage />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/policy" element={<Policy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/faq" element={<FAQ/>} />
          {/* <Route path='*' element={<Navigate to="/" />} /> */}
        </Routes>}
      {currentRole === "Admin" &&
        <>
          <AdminDashboard />
        </>
      }

      {currentRole === "Student" &&
        <>
          <StudentDashboard />
        </>
      }

      {currentRole === "Teacher" &&
        <>
          <TeacherDashboard />
        </>
      }
    <Footer/>
    </Router>
    </>
  )
}

export default App