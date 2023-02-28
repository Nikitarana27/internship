import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Employees from './Empolyees';
// import {v4 as uuid} from "uuid";
import { useNavigate } from 'react-router-dom';

export default function Edit() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState({ genders: [] });
    const [department, setDepartment] = useState('');
    const [skills, setSkills] = useState({ languages: [] });
    const [id, setId] = useState('');
    const [about, setAbout] = useState('');

    let history = useNavigate();

    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);

   
    // let a = Employees[index];
    var skills_check = skills.split(",");
    // for (var i = 0; i < skills_check.length; i++) {
    //     var check=skills_check[i]
        // switch (check) {
        //     case "Programming":
        //         document.getElementById('inlineCheckbox1').checked = true;
        //         break;
        //     case "Communication":
        //         document.getElementById('inlineCheckbox2').checked = true;
        //         break;
        //     case "Finance":
        //         document.getElementById('inlineCheckbox3').checked = true;
        //         break;
        //     case "Recruitmen":
        //         document.getElementById('inlineCheckbox4').checked = true;
        //         break;
        //     case "Optimization":
        //         document.getElementById('inlineCheckbox5').checked = true;
        //         break;
        //     case "App Development":
        //         document.getElementById('inlineCheckbox6').checked = true;
        //         break;
        //     case "Frontend Technology":
        //         document.getElementById('inlineCheckbox7').checked = true;
        //         break;
        //     case "Backend Technology":
        //         document.getElementById('inlineCheckbox8').checked = true;
        //         break;
        // }
    // }
    
    



    const handleSubmit = (e) => {
        // var skills_check = skills.split(",");
        // console.log(skills_check[0]);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

            if (phone.length === 10 && isNaN(phone) === false) {

                e.preventDefault();
                // var skills_check = skills.split(",");
                // console.log(skills_check[0]);
                let a = Employees[index];


                for (var i = 0; i < skills_check.length; i++) {
                    var check=skills_check[i]
                    switch (check) {
                        case "Programming":
                            document.getElementById('inlineCheckbox1').checked = true;
                            break;
                        case "Communication":
                            document.getElementById('inlineCheckbox2').checked = true;
                            break;
                        case "Finance":
                            document.getElementById('inlineCheckbox3').checked = true;
                            break;
                        case "Recruitmen":
                            document.getElementById('inlineCheckbox4').checked = true;
                            break;
                        case "Optimization":
                            document.getElementById('inlineCheckbox5').checked = true;
                            break;
                        case "App Development":
                            document.getElementById('inlineCheckbox6').checked = true;
                            break;
                        case "Frontend Technology":
                            document.getElementById('inlineCheckbox7').checked = true;
                            break;
                        case "Backend Technology":
                            document.getElementById('inlineCheckbox8').checked = true;
                            break;
                    }
                }
            

                a.Firstname = firstname;
                a.Lastname = lastname;
                a.Email = email;
                a.Phone = phone;
                a.Department = department;
                a.About = about;
                history("/");
                a.Gender = gender.genders[0];
                // a.Skills = onload(checkme);
                // var n = skills.languages.length
                // a.Skills = skills.languages[n];


                alert("You have successfully added the data");
            }

            else {
                alert("please enter proper phone number");
            }
        }
        else {
            alert("invalid email! please enter email in proper formate");
        }
    }


    useEffect(() => {


        setFirstname(localStorage.getItem('Firstname'));
        setLastname(localStorage.getItem('Lastname'));
        setEmail(localStorage.getItem('Email'));
        setPhone(localStorage.getItem('Phone'));
        setGender(localStorage.getItem('Gender'));
        setDepartment(localStorage.getItem('Department'));
        setSkills(localStorage.getItem('Skills'));
        setAbout(localStorage.getItem('About'));
        setId(localStorage.getItem('id'));
        console.log(skills.languages);


    }, []);

    const handleOnChange = (event) => {
        const { value, checked } = event.target;
        const { genders } = gender;

        if (checked) {
            setGender({
                genders: [value]
            });
        }
        else {
            setGender({
                genders: genders.filter((e) => e !== value)
            });
        }
    }

    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { languages } = skills;


        // Case 1 : The user checks the box
        if (checked) {
            setSkills({
                languages: [...languages, value]
            });
        }
        else {
            setSkills({
                languages: languages.filter((e) => e !== value)
            });
        }
    };



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
                        <input type="radio" value="male" name="gender" placeholder="male" checked={gender === "male"} onChange={handleOnChange}></input>
                        <label class="form-check-label" for="male">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" value="female" name="gender" placeholder="female" checked={gender === "female"} onChange={handleOnChange}></input>
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
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" name="skills" onChange={handleChange} value="Programming" />
                                <label class="form-check-label" for="inlineCheckbox1">Programming</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" name="skills" onChange={handleChange} value="Communication" />
                                <label class="form-check-label" for="inlineCheckbox2">Communication</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="skills" onChange={handleChange} value="Finance" />
                                <label class="form-check-label" for="inlineCheckbox3">Finance</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" name="skills" onChange={handleChange} value="Recruitment" />
                                <label class="form-check-label" for="inlineCheckbox3">Recruitment</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox5" name="skills" onChange={handleChange} value="Optimization" />
                                <label class="form-check-label" for="inlineCheckbox3">Optimization</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox6" name="skills" onChange={handleChange} value="App Development" />
                                <label class="form-check-label" for="inlineCheckbox3">App Development</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox7" name="skills" onChange={handleChange} value="Frontend Technology" />
                                <label class="form-check-label" for="inlineCheckbox3">Frontend Technology</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox8" name="skills" onChange={handleChange} value="Backend Technology" />
                                <label class="form-check-label" for="inlineCheckbox3">Backend Technology</label>
                            </div>
                        </div>
                    </div>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formAbout">
                    <label for="about" className="form-label fw-bold">About</label>
                    <Form.Control type="text" placeholder="Enter about" required value={about} onChange={(e) => setAbout(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' className='btn-success' onClick={(e) => handleSubmit(e)}>Update</Button>

            </Form>
        </div>
    )
}

