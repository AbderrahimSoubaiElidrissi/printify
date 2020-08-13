import "./main.css";

import Layout from "../components/Layout";
import Upload from "../components/Upload/Upload";
import List from "../components/List/List";

import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  add = item => {
    let newList = this.state.list;
    newList.push({ state: false, file: item });
    this.setState({ list: newList });
    console.log(newList);
  };

  render() {
    return (
      <Layout>
        <section className="panel important">
          <h2>Write a post</h2>
          <Upload handleAdd={this.add} />
          <List list={this.state.list} />
        </section>
      </Layout>
    );
  }
}

export default Index;
