import React, { Component } from "react";

import "./Upload.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });

    this.props.handleAdd(event.target.files[0]);

    console.log(event.target.files[0]);
  };

  render() {
    return (
      <div className="card">
        <input type="file" name="file" onChange={this.onChangeHandler} />
      </div>
    );
  }
}
