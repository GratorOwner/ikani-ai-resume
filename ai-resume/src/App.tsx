import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkHistory from './components/WorkHistory'
import SplashLander from './components/SplashLander'
import { ChatWindow } from './components/chat/ChatWindow'
import SiteFooter from './components/SiteFooter'
import CurrentWork from './components/CurrentWork'

function App() {

  return (
    <>
      <SplashLander/>
      <WorkHistory/>
      <ChatWindow/>
      <CurrentWork/>
      <SiteFooter/>
      
      {/* <div style={{height: '100vh', width: '100vw', backgroundColor: 'blue'}}>
        <p>My blue background</p>
      </div>
      <div style={{height: '100vh', width: '100vw', backgroundColor: 'red'}}>
        <p>My red background</p>
      </div>
      <div style={{height: '100vh', width: '100vw', backgroundColor: 'green'}}>
        <p>My green background</p>
      </div>*/}
    </>
  )
}

export default App
