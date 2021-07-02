import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class Header extends Component {
  // 输入框
  inputUp = (e) => {
    const { keyCode, target } = e;
    if (keyCode === 13 && target.value !== "") {
      PubSub.publish("headMess", target.value);
      target.value = "";
    }
  };

  render() {
    return (
      <div>
        <div className="todoHeader">
          <input
            type="text"
            onKeyUp={this.inputUp}
            placeholder="请输入你的任务名称，按回车键确认"
          />
        </div>
      </div>
    );
  }
}
