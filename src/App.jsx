
import Store from "./Pages/Store";
import Nav from "./components/Nav";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { PrivateRoute } from "./Pages/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
export default function App() {
  return (

      <Router>
        <Nav />
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="register" element={<Register />} />
          <Route path="/profile" element={<PrivateRoute />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>

  );
}
