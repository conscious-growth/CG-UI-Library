import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class Type extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Type</h3>

        <Avatar icon={<UserOutlined />} />
        <Avatar className="ml20">U</Avatar>
        <Avatar className="ml20">USER</Avatar>
        <Avatar
          className="ml20"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <Avatar
          className="ml20"
          style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          U
        </Avatar>
        <Avatar
          className="ml20"
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
      </section>
    );
  }
}

export default Type;
