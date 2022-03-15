import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Helmet} from 'react-helmet';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Helmet>
            <style className=""></style>
          </Helmet>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
