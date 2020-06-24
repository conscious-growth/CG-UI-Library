import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Avatar size="large" icon={<UserOutlined />} />
        <Avatar className="ml20" icon={<UserOutlined />} />
        <Avatar className="ml20" size="small" icon={<UserOutlined />} />
        <Avatar
          className="ml20"
          shape="square"
          size="large"
          icon={<UserOutlined />}
        />
        <Avatar className="ml20" shape="square" icon={<UserOutlined />} />
        <Avatar
          className="ml20"
          shape="square"
          size="small"
          icon={<UserOutlined />}
        />
      </section>
    );
  }
}

export default Basic;
