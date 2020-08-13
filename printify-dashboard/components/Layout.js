import React, { Component } from "react";

import "../pages/main.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <header role="banner">
            <h1>Admin Panel</h1>
            <ul className="utilities">
              <li className="users">
                <a href="#">My Account</a>
              </li>
              <li className="logout warn">
                <a href="">Log Out</a>
              </li>
            </ul>
          </header>

          <nav role="navigation">
            <ul className="main">
              <li className="dashboard">
                <a href="admindashboard">Dashboard</a>
              </li>
              <li className="edit">
                <a href="#">Edit Website</a>
              </li>
              <li className="write">
                <a href="#">Write news</a>
              </li>
              <li className="comments">
                <a href="#">Ads</a>
              </li>
              <li className="users">
                <a href="#">Manage Users</a>
              </li>
            </ul>
          </nav>

          <main role="main">
            <section className="panel important">
              <h2>Write Some News</h2>
              <ul>
                <li>Information Panel</li>
              </ul>
            </section>

            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
