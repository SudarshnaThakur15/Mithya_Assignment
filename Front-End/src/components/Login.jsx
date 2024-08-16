import React from 'react';
import keys from '../assets/keys.png';
function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-black">
      <div className="w-96 bg-pink-200 p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img src={keys} alt="Keys Icon" className="w-20 h-20" />
        </div>
        <h2 className="text-center text-lg font-semibold text-black mb-4">
          Enter your details
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Email"
            />
          </div>
                   <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="password">
              Create Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Create Password"
            />
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 focus:outline-none"
            >
              Login 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
