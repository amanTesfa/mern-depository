import express from "express";
import Notes from "../models/notes.js"
export async function getNotes(req,res){
    try{
    const notes=await Notes.find({});
    res.status(200).json(notes)
    }catch(err){
    console.log(err.message)
    res.status(500)
    }
    
}
export async function saveNotes (req,res){
    res.status(201).json({message:"Note saved successfully!"})
}
export async function updateNotes(req,res){
    res.status(201).json({message:"Note updated successfully!"})
}
export async function deleteNotes(req,res){
    res.status(204).json({message:"Note deleted successfully!"})
}