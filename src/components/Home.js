import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Empolyees';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {

    let history = useNavigate();

    const handleDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);
        history('/');
    }

    const handleEdit = (id , name ,age) =>{
        localStorage.setItem('Id',id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
    }

    return (
        <div>
            <Fragment>
                <div style={{ margin: "10rem" }}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                Employees && Employees.length > 0
                                    ?
                                    Employees.map((item) => {
                                        return (
                                            <tr>
                                                <td>{item.Name}</td>
                                                <td>{item.Age}</td>
                                                <td>
                                                    <Link to={`/edit`}>
                                                        <Button onClick={() => handleEdit(item.id ,item.Name , item.Age)}>Edit</Button>&nbsp;
                                                    </Link>
                                                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    "No Data available"
                            }
                        </tbody>
                    </Table>
                    <br></br>
                    <Link className='d-grid gap-2' to="/create">
                        <Button size='lg'>create</Button>
                    </Link>
                </div>
            </Fragment>
        </div>
    )
}
