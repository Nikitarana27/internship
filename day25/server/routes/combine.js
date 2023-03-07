import express from "express";
import {getEmployeeDetails} from '../controllers/combine.js';

const router = express.Router();

router.get("/getemployeedetails",getEmployeeDetails);


export default router;