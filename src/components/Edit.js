import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Employees from './Empolyees';
// import {v4 as uuid} from "uuid";
import { useNavigate ,Link } from 'react-router-dom';

export default function Edit() {
    //using hooks
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [department, setDepartment] = useState('');
    const [skillarr, setSkillarr] = useState('');
    const [id, setId] = useState('');
    const [about, setAbout] = useState('');

    let history = useNavigate();


    //fetching id of selected employee
    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);


    //on submit
    const handleSubmit = (e) => {
        e.preventDefault();

        //fetching selected skills
        const ski = document.getElementsByName('skillarr');
        const skillss = [];
        for (var i = 0; i < ski.length; i++) {
            if (ski[i].checked === true) {
                skillss.push(ski[i].value);
            }
        }


        //required condition
        if (skillss.length === 0) {
            alert("select at least one skill !!!");
        }
        else {
            //checking email
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

                //checking phone number
                if (phone.length === 10 && isNaN(phone) === false) {

                    let a = Employees[index];
                    a.Firstname = firstname;
                    a.Lastname = lastname;
                    a.Email = email;
                    a.Phone = phone;
                    a.Department = department;
                    a.About = about;
                    a.Gender = gender;
                    a.Skills = skillss;
                    //links using navigation
                    history("/");
                    alert("You have successfully added the data");
                }
                //if phone number is in wrong formate
                else {
                    alert("please enter proper phone number");
                }
            }
            //if email is in wrong formate
            else {
                alert("invalid email! please enter email in proper formate");
            }
        }
    }

    //updating changes in employee details
    useEffect(() => {


        setFirstname(localStorage.getItem('Firstname'));
        setLastname(localStorage.getItem('Lastname'));
        setEmail(localStorage.getItem('Email'));
        setPhone(localStorage.getItem('Phone'));
        setGender(localStorage.getItem('Gender'));
        setDepartment(localStorage.getItem('Department'));
        setSkillarr(localStorage.getItem('Skills'));
        setAbout(localStorage.getItem('About'));
        setId(localStorage.getItem('id'));

    }, []);


    //required considion for gender
    const handleOnChange = (event) => {
        setGender(event.target.value);
        // console.log(event.target.value);
    }

    return (
        <div>
            <Form className="" style={{ margin: "5rem" }}>
                <Form.Group className="mb-1" controlId="formFname">
                    <label for="inputFname" className="form-label fw-bold">First Name</label>
                    <Form.Control type="text" placeholder="Enter first name" required value={firstname} onChange={(e) => setFirstname(e.target.value)} ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-1 " controlId="formLname">
                    <label for="inputLname" className="form-label fw-bold" >Last Name</label>
                    <Form.Control type="text" placeholder="Enter last name" required value={lastname} onChange={(e) => setLastname(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formEmail">
                    <label for="inputEmail4" className="form-label fw-bold">Email</label>
                    <Form.Control type="text" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formPhone">
                    <label for="inputPhone10" className="form-label fw-bold">Phone Number</label>
                    <Form.Control type="text" placeholder="Enter phone number" required value={phone} onChange={(e) => setPhone(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-1 " controlId="formGender" >
                    <label for="gender" className="form-label fw-bold">Gender &nbsp;</label><br></br>
                    <div className="border rounded p-2">
                        <input type="radio" value="male" id="male" name="gender" placeholder="male" checked={gender === "male"} onChange={handleOnChange}></input>
                        <label class="form-check-label" for="male">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                            type="radio" id="female"
                            value="female"
                            name="gender"
                            placeholder="female"
                            checked={gender === "female"}
                            onChange={handleOnChange}></input>
                        <label class="form-check-label" for="female">Female</label>
                    </div>
                </Form.Group>


                <Form.Group className="mb-1 " controlId="formDepartment">
                    <label for="inputState" className="form-label fw-bold">Department</label>
                    <select id="inputState" className="form-select" value={department} onChange={(e) => setDepartment(e.target.value)} >
                        <option selected>Choose...</option>
                        <option>PHP</option>
                        <option>.NET</option>
                        <option>SEO</option>
                        <option>Mobile</option>
                        <option>Admin/HR</option>
                        <option>Account</option>
                    </select>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formSkills">
                    <div className="col-md-12">
                        <label for="inputCity" className="form-label fw-bold">Skills</label>
                        <div className='form-control'>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox2"
                                    name="skillarr"
                                    defaultChecked={localStorage.getItem('Skills').includes("Programming")}
                                    value="Programming" />
                                <label class="form-check-label" for="inlineCheckbox1">Programming</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox2"
                                    name="skillarr"
                                    defaultChecked={localStorage.getItem('Skills').includes("Communication")}
                                    value="Communication" />
                                <label class="form-check-label" for="inlineCheckbox2">Communication</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox3"
                                    name="skillarr"
                                    defaultChecked={localStorage.getItem('Skills').includes("Finance")}
                                    value="Finance" />
                                <label class="form-check-label" for="inlineCheckbox3">Finance</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox4"
                                    name="skillarr"
                                    defaultChecked={localStorage.getItem('Skills').includes("Recruitment")}
                                    value="Recruitment" />
                                <label class="form-check-label" for="inlineCheckbox3">Recruitment</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox5"
                                    name="skillarr"
                                    defaultChecked={localStorage.getItem('Skills').includes("Optimization")}
                                    value="Optimization" />
                                <label class="form-check-label" for="inlineCheckbox3">Optimization</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox6"
                                    // name="skillarr" onChange={(e) => handleChange(e)}
                                    // onChange={handleSubmit}
                                    defaultChecked={localStorage.getItem('Skills').includes("App Development")}
                                    value="App Development" />
                                <label class="form-check-label" for="inlineCheckbox3">App Development</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox7"
                                    name="skillarr"
                                    defaultChecked={localStorage.getItem('Skills').includes("Frontend Technology")}
                                    value="Frontend Technology" />
                                <label class="form-check-label" for="inlineCheckbox3">Frontend Technology</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox8"
                                    name="skillarr"
                                    defaultChecked={localStorage.getItem('Skills').includes("Backend Technology")}
                                    value="Backend Technology" />
                                <label class="form-check-label" for="inlineCheckbox3">Backend Technology</label>
                            </div>
                        </div>
                    </div>
                </Form.Group>


                <Form.Group className="mb-1" controlId="formAbout">
                    <label for="about" className="form-label fw-bold">About</label>
                    <Form.Control type="text" placeholder="Enter about" required value={about} onChange={(e) => setAbout(e.target.value)}></Form.Control>
                </Form.Group>
                {/* <Button type='button' className='btn-success' onClick={(e) => handleSubmit(e)}>Update</Button> */}
                <div className='mt-4'>
                <Button type='button' className='btn-success ' onClick={(e) => handleSubmit(e)}>Submit</Button>&nbsp;
                <Link  to="/">
                            <Button className='btn-danger'>cancel</Button>
                        </Link>
            </div>
            </Form>
        </div>
    )

}

