import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import NavBar from '../component/navBar'
import axios from 'axios'
import NoteCard from '../component/NoteCard'
import { LoaderIcon } from 'lucide-react'
import api from '../lib/axios'

const home = () => {
  const [notesBuffer, setNotesBuffer]= useState([])
const [isLoading, setIsloading]=useState(true)
const handleDelete= async(ID)=>{
 setNotesBuffer( notesBuffer.filter((note)=>note._id !== ID))
}
useEffect(()=>{
    const fetchNotes= async ()=>{
try {
  console.log("URL is:",api.defaults)
  const res= await axios.get(api.defaults.baseURL.concat("notes"))
  setNotesBuffer(res.data)
  console.log('loaded data is:',res.data);
} catch (error) {
    console.log('Error is:',error.message);
}finally{
 setIsloading(false)
}
    }
    fetchNotes();
},[])
  return (
    <div  className='min-h-screen'>
      <NavBar />
<div className='max-w-7xl m-auto mx-auto p-4 mt-6'>
{
  isLoading &&  <div className='text-primary text-center'><LoaderIcon className='size-25 mx-auto' /></div>
}
{notesBuffer.length>0 && (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
{
  notesBuffer.map((notes)=> (
    
    <NoteCard  key={notes._id} note={notes} onDelete={handleDelete}/>

    // <div className='text-primary'>{notes.title}</div>
  ))
}
</div>)}
</div>
    </div>
  )
}

export default home
