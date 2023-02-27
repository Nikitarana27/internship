import React, {useState,useEffect} from 'react';
import {Button,Form} from 'react-bootstrap';
import Employees from './Empolyees';
// import {v4 as uuid} from "uuid";
import {Link , useNavigate} from 'react-router-dom';

export default function Edit() {

    const[name, setName]= useState('');
    const[age, setAge]= useState('');
    const[id, setId]= useState('');

    let history = useNavigate(); 

    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit =(e) =>{
        e.preventDefault();

        let a=Employees[index];
        a.Name = name;
        a.Age = age;


        history("/");
    }

    useEffect (()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
    },[]);

  return (
    <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className = "mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter name" required value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className = "mb-3" controlId="formAge">
                <Form.Control type="text" placeholder="Enter age" required value={age} onChange={(e) => setAge(e.target.value)}></Form.Control>
            </Form.Group>
        <Button type='submit' onClick={(e) => handleSubmit(e)}>Update</Button>
        </Form>
    </div>
  )
}

