import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Bulletin from "../components/Bulletin";
import Footer from "../components/Footer";
import JuiceLab from "../components/JuiceLab";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";
import LoginPage from "../components/Login";
import RegisterPage from "../components/Register";

const Routings = () => (
    <Router>
        <Bulletin/>
        <Navbar/>
        <Routes>
        <Route path="/" element={<JuiceLab/>}/>
        <Route path="/shoppingCart" element={<ShoppingCart/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
        <Footer/>

    </Router>


)

export default Routings