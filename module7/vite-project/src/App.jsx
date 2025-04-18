import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Clock } from '../component/Clock'
import ClockDisplay from '../component/ClockDisplay'
import { ActivityFinder } from '../component/ActivityFinder'
import { BitcoinRates } from '../component/BitcoinRates'
import RefCounter from '../component/RefCounter'
import VideoPlayer from '../component/VideoPlayer'
import ReducerCounter from '../component/ReduceCounter'
import PostListReducer from '../component/PostListReducer'
import SubscribeForm from '../component/SubscribeForm'
import { UserProvider } from '../context/userContext'
import LoginForm from '../component/Loginform'
import MyThemeProvider from '../context/ThemeContext'
import { EmojiProvider } from '../context/EmojiContext'
import CustomCard from '../component/CustomCard'
import MUIDialog from '../component/MUIDialog'

// import { Emoji } from '../component/Emoji'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
<MUIDialog />
<CustomCard />

      <UserProvider>
        <EmojiProvider>
        <MyThemeProvider>
        <LoginForm />
      {/* <SubscribeForm /> */}
      {/* <PostListReducer /> */}
      <ReducerCounter />
      {/* <VideoPlayer /> */}
      {/* <Emoji /> */}
      <BitcoinRates />
      <RefCounter />
      <ActivityFinder />
      {/* <ClockDisplay /> */}
      </MyThemeProvider>
      </EmojiProvider>
      </UserProvider>

      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

    </>
  )
}

export default App
