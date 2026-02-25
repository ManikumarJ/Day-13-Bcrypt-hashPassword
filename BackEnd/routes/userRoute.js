import express from "express";
import { createData } from "../controllers/dataControl.js";

const studentRoute = express.Router()


studentRoute.post('/create',createData)


export default studentRoute

//  http://localhost:5000/api/UserDetails/create
//  http://localhost:5000//api/UserDetails
