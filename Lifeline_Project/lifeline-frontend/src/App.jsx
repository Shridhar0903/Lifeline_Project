import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FindDonors from './pages/FindDonors'; 

// १. मदतनीस फंक्शन (Layout)
const Layout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register'; //The navbar will not be visible during login.

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {!isAuthPage && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/find-donors" element={<FindDonors />} /> 
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
};

// २. मुख्य फंक्शन (App - फाईलच्या नावाप्रमाणे)
const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App; // <-- शेवटी आपण App लाच बाहेर पाठवतो (Export करतो)