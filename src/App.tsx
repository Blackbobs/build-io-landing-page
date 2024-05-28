import './App.css'
import { Features, Hero, Introduction, Navbar, HowItWorks, Benefits, Footer } from './components'

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
      <Benefits/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
