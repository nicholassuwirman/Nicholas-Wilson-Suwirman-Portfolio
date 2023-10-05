import { useState } from 'react'
import './App.css'

import Hero from './containers/hero/Hero'
import About from './containers/about/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default App
