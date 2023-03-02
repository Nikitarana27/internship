import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Employees from './Empolyees';
import { v4 as uuid } from "uuid";
import { useNavigate ,Link} from 'react-router-dom';

export default function Add() {

    //
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [department, setDepartment] = useState('');
    // const [skills, setSkills] = useState('');
    const [about, setAbout] = useState('');

    let history = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();


        //fetching selected skills
        const ski = document.getElementsByName('skills');
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

                //checking the data is number or not and length is 10
                if (phone.length === 10 && isNaN(phone) === false) {

                    //giving random unique id to new employee 
                    const ids = uuid();
                    let uniqueId = ids.slice(0, 8);

                    let a = firstname,
                        b = lastname,
                        c = email,
                        p = phone,
                        d = gender,
                        ee = department,
                        f = skillss,
                        g = about;

                    //saving new data in employee
                    Employees.push({ id: uniqueId, Firstname: a, Lastname: b, Email: c, Phone: p, Gender: d, Department: ee, Skills: f, About: g });

                    history("/");
                    alert("You have successfully added the data");
                }
                //if number is not in proper formate
                else {
                    alert("please enter proper phone number");
                }
            }
            //if email is not in proper formate
            else {
                alert("invalid email! please enter email in proper formate");
            }
        }
    }

    //this is for gender 
    const handleOnChange = (event) => {
        setGender(event.target.value);
        // console.log(event.target.value);
    }

    // const handleChange = (e) => {
    //     // Destructuring
    //     const { value, checked } = e.target;
    //     const { languages } = skills;


    //     // Case 1 : The user checks the box
    //     if (checked) {
    //         setSkills({
    //             languages: [...languages,value]
    //         });
    //     }
    //     else {
    //         setSkills({
    //             languages: languages.filter((e) => e !== value)
    //         });
    //     }
    // };

    return (
        <div>
            <Form className="" style={{ margin: "5rem" }} onSubmit={(e) => { handleSubmit(e) }}>

                <Form.Group className="mb-1" controlId="formFname">
                    <label for="inputFname" className="form-label fw-bold">First Name</label>
                    <Form.Control type="text" placeholder="Enter first name" required onChange={(e) => setFirstname(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-1 " controlId="formLname">
                    <label for="inputLname" className="form-label fw-bold" >Last Name</label>
                    <Form.Control type="text" placeholder="Enter last name" required onChange={(e) => setLastname(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formEmail">
                    <label for="inputEmail4" className="form-label fw-bold">Email</label>
                    <Form.Control type="text" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formPhone">
                    <label for="inputPhone10" className="form-label fw-bold">Phone Number</label>
                    <Form.Control type="text" placeholder="Enter phone number" required onChange={(e) => setPhone(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-1 " controlId="formGender" >
                    <label for="gender" className="form-label fw-bold">Gender &nbsp;</label><br></br>
                    <div className="border rounded p-2">
                        <input type="radio" value="male" name="gender" placeholder="male" onChange={handleOnChange}></input>
                        <label class="form-check-label" for="male">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" value="female" name="gender" required placeholder="female" onChange={handleOnChange}></input>
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
                                <input class="form-check-input"  type="checkbox" id="inlineCheckbox2" name="skills" value="Programming" />
                                <label class="form-check-label" for="inlineCheckbox1">Programming</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" name="skills"value="Communication" />
                                <label class="form-check-label" for="inlineCheckbox2">Communication</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="skills"
                                    // onChange={handleChange}
                                    value="Finance" />
                                <label class="form-check-label" for="inlineCheckbox3">Finance</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="skills"
                                    // onChange={handleChange}
                                    value="Recruitment" />
                                <label class="form-check-label" for="inlineCheckbox3">Recruitment</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="skills"
                                    // onChange={handleChange}
                                    value="Optimization" />
                                <label class="form-check-label" for="inlineCheckbox3">Optimization</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="skills"
                                    // onChange={handleChange}
                                    value="App Development" />
                                <label class="form-check-label" for="inlineCheckbox3">App Development</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="skills"
                                    // onChange={handleChange}
                                    value="Frontend Technology" />
                                <label class="form-check-label" for="inlineCheckbox3">Frontend Technology</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="skills"
                                    // onChange={handleChange}
                                    value="Backend Technology" />
                                <label class="form-check-label" for="inlineCheckbox3">Backend Technology</label>
                            </div>
                        </div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formAbout">
                    <label for="about" className="form-label fw-bold">About</label>
                    <Form.Control type="text" placeholder="Enter about" required onChange={(e) => setAbout(e.target.value)}></Form.Control>
                </Form.Group>
            <div className='mt-4'>
                <Button type='submit' className='btn-success '>Submit</Button>&nbsp;
                <Link  to="/">
                            <Button className='btn-danger'>cancel</Button>
                        </Link>
            </div>
            </Form>
        </div>
    )
}
