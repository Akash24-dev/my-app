import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/AboutusPage/About';
import Footer from './Components/Footer'
import Home from './Pages/HomePage/Home'
import Navbar from './Components/Navbar'
import Page1 from './Pages/Contact/Page1';
import Lang1 from './Pages/Languages/Lang1'
import Car1 from './Pages/Careers/Car1'
import Certified1 from './Pages/Certified Translations/Certified1';
import Industry from './Pages/Industry Page/Industry';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certified1" element={<Certified1 />} />
          <Route path='/industry' element={<Industry />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/lang1" element={<Lang1 />} />
          <Route path="/car1" element={<Car1 />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
