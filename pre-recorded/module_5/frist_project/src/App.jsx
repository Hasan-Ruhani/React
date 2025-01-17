import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
