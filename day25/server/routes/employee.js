import express from "express";
import {getEmployees,createEmployee,getEmployee,deleteEmployee,updateEmployee} from '../controllers/Employee.js';

const router = express.Router();

router.get("/employees",getEmployees);
router.post("/employee",createEmployee);
router.get("/employee/:id",getEmployee);
router.delete("/deleteEmployee/:id",deleteEmployee);
router.put("/updateEmployee/:id",updateEmployee);


export default router;