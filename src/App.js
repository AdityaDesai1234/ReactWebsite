import './App.css';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from './components/Error404';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index  element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/*" element={<Error404 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
