import Home from "./Pages/Home";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { PrivateRoute } from "./Pages/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <>
    <Router>
       <Nav/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='register' element={<Register/>}/>
             <Route path="/profile" element={<PrivateRoute />} />
   
      </Routes>
      <Footer/>
    </Router>

    </>

  );
}