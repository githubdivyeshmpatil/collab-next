import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Ftp from './pages/Ftp';
import Ftp_mainpage from './pages/Ftp_mainpage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ftp" element={<Ftp_mainpage />} />

        {/* Add more pages later */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
