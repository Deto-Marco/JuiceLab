import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Bulletin from "../components/Bulletin";
import Footer from "../components/Footer";
import JuiceLab from "../components/JuiceLab";
import Navbar from "../components/Navbar";
import Checkout from "../components/Checkout";
import { ContextContainer } from "../components/context/ContextContainer";


const Routings = () => (
    <ContextContainer>
    <Router>
        <Bulletin/>
        <Navbar/>
        <Routes>
            <Route path="/" element={<JuiceLab/>}/>
            <Route path="/checkout" element={<Checkout/>}/>

        </Routes>
        <Footer/>

    </Router>
    </ContextContainer>


)

export default Routings