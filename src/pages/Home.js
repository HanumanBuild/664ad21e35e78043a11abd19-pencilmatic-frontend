import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Pencilmatic</h1>
      <p className="mb-8">Create and save your drawings with ease.</p>
      <div className="space-x-4">
        <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</Link>
        <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">Login</Link>
      </div>
    </div>
  );
}

export default Home;