
import Header from './components/Header'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {

const itemObj = {
  name : 'Hasan',
  age : 23,
  city : 'Khulna'
}
const buttonClick = (e)=> {
  e.preventDefault();
  alert("Form submit but not reload");
}
  return (
    <>
      <Header/>
      <Hero/>
      <ContactForm click = {buttonClick} item = {itemObj}/>
      <Footer/>
    </>
  )
}

export default App
