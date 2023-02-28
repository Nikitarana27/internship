import React , {useState} from 'react';
import {Employees} from './Empolyees';

export default function Header() {
const [input,setInput]=useState(" ");
const search_data =(input_value) =>{
  // console.log("hey");
  var results = [];



for(var i=0; i<Employees.length; i++) {
  for(key in Employees[i]) {
    if(Employees[i][key].indexOf(input_value)!=-1) {
      results.push(Employees[i]);
    }
  }
}
}

  return (
    <div>
      <nav className="navbar bg-dark" >
        <div className="container-fluid" >
          <a href="\" className="navbar-brand" style={{color: "white"}}>Employee Details</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" value={input} placeholder="Search" aria-label="Search" onChange={(e)=>setInput(e.target.value)}/>
              <button className="btn btn-outline-success" type="submit" onClick={search_data(input)}>Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}
