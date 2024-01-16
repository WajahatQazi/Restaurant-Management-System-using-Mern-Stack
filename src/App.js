import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Update from './Pages/Update';


function App() {
  return (
    <div>
     
     { <BrowserRouter> 
        <Routes>
        
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/update" element={<Update />} />
          
          
          
        </Routes>
  </BrowserRouter> }

    </div>
  );
}

export default App;