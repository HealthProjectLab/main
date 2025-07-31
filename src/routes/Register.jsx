import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Register() {
  const [registerState, setRegisterState] = useState("user");
  return ( 
    <div className='flex flex-col justify-center items-center mt-56'>
                <h1 className='text-3xl mb-10 font-bold'><Link to="/">HealthHelp 🧬</Link></h1>
        
        <div className='flex gap-6'>
            <button className='btn' onClick={() => setRegisterState("user")}>Register as User</button>
            <button className='btn' onClick={() => setRegisterState("doctor")}>Register as Doctor</button>
        </div>
        {registerState === "user" ? ( <form className='md:w-1/2 lg:w-1/4 flex flex-col gap-5 py-10 border border-gray-200 px-10 mt-6'>
            <h1 className='text-center text-2xl underline mb-3'>Register as User</h1>
            <input type="text" placeholder="Enter Your Name" className='border border-gray-300 py-2 rounded-md px-2 '/>
            <input type="text" placeholder="Enter Your Email" className='border border-gray-300 py-2 rounded-md px-2 '/>
            <input type="text" placeholder="Password" className='border border-gray-300 py-2 rounded-md px-2 '/>
            <div>
                <label htmlFor="dob" className='text-sm block mb-2'>Enter your Date of Birth: </label>
                <input type="date" id='dob' placeholder="Password" className='border border-gray-300 py-2 rounded-md px-2 w-full'/>
            </div>
            <select className='border border-gray-400 py-3 px-1'>
                <option>Select your preferred languge: </option>
                <option value="eng">English</option>
                <option value="tel">Telugu</option>
                <option value="hin">Hindi</option>
            </select>
            <span className='text-md italic'>Already have an account? <span className='text-blue-500'>
                <Link to={"/login"}>Login</Link>
            </span></span>
               <button className='border border-purple-400 py-2 hover:bg-purple-300 cursor-pointer rounded-md '>Register</button>

        </form>) : (
           <form className='md:w-1/2 lg:w-1/4 flex flex-col gap-5 py-10 border border-gray-200 px-10 mt-6'>
            <h1 className='text-center text-2xl underline mb-3'>Register as Doctor</h1>
            <input type="text" placeholder="Enter Your Name" className='border border-gray-300 py-2 rounded-md px-2 '/>
            <input type="text" placeholder="Enter Your Email" className='border border-gray-300 py-2 rounded-md px-2 '/>
            <input type="text" placeholder="Password" className='border border-gray-300 py-2 rounded-md px-2 '/>
            <input type="number" placeholder="Enter you YOE" className='border border-gray-300 py-2 rounded-md px-2 '/>

            <select className='border border-gray-400 py-3 px-1'>
                <option>Select Speciality: </option>
                <option value="car">Cardiologist</option>
                <option value="gen">General Medicine</option>
                <option value="ortho">Orthopedic</option>
                <option value="psyc">Psychatrist</option>
                <option value="renal">Renal</option>
            </select>

            <div>
                <label htmlFor="dob" className='text-sm block mb-2'>Upload your Official Medical Certification: <span className='text-red-500'>*</span> </label>
                <input type="file" id='dob' placeholder="Password" className='border border-gray-300 py-2 rounded-md px-2 w-full'/>
            </div>
            <span className='text-md italic'>Already have an account? <span className='text-blue-500'>
                <Link to={"/login"}>Login</Link>
            </span></span>
               <button className='border border-purple-400 py-2 hover:bg-purple-300 cursor-pointer rounded-md '>Register</button>

        </form>
        )}
       

    </div>
  )
}
