import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './utils/Layout'
import MyNetwork from "./pages/MyNetwork"
import Jobs from './pages/Jobs'

const App = () => {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route path='/' index element={<Home/>}/>
    <Route path='/mynetwork/' element={<MyNetwork/>}/>
    <Route path='/jobs/' element={<Jobs/>}/>
  </Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App