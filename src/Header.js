import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class Header extends Component {

    render() {    
        return (
          <nav className="home">
              <div className="home-main">
                <Link className="home-link" to="/">News Today</Link>
              </div>
          </nav>
        );
      }
    }

export default Header;
