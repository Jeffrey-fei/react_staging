import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class Item extends Component {
  // 设置鼠标移入状态，默认没有状态
  state = { mouseStatue: false };

  // 鼠标移入移出事件
  handleMouse = (params) => {
    return () => {
      if (params === "en") this.setState({ mouseStatue: true });
      else this.setState({ mouseStatue: false });
    };
  };

  // 删除当前item
  dele = (id) => {
    return () => {
      PubSub.publish('deleItem', id)
    };
  };

  render() {
    const { done, name, id } = this.props.item;
    const { mouseStatue } = this.state;

    return (
      <div
        // className={['todoItem', mouseStatue ? "en" : ""].join(' ')}
        className={`todoItem ${mouseStatue ? "en" : ""}`}
        onMouseEnter={this.handleMouse("en")}
        onMouseLeave={this.handleMouse("le")}
      >
        <label>
          <input type="checkbox" name="todoList" defaultChecked={done} />
          <span key={id}>{name}</span>
        </label>
        <button
          style={{ display: mouseStatue ? "block" : "none" }}
          type="normal"
          onClick={this.dele(id)}
        >
          删除
        </button>
      </div>
    );
  }
}
