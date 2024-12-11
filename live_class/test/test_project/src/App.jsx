import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [darkmode, setDarkmode] = useState(false)

  return (
    <>
    <button onClick={() => setDarkmode(!darkmode)} className='p-1 ml-10 mt-5 mb-5 px-3 text-gray-300 rounded-md bg-gray-600'>Dark</button>
      <form>
        <div className={`${darkmode ? "dark": ""}`}>
          <div className='m-3 p-4  dark:bg-gray-800 rounded-lg'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
              <input type="text" placeholder='Name' className='m-2 p-1 mt-2 border border-gray-700 rounded-md hover:border-red-300 hover:shadow-lg focus:ring-red-500 focus:ring-1 outline-none'/> 
              <input type="text" placeholder='email' className='m-2 p-1 mt-2 border border-gray-700 rounded-md hover:border-red-300 hover:shadow-lg focus:ring-red-500 focus:ring-1 outline-none'/>
              <input type="text" placeholder='password' className='m-2 p-1 mt-2 border border-gray-700 rounded-md hover:border-red-300 hover:shadow-lg focus:ring-red-500 focus:ring-1 outline-none'/> 
              <input type="text" placeholder='confirm password' className='m-2 p-1 mt-2 border border-gray-700 rounded-md hover:border-red-300 hover:shadow-lg focus:ring-red-500 focus:ring-1 outline-none'/>
            </div>
            <div className='sm:grid sm:grid-cols-1'>
              <button className=' ml-2 p-2 bg-green-400 p-1 hover:font-mono hover:bg-green-600 hover:shadow-lg rounded-md'>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default App
