// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CreateFolder from './pages/CreateFolder';
import CreateFile from './pages/CreateFile';
import WriteData from './pages/WriteData';
import AppendData from './pages/AppendData';
import ReadData from './pages/ReadData';
import DeleteFile from './pages/DeleteFile';
import DisplayFiles from './pages/DisplayFile';

function App() {
  return (
    <>
    <div><Header /></div>
    <BrowserRouter>
    {/* <div className="App">
    <div><Header /></div> 
    <div><Body /></div>
    </div> */}
    <Routes>
      <Route  path='/' element={<Body />} />
      <Route  path="/CreateFolder" element={<CreateFolder />} />
      <Route  path="/CreateFile" element={<CreateFile />} />
      <Route  path="/WriteData" element={<WriteData />} />
      <Route  path="/AppendData" element={<AppendData />} />
      <Route  path="/ReadData" element={<ReadData />} />
      <Route  path="/DeleteFile" element={<DeleteFile />} />
      <Route  path="/DisplayFiles" element={<DisplayFiles />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
