import express from "express";
import Note from "../models/Note.js"
export async function getNotes(req,res){
    try{
    const notes=await Note.find();
    res.status(200).json(notes)
    }catch(err){
    console.log(err.message)
    res.status(500)
    }
    
}
export async function saveNotes (req,res){
    try{
        console.log(req.body)
const data=req.body;
const note=new Note({content:data.content,title:data.title});
const newNote=await note.save();
res.status(201).json(newNote)
    }catch(ex){
res.status(500).json(ex.message)
    }
}
export async function updateNotes(req,res){
 try{
    const data=req.body;
const note=await Note.findByIdAndUpdate(data._id, {content:data.content,title:data.title},{new :true});
res.status(200).json(note)
    }catch(ex){
res.status(500).json(ex.message)
    }
}
export async function deleteNotes(req,res){
    try{
const del= await Note.findByIdAndDelete(req.params.id)
   if(!del)
        return res.status(400).json({message:"Note Deleted!"})
    res.status(204).json({message:"Deleted successfully!"})
    }catch{
            res.status(500).json({message:"Note Deleted!"})
    }

}