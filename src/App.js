import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import{action,originals}from './url'
function App() {
  return (
    <div className="App">
<NavBar/>
<Banner/>
<RowPost url={originals} title='Netflix Originals'/>
<RowPost url={action}title='Action' isSmall/>

    </div>
  );
}

export default App;
