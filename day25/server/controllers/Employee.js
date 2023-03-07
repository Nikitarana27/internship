// import { v4 as uuid } from 'uuid';
// import employee from '../json/employees.json' assert {type : "json"};

let employee = [];


export const getEmployees = (req, res) => {
    res.send(employee);
}

let n = 5;
export const createEmployee = (req, res) => {
    const user = req.body;
    const increment = () => {
        return ++n;
    }
    employee.push({...user, id: increment()});
    res.send("employee added successfully");
}

export const getEmployee = (req,res) => {
    // console.log(req.params.id);
    const emp = employee.filter((user) => user.id === parseInt(req.params.id));
    res.send(emp);
}

export const deleteEmployee =(req,res) =>{
    employee = employee.filter((user) => user.id !== parseInt(req.params.id));
    res.send("employee deleted successfully");
}

export const updateEmployee = (req, res) => {
    const user = employee.find((user) => user.id === parseInt(req.params.id));
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.projectId = req.body.projectId
res.send("user updated");
};

