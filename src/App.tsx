import './App.css'
import { Features, Hero, Introduction, Navbar, HowItWorks, Footer } from './components'

function App() {
  

  return (
    <>
    <div className='fixed top-1 w-full'>
    <Navbar/>
    </div>
    <div>
      <Hero/>
    </div>
    <div>
      <Introduction/>
    </div>
    <div>
      <Features/>
    </div>
    <div>
      <HowItWorks/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
