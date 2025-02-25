import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import Contact from './Components/Contact'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Contact />
      <Form />

    </>
  )
}

export default App
