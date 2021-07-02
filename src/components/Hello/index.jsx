import React, { Component } from "react";
import hello from "./index.module.css";

export default class Hello extends Component {
  componentDidMount() {
    console.log(this);
  }

  render() {
    return <div className={hello.hello}>我是Hello组件</div>;
  }
}
