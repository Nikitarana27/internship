import project from '../json/project.json' assert {type : "json"};
import employee from '../json/employees.json' assert {type : "json"};

export const getEmployeeDetails = (req,res) => {
        let employeeDetails = employee.map((emp) => {
          let projects = project.filter((pro) => {
            return pro.id == emp.projectId;
          });
          return { ...emp,projects};
        });
        res.json(employeeDetails);
      };
    // const EmployeeDetails = employee()
    // res.send(EmployeeDetails);
