import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DisplayFiles() {
  let navigate = useNavigate();

  const Display_Files = async (e) => {
    e.preventDefault();
   
    // var nodes = document.createElement("div");
      let Folder_name = document.getElementById("Folder_Name").value;
      // const display = document.getElementById("Display");
      
      let localHost = "http://localhost:5000/DisplayFiles";
      // let n = 0;
      // const increment = () => {
      //   return ++n;
      // }
      const response = await axios.post(localHost, { FolderName: Folder_name });
      // console.log(response.data)
      // for (var i = 0; i < response.data.length; i++) {
      //   var node = document.createElement("p");
      //   node.setAttribute("id",increment());
      //   node.textContent = response.data[i];
      //   console.log(response.data[i]);
      //   console.log("hello")
      //   nodes.appendChild(node);
      //   // console.log(response.data[i]);
      // }
      // console.log(nodes);
      // document.getElementById("display").appendChild(nodes);

      var file = [];
      for (var i = 0 ; i < response.data.length; i++) {
        file.push('<div>'+ response.data[i] +'<div>')
        console.log(response.data[i])
      }
      console.log(file)
      document.getElementById("display").innerHTML = file ;
    // display.innerHTML = response.data;

    // navigate("/");
  }
  return (
    <>

      <div className="div m-3">
        <form name="form" method="get" onSubmit={Display_Files}>
          <div className="mb-4">
            <label className="form-label fw-bold fs-3" >Enter Folder Name: </label>
            <input
              className="form-control"
              type="text"
              name="text"
              placeholder="Enter Folder Name"
              id="Folder_Name">
            </input> &nbsp;
            <label className="form-label fw-bold fs-3" >Data will display here: </label>
            <p id="display" className="fs-5 fw-bold" style={{ wordWrap: " break-word" }} ></p>
            <button type="submit" className="btn btn-success mt-3  rounded-3">Display Files</button><br></br>
            <p style={{fontsize: "samll"}}> if you want all Folders just click on Display File without writing any data in text box</p>
            {/* <button type="submit" className="btn btn-success mt-3  rounded-3" onClick={() => navigate("/DisplayFiles")}>refresh</button><br></br> */}
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
