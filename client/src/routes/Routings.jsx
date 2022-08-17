import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Bulletin from "../components/Bulletin";
import Footer from "../components/Footer";
import JuiceLab from "../components/JuiceLab";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";


const Routings = () => (
    <Router>
        <Bulletin/>
        <Navbar/>
        <Routes>
            <Route path="/" element={<JuiceLab/>}/>
            <Route path="/shoppingCart" element={<ShoppingCart/>}/>

        </Routes>
        <Footer/>

    </Router>


)

export default Routings