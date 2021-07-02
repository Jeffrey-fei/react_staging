import React, { Component } from "react";
import Axios from "axios";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  async componentDidMount() {
    let res = await fetch("https://api.github.com/users");
    let result = await res.json();
    console.log(result);
    Axios.get("https://api.github.com/users").then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="box">
        <Header />
        <List />
        <Footer />
      </div>
    );
  }
}
