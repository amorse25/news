import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class Footer extends Component {

    render() {    
        return (
          <nav className="footer">
              <div className="footer-main">
                    All content is derived from "https://newsapi.org/"
              </div>
          </nav>
        );
      }
    }

export default Footer;
