import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class Nav extends Component {

    render() {    
        return (
          <nav className="Nav">
              <div className="nav-main">
                <ul className="nav-wrapper">
                  <li className="nav-li">
                    <Link className="Nav__link" to="/business">Business</Link>
                  </li>
                  <li className="nav-li">
                    <Link className="Nav__link" to="/entertainment">Entertainment</Link>
                  </li>
                  <li className="nav-li">
                    <Link className="Nav__link" to="/general">General</Link>
                  </li>
                  <li className="nav-li">
                    <Link className="Nav__link" to="/health">Health</Link>
                  </li>
                  <li className="nav-li">
                    <Link className="Nav__link" to="/science">Science</Link>
                  </li>
                  <li className="nav-li">
                    <Link className="Nav__link" to="/sports">Sports</Link>
                  </li>
                  <li className="nav-li">
                    <Link className="Nav__link" to="/technology">Technology</Link>
                  </li>
                </ul>
              </div>
          </nav>
        );
      }
    }

export default Nav;
