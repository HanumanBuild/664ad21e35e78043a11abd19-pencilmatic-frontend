import React, { useState } from 'react';
import axios from 'axios';

// Define the Signup component
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the signup endpoint
      const response = await axios.post(`${process.env.REACT_APP_PENCILMATIC_BACKEND_URL}/auth/signup`, { email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Render the signup form
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-left">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block text-left">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Signup</button>
      </form>
    </div>
  );
}

// Export the Signup component
export default Signup;