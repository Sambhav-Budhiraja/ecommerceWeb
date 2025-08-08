import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className="w-full max-w-sm mx-auto mt-20 px-4 flex flex-col gap-5 text-gray-800">
      <div className="flex items-center justify-center gap-3 mb-4">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[2px] w-8 bg-gray-800" />
      </div>

      {currentState === 'Login' ? null : (
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border border-gray-800 rounded focus:outline-none focus:ring-1"
        />
      )}

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-800 rounded focus:outline-none focus:ring-1"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-800 rounded focus:outline-none focus:ring-1"
      />

      <div className="flex justify-between text-sm text-gray-600">
        <p className="cursor-pointer hover:text-black transition">Forgot your password?</p>
        <p
          onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
          className="cursor-pointer hover:text-black transition"
        >
          {currentState === 'Login' ? 'Create Account' : 'Login Here'}
        </p>
      </div>

      <button className="bg-black text-white py-2 mt-4 rounded hover:bg-gray-800 transition">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login
