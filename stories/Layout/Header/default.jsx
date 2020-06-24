import React from "react";
import {
  Layout,
  Button,
  Badge,
  Avatar,
  Menu,
  Dropdown,
  Typography,
} from "antd";
import {
  PlusOutlined,
  BellOutlined,
  SearchOutlined,
  UserOutlined,
  LogoutOutlined,
  BankOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

import "./style.css";

const menu = (
  <Menu>
    <Menu.ItemGroup
      key="g1"
      title={
        <span>
          <UserOutlined /> Personal Details
        </span>
      }
    >
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="settings/profile">
          My profile
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="settings/notifications"
        >
          Notifications
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a target="_blank" rel="noopener noreferrer" href="settings/language">
          Language
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a target="_blank" rel="noopener noreferrer" href="settings/password">
          Change password
        </a>
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.Divider />
    <Menu.ItemGroup
      key="g2"
      title={
        <span>
          <BankOutlined /> Buisness Details
        </span>
      }
    >
      <Menu.Item key="4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="settings/buisness/profile"
        >
          Buisness profile
        </a>
      </Menu.Item>
      <Menu.Item key="5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="settings/buisness/members"
        >
          Members
        </a>
      </Menu.Item>
      <Menu.Item key="6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="settings/buisness/labels"
        >
          Manage labels
        </a>
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.Divider />
    <Menu.Item key="7" icon={<LogoutOutlined />}>
      Log out
    </Menu.Item>
  </Menu>
);

export default () => {
  const [balance, setBalance] = React.useState(20000.33);
  const [currency, setCurrency] = React.useState("EUR");
  const [user, setUser] = React.useState("New user");
  const [organization, setOrganization] = React.useState("New organization");

  return (
    <section className="example">
      <h1 className="title">App Header</h1>
      <Layout>
        <Header className="app-header">
          <div className="user-balance">
            <div className="two-rows-wrapper">
              <Typography.Text
                style={{ fontSize: "12px", display: "block" }}
                type="secondary"
                className="subtext"
                ellipsis
              >
                Balance
              </Typography.Text>
              <Typography.Text
                type="strong"
                style={{ fontSize: "16px" }}
                ellipsis
              >
                {`${balance.toLocaleString("DE")} ${currency}`}
              </Typography.Text>
            </div>
            <Button
              style={{ alignSelf: "flex-end", marginLeft: "10px" }}
              onClick={() => setBalance(balance + 1000)}
            >
              <PlusOutlined />
              Add funds
            </Button>
          </div>
          <div className="user-dashboard">
            <div className="search">
              <SearchOutlined />
            </div>
            <div className="two-rows-wrapper user-info">
              <Typography.Text
                type="strong"
                style={{ fontSize: "16px" }}
                ellipsis
              >
                {organization}
              </Typography.Text>
              <Typography.Text
                style={{ fontSize: "12px", display: "block" }}
                type="secondary"
                className="subtext"
                ellipsis
              >
                {user}
              </Typography.Text>
            </div>
            <Dropdown overlay={menu}>
              <Avatar style={{ marginRight: "10px" }} />
            </Dropdown>
            <Badge dot>
              <BellOutlined />
            </Badge>
          </div>
        </Header>
      </Layout>
    </section>
  );
};

export const AppHeader = () => {
  const [balance, setBalance] = React.useState(20000.33);
  const [currency, setCurrency] = React.useState("EUR");
  const [user, setUser] = React.useState("New user");
  const [organization, setOrganization] = React.useState("New organization");

  return (
    <Header className="app-header">
      <div className="user-balance">
        <div className="two-rows-wrapper">
          <Typography.Text
            style={{ fontSize: "12px", display: "block" }}
            type="secondary"
            className="subtext"
          >
            Balance
          </Typography.Text>
          <Typography.Text type="strong" style={{ fontSize: "16px" }}>
            {`${balance.toLocaleString("DE")} ${currency}`}
          </Typography.Text>
        </div>
        <Button
          style={{ alignSelf: "flex-end", marginLeft: "10px" }}
          onClick={() => setBalance(balance + 1000)}
        >
          <PlusOutlined />
          Add funds
        </Button>
      </div>
      <div className="user-dashboard">
        <div className="search">
          <SearchOutlined />
        </div>
        <div className="two-rows-wrapper user-info">
          <Typography.Text type="strong" style={{ fontSize: "16px" }}>
            {organization}
          </Typography.Text>
          <Typography.Text
            style={{ fontSize: "12px", display: "block" }}
            type="secondary"
            className="subtext"
          >
            {user}
          </Typography.Text>
        </div>
        <Dropdown overlay={menu}>
          <Avatar style={{ marginRight: "10px" }} />
        </Dropdown>
        <Badge dot>
          <BellOutlined />
        </Badge>
      </div>
    </Header>
  );
};
