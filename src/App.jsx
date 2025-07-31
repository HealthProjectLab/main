import React from 'react'
import { Link } from 'react-router'

export default function App() {
  return (
    <div>
      <nav className='p-10 flex justify-between'>
        <h1 className='text-2xl font-bold cursor-pointer hover:underline'>🧬 HealthHelp</h1>
        <div className='flex gap-6 text-lg'>
          <button className='btn'><Link to={"/login"}>Login</Link></button>
          <button className='btn'><Link to={"/register"}>Register</Link></button>
        </div>
      </nav>

      <div className='md:max-w-2xl lg:max-w-5xl mx-auto mt-5 mb-20'>
        <h1 className='text-center text-5xl font-semibold italic'>Find The Best Doctor !</h1>
        <img src="/illus.svg" className='mt-10 w-[70%] mx-auto'  />
         <div>
          <h1 className='text-2xl mt-20 underline font-bold'>How Does This Work?</h1>
          <p className='text-xl mt-2'><pre>           </pre>This system supports symptom input, intelligent doctor matching, appointment booking (online/offline), prescription explanation, medication reminders, symptom history, anonymous consultation, and emergency mode.</p>
          <p className='text-xl mt-2'><pre>           </pre>A web application that allows users to input symptoms and get matched with suitable doctors, view doctor profiles, book appointments, and manage health-related tasks through AI-assisted features. Users enter symptoms via text. System recommends relevant specialists/doctors using AI.Quick connect to emergency services or nearest available doctor
</p>
        </div>
      </div>

     
    </div>
  )
}
