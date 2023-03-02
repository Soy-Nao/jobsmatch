import Benefits from "./components/Benefits"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Plans from "./components/Plans"

function App() {
  return ( 
    <div className="flex flex-col items-center justify-center ">
      <Header />
      <Hero />
      <Benefits />
      <Plans />
      <Footer />
    </div>
  )
}

export default App
