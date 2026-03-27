import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Login from './pages/Login';
import Register from './pages/Register';
import UsersTable from './pages/UsersTable';
import TeachersTable from './pages/TeachersTable';
import Navbar from './Components/Navbar';
import AnimatedBackground from './Components/AnimatedBackground';



export default function App() {
  return (
    <Router>
    <AnimatedBackground />
     <Navbar/>
<div className="mt-20">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<UsersTable />} />
      <Route path="/teachers" element={<TeachersTable />} />
    </Routes>
  </div>


    </Router>
  );
}