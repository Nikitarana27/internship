import React , {useState} from 'react';
// import {Employees} from './Empolyees';

export default function Header() {
const [input,setInput]=useState(" ");
// const search_data =(input_value) =>{
//   // console.log("hey");
//   var results = [];



// for(var i=0; i<Employees.length; i++) {
//   for(key in Employees[i]) {
//     if(Employees[i][key].indexOf(input_value)!=-1) {
//       results.push(Employees[i]);
//     }
//   }
// }
// }

  return (
    <div>
      <nav className="navbar bg-dark" >
        <div className="container-fluid" >
          <a href="\" className="navbar-brand" style={{color: "white"}}>Employee Details</a>
        </div>
      </nav>
    </div>
  )
}
