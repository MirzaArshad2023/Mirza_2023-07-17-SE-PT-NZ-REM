import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseEffectDemo } from './UseEffectDemo'
import RefCounter from './RefCounter'
import VideoPlayer from './VideoPlayer'
import { ReducerCounter } from './ReducerCounter'
import PostListReducer from './PostListReducer'
import SubscribeForm from './SubscribeForm'
import { TopRootNestedTree } from './TopRootNestedTree'
import { UserInfoContextProvider } from './UserInfoContextProvider'
import {Routes, Route} from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { NavBar } from './NavBar'
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from './themes/tealTheme'

function App() {
 
  
  return (
    <>
    <ThemeProvider theme={tealTheme}>{/* App.jsx components */}
      <NavBar></NavBar>
      <AppRoutes></AppRoutes>
    </ThemeProvider>
    {/*<UserInfoContextProvider>
      <TopRootNestedTree></TopRootNestedTree>
    </UserInfoContextProvider>
    <SubscribeForm></SubscribeForm>
    <PostListReducer></PostListReducer>
    <ReducerCounter></ReducerCounter>
    <VideoPlayer></VideoPlayer>
    <RefCounter></RefCounter>
    <UseEffectDemo></UseEffectDemo>
  */}
    </>
  )
}

export default App
