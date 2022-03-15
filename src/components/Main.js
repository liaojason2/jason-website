import React, { Component } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
// import Home from './HomeComponent';
// import About from './AboutComponent';
// import Menu from './MenuComponent';
// import DishDetail from './DishdetailComponent';
// import Contact from './ContactComponent';
// import Footer from './FooterComponent';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { LEADERS } from '../shared/leaders';
// import { PROMOTIONS } from '../shared/promotions';
// In react-router-dom v6, "Switch" is replaced by routes "Routes", "Redirect" is replaced by "Navigate"
import { Routes, Route } from 'react-router-dom'

class Main extends Component {

  render() {

    const HomePage = () => {
      return (
        <div className='container'>
          <h2>Home</h2>
        </div>
      );
    }

    return (
      <div className="background">
        <Header />
        <Routes>
          <Route path='/' element={HomePage} />
          <Route path='/aboutme' element={<AboutMe />} />
        </Routes>
      </div>
    );
  }
}

export default Main;

/*
<Menu dishes={this.state.dishes}
   onClick={(dishId) => this.onDishSelect(dishId)} />
 <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
  */