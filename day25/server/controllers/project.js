// import project from '../json/project.json' assert {type : "json"};
let project = [];


export const getProjects = (req, res) => {
    res.send(project);
}

let n = 0;
export const createProject = (req, res) => {
    const user = req.body;
    const increment = () => {
        return ++n;
    }
    project.push({...user, id: increment()});
    res.send("employee added successfully");
}

export const getProject = (req,res) => {
    // console.log(req.params.id);
    const emp = project.filter((user) => user.id === parseInt(req.params.id));
    res.send(emp);
}

export const deleteProject =(req,res) =>{
    project = project.filter((user) => user.id !== parseInt(req.params.id));
    res.send("employee deleted successfully");
}

export const updateProject = (req, res) => {
    const user = project.find((user) => user.id === parseInt(req.params.id));
    user.projectName = req.body.projectName;
res.send("user updated");
};