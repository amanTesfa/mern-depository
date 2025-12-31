import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Create from './pages/create'
import NoteDetail from './pages/noteDetail'
import  { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/AddNotes' element={<Create />} />
      <Route path='/NoteDetail' element={<NoteDetail />} />
    </Routes>
    </div>
  )
}

export default App
