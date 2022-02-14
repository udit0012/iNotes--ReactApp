import React, { useContext, useState } from 'react';
import NoteContext from '../../context/NoteContext';
import {useNavigate} from "react-router-dom"

const Login = ({ setToggle }) => {
  const navigate = useNavigate()
  const { link,fetchuser,showAlert } = useContext(NoteContext)
  //useState hook
  const [credentials, setCredentials] = useState({email:"",password:""})
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //login endpoint
  const submitlogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${link}/inotesApi/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ email: email, password: password })
      })
      const json = await response.json()
      if (json.success) {
        localStorage.setItem("inotetoken", json.authtoken)
        fetchuser()
        navigate("/")
        showAlert("Login Successfull","success")
      }else{
        showAlert("Invalid credentials","success")
        return
      }
    } catch (error) {
      showAlert(error.message,"error")
    }
  }

  // const onchange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value })
  // }
  return <div className='w-full h-full flex px-5 justify-center'>
    <form className="px-3 py-3 w-full" onSubmit={submitlogin}>
      <div className="mb-4">
        <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600" id="email" name="email" type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="john@gmail.com" required/>
      </div>
      <div className="mb-2">
        <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-green-600" id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder="Password" required/>
      </div>
      <button className='font-serif underline text-sm' onClick={() => { setToggle(true) }}>Create an account</button>
      <div className="flex items-center py-4 space-x-2">
        <button className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-sm shadow-neutral-500" type="submit">
          Login
        </button>
      </div>
    </form>
  </div>;
};

export default Login;
