import React from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function CreateFolder() {
    let navigate = useNavigate();

    const Create_Folder = async (e) =>{
      e.preventDefault();
      // console.log("hello")
      let Folder_name = document.getElementById("Folder_Name").value;

      let localHost = "http://localhost:5000/CreateFolder";
      const response = await axios.post(localHost, { FolderName: Folder_name });
      if(response === true){
        alert("folder named "+Folder_name+" is created");
      }
      navigate("/");
    }
  return (
    <>
  
    <div className="div m-3">
        {/* <h2>Find Prime Number</h2> */}
        <form name="form" method="get" onSubmit={Create_Folder}>
          <div className="mb-4">
            <label className="form-label fw-bold fs-3" >Enter Folder Name: </label>
            <input
              className="form-control"
              type="text"
              name="text"
              placeholder="Enter Folder Name"
              id="Folder_Name">
            </input> &nbsp;
            <button type="submit" className="btn btn-success mt-3  rounded-3">Create Folder</button><br></br>
            <button type="submit" className="btn btn-success mt-3  rounded-3" onClick={() => navigate("/")}>go back</button>
          </div>

          {/* <p id="display" className="fs-5 fw-bold" style={{ wordWrap: " break-word" }} ></p> */}
        </form>
      </div>
      {/* CreateFolder
        <button onClick={() => navigate("/")}>submit</button> */}
        
    </>
  )
}
