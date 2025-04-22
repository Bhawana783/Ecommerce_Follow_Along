import Login from "../components/auth/Login"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEmail } from '../redux/userSlice';

function Login() {
  const [email, setLocalEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmail(email));
    // Redirect logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setLocalEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;