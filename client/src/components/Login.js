// Stage 1 - Authentication
// Step 2 - Save the token to localStorage
import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const loginInitial = {
    username: '',
    password: ''
  };

  const [login, setLogin] = useState(loginInitial);

  const handleChange = e => {
    setLogin({
      ...login,
        [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    // make a post request to retrieve a token from the api
    // the server will "authenticate" the user based on their credentials
    // if they can be authenticated, the server will return a token - will use localStorage
    axiosWithAuth()
      .post("/login", login)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setLogin(login);
        props.history.push('/protected');
      })
      .catch(err => {
        localStorage.removeItem('token');
        console.log('Invalid Login: ', err);
      }, []);
  };
  // when you have handled the token, navigate to the BubblePage route
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
