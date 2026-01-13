
import React from 'react'
import { Link } from 'react-router-dom'
import noteDetail from '../pages/noteDetail'
import { CirclePlus, EditIcon, Trash2 } from 'lucide-react'
import { ShortDateFormat } from "../lib/utils"
import axios from 'axios'
import toast from 'react-hot-toast'


const NoteCard = ({note, onDelete}) => {
  const [isDeleting, setIsDeleting] = React.useState(false)
  const handleDelete= async(ID)=>{
confirmDelete (async ()=>{
    console.log("delete note", ID)
    setIsDeleting(true);
    if (!ID) {
      toast.error("Unable to delete the note");
      return;
    }
    const deletePromise = axios.delete(`http://localhost:5001/api/notes/${ID}`);
    toast.promise(
    deletePromise,
    {
      pending: 'Deleting note...',
      success: 'Deleted successfully!',
      error: 'Error deleting note'
    }
  );
  await deletePromise;
   try {
        setIsDeleting(false);
      onDelete(ID);
      } catch (error) {
        setIsDeleting(false);
      }
      })
}

const confirmDelete = (onConfirm) => {
  toast(
    <div>
      <h1>Would you like to delete this note?</h1>
      <button className='btn btn-sm btn-primary m-1' onClick={() => { onConfirm(); toast.dismiss(); }}>Yes</button>
      <button className='btn btn-sm btn-danger m-1' onClick={() => toast.dismiss()}>No</button>
    </div>,
    { autoClose: false }
  );
};

  return (
    <div data-theme="coffee" className="card bg-base-100 w-96 shadow-2xl transform transition-transform  hover:-translate-y-3 hover:shadow-lg border-t-4 border-green-300">
  <div className="card-body">
    <h1 className="card-title">{note.title}</h1>
    <p>{note.content}</p>
    <span className="text-sm ">
{ShortDateFormat(note.createdAt)}
    </span>
    <div className="card-actions justify-center p-6">
        <Link className='btn btn-sm btn-outline btn-primary' to={`/AddNotes/${note._id}`}><EditIcon className='w-5'/>Edit</Link>
        <button onClick={()=>handleDelete(note._id)} className='btn btn-sm btn-outline btn-danger text-red-500 hover:bg-red-500'><Trash2 className='w-5'/>{isDeleting? "Deleting ... ":"Delete"}</button>
    </div>
  </div>
</div>


  )
}

export default NoteCard
