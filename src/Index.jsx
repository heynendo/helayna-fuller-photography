import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import './styles/index.css'
import { AnimatePresence, motion } from "motion/react"
import { useRef } from "react"


function PageWrapper({ children }) {

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.5, 
        duration: 0.5, 
        ease: "easeInOut" 
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20,   
      transition: { duration: 0.5, ease: "easeInOut" }
    },
  }

  const pageTransition = {
    delay: 0.25,
    duration: 0.5,
    ease: "easeInOut",
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{ position: "absolute", width: "100%" }}
    >
      {children}
    </motion.div>
  )
}

function AppRoutes() {
  const location = useLocation()

  const isPortfolio = location.pathname === "/portfolio"

  return (
    <>
      {isPortfolio ? '' : <Header />}
      <AnimatePresence mode="sync" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path='/about' element={<PageWrapper><About /></PageWrapper>} />
          <Route path='/contact' element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path='/portfolio' element={<PageWrapper><Portfolio /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)