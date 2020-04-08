import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetails from './DishdetailComponent';
import Header from './Header';
import Footer from './FooterComponent'
import '../App.css'
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDishId: null,
            dishes:DISHES
        }
        this.onDishSelect=this.onDishSelect.bind(this);
    
    }

    onDishSelect(dishId) {
        this.setState({ selectedDishId: dishId });

    }
    
  render() {
    return (
      <div>
        <Header />
        <Menu dishes={DISHES} onClick={(dishId)=>this.onDishSelect(dishId)}/>
        <Dishdetails dish={this.state.dishes.filter((dish)=>dish.id==this.state.selectedDishId)[0]}></Dishdetails>
        <Footer />
      </div>
    );
  }
}
export default Main;
