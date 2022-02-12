import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from '../../context/NoteContext';

const Register = ({setToggle}) => {
  const navigate = useNavigate()
  const {link,fetchuser} = useContext(NoteContext)
  //useState hook
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const submitregister = async(e)=>{
    e.preventDefault()
    if(password!==cpassword){
      alert("password entered are different")
      return
    }
    try {
      console.log(username," ",email," ",password)
      const response = await fetch(`${link}/inotesApi/auth/register`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({username:username, email: email, password: password })
      })
      const json = await response.json()
      if (json.success) {
        localStorage.setItem("inotetoken", json.authtoken)
        fetchuser()
        navigate("/")
      }else{
        console.log(json);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return <div className='w-full h-full flex px-5 justify-center'>
    <form className="px-3 py-3 w-full" onSubmit={submitregister}>
      <div className="mb-2">
        <label className="block text-green-600 text-sm font-bold mb-1" htmlFor="username">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600" id="username" name="username" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" />
      </div>
      <div className="mb-2">
        <label className="block text-green-600 text-sm font-bold mb-1" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600" id="email" name="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="john@gmail.com" />
      </div>
      <div className="mb-2">
        <label className="block text-green-600 text-sm font-bold mb-1" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
      </div>
      <div className="mb-2">
        <label className="block text-green-600 text-sm font-bold mb-1" htmlFor="cpassword">
          Confirm Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-green-600" id="cpassword" name="cpassword" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} type="password" placeholder="Confirm Password" />
      </div>
      <button className='underline font-serif text-sm cursor-pointer'onClick={()=>{setToggle(false)}}>Already have an account?</button>
      <div className="flex items-center py-4 space-x-2">
        <button className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-sm shadow-neutral-500" type="submit">
          Register
        </button>
      </div>
    </form>
  </div>;
};

export default Register;
