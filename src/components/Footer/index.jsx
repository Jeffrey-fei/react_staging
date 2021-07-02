import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="todoFooter">
        <label>
          <input type="checkbox" name="todoFooter" />
          <span>已完成0/全部0</span>
        </label>
        <span className="clear">清除已完成任务</span>
      </div>
    );
  }
}
