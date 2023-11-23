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
import { CompA } from './CompA'
import { UserInfoContextProvider } from './UserInfoContextProvider'
import MyThemeProvider, { MyThemeContext } from './MyThemeContextProvider'
import { AppRoutes } from './AppRoutes'
import { NavBar } from '../../../Module7Sample/ReactModule7/src/NavBar'
function App() {
  

  return (
    <>
    <UserInfoContextProvider>
    <NavBar></NavBar>
    <AppRoutes></AppRoutes>
    </UserInfoContextProvider>
    {/*<UserInfoContextProvider>
      <MyThemeProvider>
        <CompA></CompA>
      </MyThemeProvider>
  </UserInfoContextProvider>*/}
    
    {/*<SubscribeForm></SubscribeForm>
    <PostListReducer></PostListReducer>
    <ReducerCounter></ReducerCounter>
    <VideoPlayer></VideoPlayer>
  <RefCounter></RefCounter>*/}
      {/*<Clock></Clock>*/}
      {/*<UseEffectDemo></UseEffectDemo>*/}
      {/*<ClockDisplay></ClockDisplay>
      <ActivityFinder></ActivityFinder>*/}
    </>
  )
}

export default App
