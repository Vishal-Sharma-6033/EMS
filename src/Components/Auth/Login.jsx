import React, { useState } from "react";

const Login = ({handlelogin}) => {
const [email, setEmail] = useState('');
const [password, setPassword ] = useState('');

  const submitHandler=(e)=>{
    e.preventDefault();
    handlelogin(email,password);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="p-20 border-2 rounded-xl border-emerald-600">
        <form 
        onSubmit={(e)=>{submitHandler(e)}}
        
        className="flex flex-col items-center justify-center">
          <input
          // value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className="px-6 py-2 text-lg font-medium bg-transparent border-2 rounded-full outline-none border-emerald-600 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
          // value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
            className="px-6 py-2 mt-3 text-lg font-medium bg-transparent border-2 rounded-full outline-none border-emerald-600 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="w-full px-8 py-2 mt-5 text-lg font-semibold text-white border-none rounded-full outline-none hover:bg-emerald-700 bg-emerald-600 placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
