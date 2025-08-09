import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Partners from './pages/Partners.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
