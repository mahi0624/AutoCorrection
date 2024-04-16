import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoCorrection from './AutoCorrection'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1>React Auto Correction App</h1>
      <AutoCorrection/>
    </>
  )
}

export default App
