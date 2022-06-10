import React, { useState } from 'react'
import logImg from '../assets/img1.jpg'
import {createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase-config'

export default function() {

    const [registerEmail,setRegisterEmail]=useState("");
    const [registerPassword,setRegisterPassword]=useState("");

    const [user,setUser] = useState({});

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    });

    const register=async()=>{
        try{
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
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
            <h2 className='text-4xl text-yellow-400 font-bold text-center'>SIGN UP</h2>
            <div className='flex flex-col text-yellow-400 py-2'>
                <label className='font-bold'>User Name</label>
                <input className='rounded-lg bg-indigo-600 mt-2 p-2 focus:border-indigo-900 focus:bg-indigo-400 focus:outline-none h-10 ' type="text" 
                onChange={(event)=>{
                    setRegisterEmail(event.target.value);
                }}></input>
            </div>
            <div  className='flex flex-col text-yellow-400 py-2'>
                <label className='font-bold'>Password</label>
                <input className='rounded-lg bg-indigo-600 mt-2 p-2 focus:border-indigo-900 focus:bg-indigo-400 focus:outline-none h-10 ' type="password"
                onChange={(event)=>{
                    setRegisterPassword(event.target.value);
                }}></input>
            </div>
            <div className='flex justify-between text-yellow-200 py-2'>
                <p className='flex items-center'><input className='mr-2' type="checkbox"/>Remember Me</p>
                <p>Forgot Password?</p>
            </div>
            <div className='flex justify-center'>
            <button onClick={register} className='w-full  my-5  py-2  bg-yellow-400 shadow-lg shadow-yellow-200/70 hover:bg-red-600 font-bold text-white rounded-lg'>Create Account</button>
            </div>
           
           <br/>
           <div className='text-white'>
               <p>----------------- or sign up with -----------------</p>
           </div>
           <br/>
           <div className='flex justify-between text-white'>
               <p>Logged in and as</p>
                {user.email}
           </div>
           
           
        </div>
    </div>   
    </div>
  )
}
