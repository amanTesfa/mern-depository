import axios from 'axios';
import { PlusIcon } from 'lucide-react'
import {React,useEffect,useState,useRef} from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
        
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='flex justify-between items-center'>
           <h1 className='text-3xl font-bold text-primary font-mono '> Think Board</h1>
        <div className='flex justify-end gap-4'>
            <Link to={"/addNotes"} className='btn btn-primary'>
            <PlusIcon className='size-5' />
            <span >New Note</span>
            </Link>
        </div>
      </div>
      </div>
    </header>
  )
}

export default NavBar
