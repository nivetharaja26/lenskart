import React, { useState } from 'react'
import logImg from '../assets/img1.jpg'
import { Link } from "react-router-dom";
import {signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {auth,signInWithGoogle} from './firebase-config'
import './login.css'

const navigation=[{name:"signup" , href:"/signup"}];

export default function() {

    const [loginEmail,setLoginEmail]=useState("");
    const [loginPassword,setLoginPassword]=useState("");
    
    const [user,setUser] = useState({});

   // onAuthStateChanged(auth,(currentUser)=>{
     //   setUser(currentUser);
    //}); 
 
    const login=async()=>{

        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        }
        catch(error){
          alert(error.message);
        }
       
        
    };

 
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
  
        <div className='hidden sm:block'>
        <img className='w-full` h-full object-cover' src={logImg} alt=""/>
        </div>
       
    <div className='bg-indigo-600 flex flex-col justify-center'>
        <div className='max-w-[400px] w-full mx-auto bg-indigo-900 p-8 px-8 rounded-lg'>
            <h2 className='text-4xl text-yellow-400 font-bold text-center'>SIGN IN</h2>
            <div className='flex flex-col text-yellow-400 py-2'>
                <label className='font-bold'>User Name</label>
                <input className='rounded-lg bg-indigo-600 mt-2 p-2 focus:border-indigo-900 focus:bg-indigo-400 focus:outline-none h-10 ' type="text"
                onChange={(event)=>{
                    setLoginEmail(event.target.value);
                }} ></input>
            </div>
            <div  className='flex flex-col text-yellow-400 py-2'>
                <label className='font-bold'>Password</label>
                <input className='rounded-lg bg-indigo-600 mt-2 p-2 focus:border-indigo-900 focus:bg-indigo-400 focus:outline-none h-10 ' type="password"
                onChange={(event)=>{
                    setLoginPassword(event.target.value);
                }}></input>
            </div>
            <div className='flex justify-between text-yellow-200 py-2'>
                <p className='flex items-center'><input className='mr-2' type="checkbox"/>Remember Me</p>
                <p>Forgot Password?</p>
            </div>
            <div className='flex justify-center'>
            <button onClick={login} className='w-full  my-5  py-2  bg-yellow-400 shadow-lg shadow-yellow-200/70 hover:bg-red-600 font-bold text-white rounded-lg'>Sign In</button>
            </div>
           
           <br/>
           <div className='text-white'>
               <p>----------------- or sign in with -----------------</p>
           </div>
           <br/>
           <div className='flex justify-center'>
               <br/>
               <button  className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
           </div>
           <br/>
            <div className='flex justify-between text-yellow-200 py-2'>
                <p>Don't have an account? </p>
                <Link to={"/signup"}  className='text-cyan-300'>{"signup"}</Link>
               
            </div>
           
           
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
 
        </div>
    </div>   
    </div>
  )
}

/*
 <div className='flex justify-between text-white'>
               <p>Logged in and as :</p>
            {user.email}
           </div>
           */