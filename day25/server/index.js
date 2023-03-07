import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import employeeRoutes from './routes/employee.js';
import projectRoutes from './routes/project.js';
import getEmployeeDetailsRoutes from './routes/combine.js';
// import users from './json/users.json' assert { type : "json" };

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json({extended: true}));
app.use(bodyParser.json());
app.use("/",employeeRoutes);
app.use("/",projectRoutes);
app.use("/",getEmployeeDetailsRoutes);


// app.get("/users/:id", (req,res)=>{
//     console.log(parseInt(req.params.id));
//     let emp = users.find(x => x.id === parseInt(req.params.id));
//     //  let emp = users.find(x => x.id === parseInt(req.params.id));
//     res.send(emp);
//     console.log(emp);
// });
// app.get("/users", (req,res)=>{
//     console.log(req.param.id);
//     res.send(users);
// });

app.get("/",(req,res)=>{
    res.send("hello world");
})
app.all("*",(req,res) => {
    res.send("Route doesn't exixt");
})

app.listen(PORT ,()=>{
    console.log(`server is started on ${PORT}`)
} )