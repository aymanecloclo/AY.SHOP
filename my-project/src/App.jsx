import Home from "./Pages/Home";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <>
    <Router>
       <Nav/>
      <Routes>
         <Route path='/' element={<Home/>}>
      
      </Route>
      </Routes>
    </Router>

    </>

  );
}