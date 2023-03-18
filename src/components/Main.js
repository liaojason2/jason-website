import React, { Component } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Timeline from "./Timeline";
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
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  render() {
    function HomePage() {
      return (
        <div className="container">
          <div className="row">
            <p class="title">Welcome to Jason's Blog</p>
            <p>我 18 歲啦啦啦啦啦啦～</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    );
  }
}

export default Main;
