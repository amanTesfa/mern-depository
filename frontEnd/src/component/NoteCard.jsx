
import React from 'react'
import { Link } from 'react-router-dom'
import noteDetail from '../pages/noteDetail'
import { CirclePlus, Trash2 } from 'lucide-react'


const NoteCard = ({note}) => {
  return (
    <Link to={`noteDetail`}  className='text-primary'>
    
    <div data-theme="coffee" className="card bg-base-100 w-96 shadow-2xl transform transition-transform  hover:-translate-y-3 hover:shadow-lg border-t-4 border-green-300">
  <div className="card-body">
    <h1 className="card-title">{note.title}</h1>
    <p>{note.content}</p>
    <span className="text-sm ">
{note.createdAt}
    </span>
    <div className="card-actions justify-center p-6">
        <button className='btn btn-sm btn-outline btn-primary'><CirclePlus className='w-5'/>Add</button>
        <button className='btn btn-sm btn-outline btn-danger text-red-500 hover:bg-red-500'><Trash2 className='w-5'/>Delete</button>
      
  
    </div>
  </div>
</div>
    
    </Link>

  )
}

export default NoteCard
