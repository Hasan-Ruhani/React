import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form className='ml-5 p-4'>
        <div>
          <input type="text" placeholder='Name' className='m-2 p-1 mt-2 border border-gray-700 rounded-md hover:border-red-300 focus:ring-red-500 focus:ring-1 outline-none'/> 
          <input type="text" placeholder='email' className='m-2 p-1 mt-2 border border-gray-700 rounded-md hover:border-red-300 focus:ring-red-500 focus:ring-1 outline-none'/> <br/>
          <input type="text" placeholder='password' className='m-2 p-1 mt-2 border border-gray-700 rounded-md hover:border-red-300 focus:ring-red-500 focus:ring-1 outline-none'/> 
          <input type="text" placeholder='confirm password' className='m-2 p-1 mt-2 border border-gray-700 rounded-md hover:border-red-300 focus:ring-red-500 focus:ring-1 outline-none'/> <br/>
          <button className='ml-2 bg-green-400 p-1 hover:font-mono hover:bg-green-600 rounded-md'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default App
