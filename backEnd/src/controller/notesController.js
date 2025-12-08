import express from "express";
export async function getNotes(req,res){
    res.status(200).send("You have got the messages!")
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