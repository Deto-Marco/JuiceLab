import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import styledComponents from 'styled-components'
import Login from './Login'
import Register from './Register'



const Container = styledComponents.div`
height: 60px;
`

const Wrapper = styledComponents.div`
padding: 10px 30px;
display: flex;
justify-content: space-between;
align-items: center;

`

const Center = styledComponents.div`
flex:1;
text-align: center
`
const Logo = styledComponents.h1`
font-weight: bold;
font-family: 'Monoton', cursive;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Center><Logo>JUICELAB</Logo></Center>
        <NavLink to="/login">Login&nbsp; | &nbsp;</NavLink>
        <NavLink to="/register">Register</NavLink>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </Wrapper>
        </Container>
  )
}

export default Navbar