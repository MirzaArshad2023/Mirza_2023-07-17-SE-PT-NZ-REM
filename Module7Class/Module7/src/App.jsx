import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectDemo from './UseEffectDemo'
import Clock from './Clock'
import ClockDisplay from './ClockDisplay'
import ActivityFinder from './ActivityFinder'

function App() {
  

  return (
    <>
      {/*<Clock></Clock>*/}
      {/*<UseEffectDemo></UseEffectDemo>*/}
      <ClockDisplay></ClockDisplay>
      <ActivityFinder></ActivityFinder>
    </>
  )
}

export default App
