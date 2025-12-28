import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/homePages'
import CreatePage from './pages/createPage'
import NoteDetailPage from './pages/noteDetailPage'
import  { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<HomePages />}/>
      <Route path='/AddNotes' element={<CreatePage />} />
      <Route path='/NoteDetail' element={<NoteDetailPage />} />
    </Routes>
    </div>
  )
}

export default App
