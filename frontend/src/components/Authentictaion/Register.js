import React, { useState } from 'react';

const Register = ({setToggle}) => {
  //useState hook
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  return <div className='w-full h-full flex px-5 justify-center'>
    <form className="px-3 py-3 w-full">
      <div className="mb-2">
        <label className="block text-green-600 text-sm font-bold mb-1" htmlFor="username">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600" id="username" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" />
      </div>
      <div className="mb-2">
        <label className="block text-green-600 text-sm font-bold mb-1" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600" id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="john@gmail.com" />
      </div>
      <div className="mb-2">
        <label className="block text-green-600 text-sm font-bold mb-1" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
      </div>
      <div className="mb-2">
        <label className="block text-green-600 text-sm font-bold mb-1" htmlFor="cpassword">
          Confirm Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-green-600" id="cpassword" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} type="password" placeholder="Confirm Password" />
      </div>
      <button className='underline font-serif text-sm cursor-pointer'onClick={()=>{setToggle(false)}}>Already have an account?</button>
      <div className="flex items-center py-4 space-x-2">
        <button className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-sm shadow-neutral-500" type="button">
          Register
        </button>
      </div>
    </form>
  </div>;
};

export default Register;
