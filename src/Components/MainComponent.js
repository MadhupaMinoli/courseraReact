import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';

import Home from './HomeComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import { DISHES } from '../shared/dishes';
import {COMMENTS } from '../shared/comments';
import { PROMOTIONS} from '../shared/promotions';

import { LEADERS } from '../shared/leaders';

import '../App.css'

import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDishId: null,
            dishes:DISHES,
            promotions: PROMOTIONS,
            leaders : LEADERS,
            comments : COMMENTS
        }
        
    
    }

    
    
  render() {


    const HomePage = ()=> {
return(
    <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
    promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
    leader={this.state.leaders.filter((leader)=>leader.featured)[0]}

    />
)
    }
    const AboutUs=()=>{
return(
    <About leaders={this.state.leaders}/>
)
    }


    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };


    return (
      <div>
        <Header />
        <Switch>
            <Route path='/Home' component={HomePage}/>
            <Route exact path='/Menu' component={()=> <Menu dishes={this.state.dishes}/>}/>
            <Route path='/menu/:dishId' component={DishWithId} />            
            <Route exact path='/Contact' component={Contact}/>    
            <Route exact path='/About' component={AboutUs}/>           
            <Redirect to='/Home' />           
        </Switch>
        
        <Footer />
      </div>
    );
  }
}
export default Main;
