import React, { Component } from 'react';


class Navbar extends Component {

  render() {
    return (
     
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="#main"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marketplace
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-sm-none d-sm-block">
              <small className="text-white"><span id="account"><b>Account Id: </b>{this.props.account}</span></small>
            </li>
          </ul>
          
        </nav>

    );
  }
}

export default Navbar;
