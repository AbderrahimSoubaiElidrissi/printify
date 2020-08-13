import React, { Component } from "react";

import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <table className="responsive">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">State</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {this.props.list.map(item => (
          <tr>
            <td data-label="Name">{item.file.name}</td>
            <td data-label="Vorname">{!item.state ? "Pending" : "Printed"}</td>
            <td data-label="Straße">
              {" "}
              <a href="#"> Remove </a>{" "}
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

export default List;
