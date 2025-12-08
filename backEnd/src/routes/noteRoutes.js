import express from "express";
import { deleteNotes, getNotes, saveNotes, updateNotes } from "../controller/notesController.js"
const routes=express.Router();
routes.get("/",getNotes)
routes.post("/:id",saveNotes)
routes.put("/:id",updateNotes)
routes.delete("/:id",deleteNotes)
export default routes;