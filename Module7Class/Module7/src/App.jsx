import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectDemo from './UseEffectDemo'
import Clock from './Clock'
import ClockDisplay from './ClockDisplay'
import ActivityFinder from './ActivityFinder'
import RefCounter from './RefCounter'
import VideoPlayer from './VideoPlayer'
import ReducerCounter from './ReducerCounter'
import PostListReducer from './PostsListsReducer'
import SubscribeForm from './SubscribeForm'

function App() {
  

  return (
    <>
    <SubscribeForm></SubscribeForm>
    <PostListReducer></PostListReducer>
    <ReducerCounter></ReducerCounter>
    <VideoPlayer></VideoPlayer>
    <RefCounter></RefCounter>
      {/*<Clock></Clock>*/}
      {/*<UseEffectDemo></UseEffectDemo>*/}
      {/*<ClockDisplay></ClockDisplay>
      <ActivityFinder></ActivityFinder>*/}
    </>
  )
}

export default App
