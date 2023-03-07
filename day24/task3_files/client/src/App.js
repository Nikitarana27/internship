import "./App.css";
import axios from "axios";
//Axios is used to communicate with the backend and it also supports the Promise API that is native to JS
//It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application

import Header from './components/header';
import Header1 from './components/Header1';
function App() {

  //code for prime numbers
  const primeNumber = async (e) => {
    e.preventDefault();
    //getting entered value from form
    let input = document.getElementById("prime").value;
    //node server api for primenumber
    let localHost = "http://localhost:8000/primeNumber";
    //getting id were the output will be printed
    let display = document.getElementById("display");

    try {
      //validation for the number incase entered number is not numeric or blank
      if (isNaN(input) === true || input === "") {
        display.innerHTML = "please enter numeric value";
      }
      //if entered number is 1
      else {
        if (input === "1") {
          display.innerHTML = "one is special number please enter number more than 1";
        }

        else {
          const response = await axios.post(localHost, { number: +input });
          //if i use number here i have to get input paramter using req.body.number
          // const response = await axios.post(localHost, { input: +input });
          //if i use input here i have to get input paramter using req.body.input
          display.innerHTML = response.data.join(",");

        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  //code for powering to numbers
  const getPower = async (e) => {
    e.preventDefault();
    //node server api for findPower 
    let localHost = "http://localhost:8000/findPower";

    let first = document.getElementById("firstNumber").value;
    let second = document.getElementById("secondNumber").value;
    let powerDis = document.getElementById("power-display");
    try {
      if (first === "" || isNaN(first) === true) {
        powerDis.innerHTML = "please enter numeric value in base value";
      }
      else {
        if (second === "" || isNaN(second) === true) {
          powerDis.innerHTML = "please enter numeric value in power value";
        }
        else {
          const response = await axios.post(localHost, {
            first: +first,
            second: +second,
          });
          powerDis.innerHTML = response.data;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div><Header /></div>
      <div className="div m-3">
        {/* <h2>Find Prime Number</h2> */}
        <form name="form" method="get" onSubmit={primeNumber}>
          <div className="mb-4">
            <label className="form-label fw-bold fs-3" >Enter Value: </label>
            <input
              className="form-control"
              type="text"
              name="text"
              placeholder="Enter Any value"
              id="prime">
            </input> &nbsp;
            <button type="submit" className="btn btn-success mt-3  rounded-3">Result</button>
          </div>

          <p id="display" className="fs-5 fw-bold" style={{ wordWrap: " break-word" }} ></p>
        </form>
      </div>

      <div><Header1 /></div>


      <div className="div m-3">
        <form name="form" method="get" onSubmit={getPower}>

          <div className="mb-6">
            <label className="form-label fw-bold fs-3" >Enter Base Value: </label>
            <input
              className="form-control"
              type="text"
              name="text"
              placeholder="Enter First value"
              id="firstNumber">
            </input>
          </div>

          <div className="mb-6">
            <label className="form-label fw-bold fs-3" >Enter Power Value: </label>
            <input
              className="form-control"
              type="text"
              name="text"
              placeholder="Enter power value"
              id="secondNumber">
            </input>

            <button type="submit" className="btn btn-success mt-3  rounded-3">Result</button>

          </div>

          <p id="power-display" className="fs-5 fw-bold mt-3" style={{ wordWrap: " break-word" }}></p>

        </form>
      </div>
    </>
  );
}
export default App;
