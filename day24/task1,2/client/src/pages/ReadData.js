import React from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function ReadData() {
  let navigate = useNavigate();

  const Read_data = async (e) =>{
    e.preventDefault();
    // console.log("hello")
    let Folder_name = document.getElementById("Folder_Name").value;
    let File_name = document.getElementById("File_Name").value;
    let Display = document.getElementById("display");
    let localHost = "http://localhost:5000/ReadData";
    const response = await axios.post(localHost, { FolderName: Folder_name,FileName :File_name });
    Display.innerHTML = response.data;
   
  }
  return (
    <>
  
    <div className="div m-3">
        
        <form name="form" method="get" onSubmit={Read_data}>
          <div className="mb-4">
            <label className="form-label fw-bold fs-3" >Enter Folder Name: </label>
            <input
              className="form-control"
              type="text"
              name="text"
              placeholder="Enter Folder Name"
              id="Folder_Name">
            </input> &nbsp;
            <label className="form-label fw-bold fs-3" >Enter File Name: </label>
            <input
              className="form-control"
              type="text"
              name="text"
              placeholder="Enter Folder Name"
              id="File_Name">
            </input> &nbsp;
            
          <label className="form-label fw-bold fs-3" >Data will display here: </label>
          <p id="display" className="fs-5 fw-bold" style={{ wordWrap: " break-word" }} ></p>

            <button type="submit" className="btn btn-success mt-3  rounded-3">Read File</button><br></br>
            <button type="submit" className="btn btn-success mt-3  rounded-3" onClick={() => navigate("/")}>go back</button>
          </div>
        </form>
      </div>
      
        
    </>
  )
}
