import axios from 'axios'
import { ArrowLeftIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'

const create = () => {
  const  [title, setTitle] = React.useState("")
  const  [content, setContent] = React.useState("")
  const [loading, setLoading] = React.useState(false) 
  const [isUpdate,setIsUpdate]=React.useState(false)
  const {_id}=useParams();
  useEffect(()=>{
      if(_id){
      setIsUpdate(true);
      const fetchNotes= async()=>{
         try {
      const nt= await axios.get(`http://localhost:5001/api/notes/${_id}`)
      setTitle(nt.data.title)
      setContent(nt.data.content)
    } catch (error) {
      toast.error("Unable to retrive the note")
    }
    }
   fetchNotes()
  } 
  },[_id])
   const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
 if (!title?.trim()) {
    toast.error("Please fill the Title field");
    return;
  }

  if (!content?.trim()) {
    toast.error("Please fill the Content field");
    return;
  }
    setLoading(true);
    try {
      if(_id){
const up= await axios.put("http://localhost:5001/api/notes",{
        _id,
        title,
        content     
    })
      }else{
const sa= await axios.post("http://localhost:5001/api/notes",{
        title,
        content     
    })
      }
      if(_id)
        {toast.success("Note updated successfully")}
      else
        {toast.success("Note created successfully")}
    setTitle("")
    setContent("")
    setIsUpdate(null) 
    setLoading(false) 
    navigate("/")
  }catch (error) {
    if(_id){
        toast.error("unable to update note "+ error.message)
    }
    else{
      toast.error("unable to create note "+ error.message)
    }
    setLoading(false) 
    }
  }
  return (
    <div className='min-h-screen bg-base-200' >
      <div className='container pt-4'>
        <div className='mx-auto max-w-2xl min-w-40'>
           <Link to={"/"} className='btn btn-ghost p-3'><ArrowLeftIcon className='size-5'/> Go back to note</Link>
        </div>
        <div data-theme="coffee" className="card bg-base-100 max-w-2xl min-w-40 shadow-sm mx-auto mt-10">
        <div className="card-body">
          <h2 className="card-title">{isUpdate?"Update Note":"New Note"}</h2>
          <form onSubmit={handleSubmit}>
          <div className='card-body'>
            <div className="form-control mb-3 flex flex-col md:flex-row gap-3">
              <label className='min-w-20 font-bold'>
                <span className="label-text">Title</span> <span className="text-red-500">*</span>
              </label>
               <input type="text" placeholder="Note Title" className="input input-bordered w-9/12" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control mb-3 flex flex-col md:flex-row gap-3">
              <label className='min-w-20 font-bold'>
                <span className="label-text ">Content</span> <span className="text-red-500">*</span>
              </label>
               <textarea  placeholder="Note Content" className="input input-bordered w-9/12" value={content} onChange={(e) => setContent(e.target.value)} rows={5} ></textarea>
            </div>

          </div>
           <div className="card-actions justify-end">
            <button className="btn btn-primary" type='submit' disabled={loading}>{isUpdate&& loading?"Updating ...":!isUpdate&& loading?"Saving ...":isUpdate?"Update":"Save"}</button>
          </div>
          </form>
        </div>
      </div>
        </div>
    </div>
  )
}

export default create
