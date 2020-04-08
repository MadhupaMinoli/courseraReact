import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetails from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import '../App.css'
import Home from './HomeComponent'
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDishId: null,
            dishes:DISHES
        }
        
    
    }

    
    
  render() {
    return (
      <div>
        <Header />
        <Switch>
            <Route path='/Home' component={Home}/>
            <Route exact path='/Menu' component={()=> <Menu dishes={this.state.dishes}/>}/>
            <Redirect to='/Home' />           
        </Switch>
        
        <Footer />
      </div>
    );
  }
}
export default Main;
