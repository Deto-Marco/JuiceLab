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

    &#login-form label {
        display: block;
        margin-bottom: 16px;
    }
    
    &#login-form input {
        display: block;
        width: 100%;
        border: 1px solid black;
        border-bottom-width: 2px;
        padding: 6px 0 6px 2px;
        margin-top: 4px;
        border-radius: 2px 2px 3px 3px;
    }
...
    

`


function LoginPage ({ handleSubmit}) {
  const Navigate = useNavigate ()
  return (
      <div>
        <Wrapper id="login-form" onSubmit={handleSubmit}>
      <label>
        Email:
        <input className="input" type="email" placeholder="me@mail.com" />
      </label>
      <label>
        Password:
        <input className="input" type="password" placeholder="******"/>
      </label>
      <button type="submit">Log In</button>
    </Wrapper>
    <button onClick={() => Navigate ("/")}>Home Page</button>
    </div>
  );
}

export default LoginPage
