import React, { useState } from 'react';
import axios from 'axios';

// Defining the Login component
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Making a POST request to the backend for login
      const response = await axios.post(`${process.env.REACT_APP_PENCILMATIC_BACKEND_URL}/auth/login`, { email, password });
      console.log(response.data);
      localStorage.setItem('token', response.data.accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  // Rendering the login form
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-left">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block text-left">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
}

// Exporting the Login component
export default Login;