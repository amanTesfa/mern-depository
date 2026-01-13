import express from "express";
import { deleteNotes, getNotes, getNotesById, saveNotes, updateNotes } from "../controller/notesController.js"
const routes=express.Router();
routes.get("/",getNotes)
routes.post("/",saveNotes)
routes.put("/",updateNotes)
routes.delete("/:id",deleteNotes)
routes.get("/:id",getNotesById)
export default routes;