import React, { Fragment, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Employees from './Empolyees';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


export default function Home() {
    //employee data
    const [emps, setEmps] = useState(Employees);
    //employee data after search
    const [employees, setEmployees] = useState(Employees);


    //for pagination
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 5;
    const endOffset = itemOffset + itemsPerPage;
    var currentItems = employees.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(employees.length / itemsPerPage);

    //taking input for search
    const [input, setInput] = useState('');

    //for pagination
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % employees.length;
        setItemOffset(newOffset);
    };


    //for navigation
    let history = useNavigate();

    //deletion 
    const handleDelete = (id) => {
        var index = emps.map(function (e) {
            return e.id
        }).indexOf(id);

        employees.splice(index, 1);
        history('/');
    }

    //search
    const handleSearch = () => {
        if (input.length === 0) { alert("please enter something to search"); }
        else {
            const emp = []
            for (var i = 0; i < emps.length; i++) {
                for (var j = 0; j < emps[i].Skills.length; j++) {
                    if (emps[i].Skills[j].toLowerCase().includes(input.toLowerCase())) {
                        emp.push(emps[i]);
                    }
                }

            }
            setEmployees(emp);
        }
    }
    // console.log(emp)
    // if(emp.length === 0){
    //     setEmployees(Employees);
    // }
    // else{
    // setEmployees(emp);
    // }
    // console.log(employees);

    //edit
    const handleEdit = (id, firstname, lastname, email, phone, gender, department, skills, about) => {
        localStorage.setItem('id', id);
        localStorage.setItem('Firstname', firstname);
        localStorage.setItem('Lastname', lastname);
        localStorage.setItem('Email', email);
        localStorage.setItem('Phone', phone);
        localStorage.setItem('Gender', gender);
        localStorage.setItem('Department', department);
        localStorage.setItem('Skills', skills);
        localStorage.setItem('About', about);
    }

    return (
        <div>
            <Fragment>

                <div style={{ margin: "5rem" }}>
                    <div style={{ marginBottom: "4rem", width: "20rem" }}>
                        <form className="d-flex" role="search">
                            <input className="form-control me-4 " type="search" value={input} placeholder="Search" aria-label="Search" onChange={(e) => setInput(e.target.value)} />
                            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
                        </form>
                    </div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Gender</th>
                                <th>Department</th>
                                <th>Skills</th>
                                <th>About</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees && employees.length > 0
                                    ?
                                    currentItems.map((item) => {
                                        return (
                                            <tr>
                                                <td>{item.Firstname}</td>
                                                <td>{item.Lastname}</td>
                                                <td>{item.Email}</td>
                                                <td>{item.Phone}</td>
                                                <td>{item.Gender}</td>
                                                <td>{item.Department}</td>
                                                <td>{item.Skills.join(",")}</td>
                                                <td>{item.About}</td>

                                                <td style={{display: "flex"}}>
                                                    <Link to={`/edit`}>
                                                        <Button onClick={() => handleEdit(item.id, item.Firstname, item.Lastname, item.Email, item.Phone, item.Gender, item.Department, item.Skills, item.About)} className="btn-success btn-sm">Edit</Button>
                                                    </Link>&nbsp;&nbsp;
                                                    <Button onClick={() => handleDelete(item.id)} className=" btn-danger btn-sm">Delete</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    "No Data available"
                            }
                        </tbody>
                    </Table>
                
                    <div style={{ display: "flex", justifyContent: "center" }}>

                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                            containerClassName={"pagination"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            pageClassName={"page-item"}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            activeLinkClassName={'active'}
                        />
                    </div>




                    <div className='btn'>

                        <Link className='d-grid gap-2' to="/create" style={{ textDecoration: "none" }}>
                            <Button size='lg' >Add Employee</Button>
                        </Link>
                    </div>
                </div>
                <div className='color-gray fs-5 mb-2'>
                    Total Employees according to searching criteria are {employees.length}
                </div>
                <div className='color-gray fs-5 mb-2'>
                    Total Employees are {emps.length}
                </div>
            </Fragment>
        </div>
    )
}
