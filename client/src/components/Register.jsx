import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.form `
    width: 20vw;
    margin: 20vh auto;
    border: 1px solid silver;
    padding: 26px 32px 32px;
    border-radius: 2px;
    box-shadow: rgb(0 0 0 / 20%) 3px 6px 10px;
    background: var(--gradient);

    &#Register-form label {
        display: block;
        margin-bottom: 16px;
    }
    
    &#Register-form input {
        display: block;
        width: 100%;
        border: 1px solid black;
        border-bottom-width: 2px;
        padding: 6px 0 6px 2px;
        margin-top: 4px;
        border-radius: 2px 2px 3px 3px;
    }

    

`


function RegisterPage () {
  function handleSubmit (e) {
    e.preventDefault() 
  console.log(e.target.userName.value);
  console.log(e.target.password.value);
  console.log(e.target.email.value);
  }
  const Navigate = useNavigate ()
  return (
      <div>
        <Wrapper id="Register-form" onSubmit={handleSubmit}>
        <label>
        User Name:
        <input className="input" type="text" name="userName" placeholder="Jone" />
      </label>
      <label>
        Email:
        <input className="input" type="email" name="email" placeholder="me@mail.com" />
      </label>
      <label>
        Password:
        <input className="input" type="password" name="password"  placeholder="******" />
      </label>
      <button type="submit">Register</button>
    
    <button onClick={() => Navigate ("/")}>Home Page</button>
     </Wrapper>
    </div>
  );
}

export default RegisterPage
