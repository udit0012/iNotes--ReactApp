import React, { useState } from 'react';

const Login = ({setToggle}) => {

  //useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return <div className='w-full h-full flex px-5 justify-center'>
    <form className="px-3 py-3 w-full">
      <div className="mb-4">
        <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600" id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="john@gmail.com" />
      </div>
      <div className="mb-2">
        <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-green-600" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
      </div>
      <button className='font-serif underline text-sm' onClick={()=>{setToggle(true)}}>Create an account</button>
      <div className="flex items-center py-4 space-x-2">
        <button className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-sm shadow-neutral-500" type="button">
          Login
        </button>
      </div>
    </form>
  </div>;
};

export default Login;
