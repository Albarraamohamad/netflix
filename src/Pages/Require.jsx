import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import styled from "styled-components";

const Require = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Home"); // Redirect to home page
  };

  return (
<div className="barra">
<RequireContainer>
      <FormContainer>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </InputGroup>
          <Forgot>
            <a href="#">Forgot password?</a>
          </Forgot>
          <SignButton type="submit">Sign in</SignButton>
        </Form>
        <SocialMessage>
          <Line />
          <Message>Login with social accounts</Message>
          <Line />
        </SocialMessage>
        <SocialIcons>
          <IconButton><FaFacebook /></IconButton>
          <IconButton><FaGoogle /></IconButton>
          <IconButton><FaApple /></IconButton>
        </SocialIcons>
        <SignupText>Don't have an account? <a href="#">Sign up</a></SignupText>
      </FormContainer>
    </RequireContainer>
</div>
  );
};


// Styled Components
const RequireContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
`;

const FormContainer = styled.div`
  width: 320px;
  border-radius: 0.75rem;
  background-color: rgba(17, 24, 39, 1);
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Form = styled.form`
  margin-top: 1.5rem;
`;

const InputGroup = styled.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  
  label {
    display: block;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
  }
  
  input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(55, 65, 81, 1);
    outline: 0;
    background-color: rgba(17, 24, 39, 1);
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
  }

  input:focus {
    border-color: rgba(167, 139, 250, 1);
  }
`;

const Forgot = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  color: rgba(156, 163, 175, 1);
  margin: 8px 0 14px 0;

  a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline rgba(167, 139, 250, 1);
  }
`;

const SignButton = styled.button`
  display: block;
  width: 100%;
  background-color: rgba(167, 139, 250, 1);
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(139, 92, 246, 1);
  }
`;

const SocialMessage = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
`;

const Line = styled.div`
  height: 1px;
  flex: 1;
  background-color: rgba(55, 65, 81, 1);
`;

const Message = styled.p`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  color: rgba(156, 163, 175, 1);
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const IconButton = styled.button`
  border-radius: 0.125rem;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
  margin: 0 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    height: 1.25rem;
    width: 1.25rem;
    fill: #fff;
  }
`;

const SignupText = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: rgba(156, 163, 175, 1);
  margin-top: 10px;

  a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline rgba(167, 139, 250, 1);
  }
`;

export default Require;
