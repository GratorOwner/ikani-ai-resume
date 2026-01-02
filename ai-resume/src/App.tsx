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
      <ChatWindow/>
      <WorkHistory/>
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
