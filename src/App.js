import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import { Footer, Header, MainSection } from './components'
import { GlobalContainer } from './globalStyles'

const App = () => {
  return (
    <>
      <Router>
        <GlobalContainer></GlobalContainer>
        <Header></Header>
        <MainSection></MainSection>
        <Footer></Footer>
      </Router>
      </>
  )
}

export default App
