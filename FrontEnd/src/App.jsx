import { useState } from 'react'

import './App.css'
import { ChakraProvider , Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Chat from './Pages/Chat'


function App() {
  const [count, setCount] = useState(0)

  return (

 <div className='App' >
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/chat' element={<Chat/>}  ></Route>
    </Routes>
  </div>  

     
  )
}

export default App
