import React, {Component} from 'react';
//import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Components/MenuComponent';
// import './App.css';
//import { Form } from 'reactstrap';

class App extends Component {
  render() {
    return(
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href ="/"> Ristorant Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}
}
export default App;
