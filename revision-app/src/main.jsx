import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header/header.jsx'
import Landing from './Landing/Landing.jsx'
import About from './About/About.jsx'
import Test from "./Loan/Test.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Landing />
    <About />
    <Test />
  </StrictMode>,
)
