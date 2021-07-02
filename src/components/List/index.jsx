import React, { Component } from "react";
import { nanoid } from "nanoid";
import PubSub from "pubsub-js";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  // list数据
  state = {
    list: [
      {
        id: 1,
        name: "我是第一个",
        done: true,
      },
      {
        id: 2,
        name: "我是第二个",
        done: false,
      },
      {
        id: 3,
        name: "我是第三个",
        done: true,
      },
    ],
  };

  componentDidMount() {
    // 增加一项
    PubSub.subscribe("headMess", (msg, data) => {
      const { list } = this.state;
      let item = {
        id: nanoid(),
        name: data,
        done: false,
      };
      let newList = [item, ...list];
      this.setState({ list: newList });
    });

    // 删除一项
    PubSub.subscribe("deleItem", (msg, data) => {
      if (window.confirm("确定删除当前吗？")) {
        const { list } = this.state;
        let newList = list.filter((item) => {
          return item.id !== data;
        });
        this.setState({ list: newList });
      }
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe("headMess");
    PubSub.unsubscribe("deleItem");
  }

  render() {
    const { list } = this.state;
    return (
      <div className="todoList">
        {list.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    );
  }
}
