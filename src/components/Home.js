import React, { Fragment, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Empolyees';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


export default function Home() {

    //for pagination
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 5;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = Employees.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Employees.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Employees.length;
        setItemOffset(newOffset);
    };


    //for navigation
    let history = useNavigate();

    const handleDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);
        history('/');
    }

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
                <div style={{ margin: "7rem" }}>
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

                                Employees && Employees.length > 0
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
                                                <td>{item.Skills}</td>
                                                <td>{item.About}</td>

                                                <td>
                                                    <Link to={`/edit`}>
                                                        <Button onClick={() => handleEdit(item.id, item.Firstname, item.Lastname, item.Email, item.Phone, item.Gender, item.Department, item.Skills, item.About)} className="btn-success">Edit</Button>
                                                    </Link>&nbsp;&nbsp;
                                                    <Button onClick={() => handleDelete(item.id)} className=" btn-danger ">Delete</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    "No Data available"
                            }
                        </tbody>
                    </Table>
                    {/* for pagination */}

                    {/* <ReactPaginate className="pagination border border-gray justify-content-center p-3" */}

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
            </Fragment>
        </div>
    )
}
