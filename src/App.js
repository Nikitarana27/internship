import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <div><Header /></div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Add />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </Router>
      <div><Footer /></div>
    </div>
  );
}

export default App;