import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { LucideAArrowDown,ArrowLeftIcon } from 'lucide-react'

const noteDetail = () => {
  const {Id}=useParams()
  const [targetNote, setTargetNote]=useState(null)
  console.log("id",Id)
  useEffect( ()=>{
    const fetchNotes= async()=>{
 try {
      const nt= await axios.get(`http://localhost:5001/api/notes/${Id}`)
    setTargetNote(nt.data)
    } catch (error) {
      toast.error("Unable to retrive the note")
    }
    }
   fetchNotes()
  },[Id])
  return (
  <div className='min-h-screen bg-base-200' >
      <div className='container pt-4'>
        <div className='mx-auto max-w-2xl min-w-40'>
           <Link to={"/"} className='btn btn-ghost p-3'><ArrowLeftIcon className='size-5'/> Go back to note</Link>
        </div>
        <div data-theme="coffee" class="card bg-base-100 max-w-2xl min-w-40 shadow-sm mx-auto mt-10">
        <div class="card-body">
          <h2 class="card-title">Update Note</h2>
          <form >
          <div className='card-body'>
            <div class="form-control mb-3 flex flex-col md:flex-row gap-3">
              <label className='min-w-20 font-bold'>
                <span class="label-text">Title</span> <span class="text-red-500">*</span>
              </label>
               <input type="text" placeholder="Note Title" class="input input-bordered w-9/12" value={targetNote?.title}  />
            </div>
            <div class="form-control mb-3 flex flex-col md:flex-row gap-3">
              <label className='min-w-20 font-bold'>
                <span class="label-text ">Content</span> <span class="text-red-500">*</span>
              </label>
               <textarea  placeholder="Note Content" class="input input-bordered w-9/12" value={targetNote?.content}  rows={5} ></textarea>
            </div>

          </div>
           <div class="card-actions justify-end">
            <button class="btn btn-primary" type='submit' >Update</button>
          </div>
          </form>
        </div>
      </div>
        </div>
    </div>
  )
}

export default noteDetail
