import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import { useNavigation } from '@react-navigation/native';
export default function body() {
    let navigate = useNavigate();

    const handleCreateFolder = (e) => {
        e.preventDefault();
        navigate("/CreateFolder");

    }
    const handleCreateFile = (e) => {
        e.preventDefault();
        navigate("/CreateFile");
    }
    const handleWriteData = () => {
        navigate("/WriteData");
    }
    const handleAppendData = () => {
        navigate("/AppendData");
    }
    const handleReadFile = () => {
        navigate("/ReadData");
    }
    const handleDeleteFile = () => {
        navigate("/DeleteFile");
    }
    const handleDisplayData = () => {
        navigate("/DisplayFiles");
    }

    return (
        <>
            <div className='container '>

                <div className='m-3'>
                    <input type="button" className="btn btn-success " value="create a folder" onClick={handleCreateFolder}></input>
                    {/* <input type="text" name=""  placeHolder="" className="rounded-2 border-dark" style={{height: 40,marginLeft: 20}}></input> */}
                </div>
                <div className='m-3'>
                    <input type="button" className="btn btn-success " value="Create a file" onClick={handleCreateFile}></input>
                    {/* <input type="text" name=""  placeHolder="" className="rounded-2 border-dark" style={{height: 40,marginLeft: 20}}></input> */}
                </div>
                <div className='m-3'>
                    <input type="button" className="btn btn-success " value="Write the data into a file" onClick={handleWriteData}></input>
                    {/* <input type="text" name=""  placeHolder="" className="rounded-2 border-dark" style={{height: 40,marginLeft: 20}}></input> */}
                </div>
                <div className='m-3'>
                    <input type="button" className="btn btn-success " value="Append the data into a file" onClick={handleAppendData}></input>
                    {/* <input type="text" name=""  placeHolder="" className="rounded-2 border-dark" style={{height: 40,marginLeft: 20}}></input> */}
                </div>
                <div className='m-3'>
                    <input type="button" className="btn btn-success " value="Read the data from a file" onClick={handleReadFile}></input>
                    {/* <input type="text" name=""  placeHolder="" className="rounded-2 border-dark" style={{height: 40,marginLeft: 20}}></input> */}
                </div>
                <div className='m-3'>
                    <input type="button" className="btn btn-success " value="Delete the file" onClick={handleDeleteFile}></input>
                    {/* <input type="text" name=""  placeHolder="" className="rounded-2 border-dark" style={{height: 40,marginLeft: 20}}></input> */}
                </div>
                <div className='m-3'>
                    <input type="button" className="btn btn-success " value="Display the contents of the file" onClick={handleDisplayData}></input>
                    {/* <input type="text" name=""  placeHolder="" className="rounded-2 border-dark" style={{height: 40,marginLeft: 20}}></input> */}
                </div>
            </div>
        </>
    )
}
