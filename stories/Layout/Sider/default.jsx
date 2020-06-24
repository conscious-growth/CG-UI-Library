import React, { useState } from "react";
import { Layout, Menu, Typography, Button } from "antd";
import {
  TransactionOutlined,
  SwapOutlined,
  CreditCardOutlined,
  DollarCircleOutlined,
  DashboardOutlined,
  QuestionCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import LogoFull from "../../../img/LogoFull.svg";
import LogoG from "../../../img/LogoG.svg";

const { Sider } = Layout;

import "./style.css";

export default () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <section className="example">
      <h1 className="title">App Sider</h1>

      <Layout hasSider style={{ minHeight: "100vh", overflow: "hidden" }}>
        <Sider
          width={255}
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          trigger={null}
          className="app-sider"
        >
          <div className="logo">
            <a href="/">
              {collapsed ? (
                <img src={LogoG} alt="Brand Logo" />
              ) : (
                <img src={LogoFull} alt="Brand Logo" />
              )}
            </a>
          </div>
          <Menu theme="light">
            <Menu.Item key={1} icon={<TransactionOutlined />}>
              Transactions
            </Menu.Item>
            <Menu.Item key={2} icon={<SwapOutlined />}>
              Payments
            </Menu.Item>
            <Menu.Item key={3} icon={<CreditCardOutlined />}>
              Cards
            </Menu.Item>
            <Menu.Item key={4} icon={<DollarCircleOutlined />}>
              Financing
            </Menu.Item>
            <Menu.Item key={5} icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
          </Menu>
          <div className="footer">
            <Menu theme="light">
              <Menu.Item key={5} icon={<QuestionCircleOutlined />}>
                Help
              </Menu.Item>
            </Menu>

            <Typography.Paragraph className="paragraph copyrights">
              <Typography.Text type="secondary">
                {collapsed ? "" : "Copyright © 2020 ConsciousGrowth"}
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph className="paragraph collapse">
              <Button
                className="collapse-button"
                onClick={onCollapse}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              ></Button>
            </Typography.Paragraph>
          </div>
        </Sider>
      </Layout>
    </section>
  );
};

export const AppSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider
      width={255}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      trigger={null}
      className="app-sider"
    >
      <div className="logo">
        <a href="/">
          {collapsed ? (
            <img src={LogoG} alt="Brand Logo" />
          ) : (
            <img src={LogoFull} alt="Brand Logo" />
          )}
        </a>
      </div>
      <Menu theme="light">
        <Menu.Item key={1} icon={<TransactionOutlined />}>
          Transactions
        </Menu.Item>
        <Menu.Item key={2} icon={<SwapOutlined />}>
          Payments
        </Menu.Item>
        <Menu.Item key={3} icon={<CreditCardOutlined />}>
          Cards
        </Menu.Item>
        <Menu.Item key={4} icon={<DollarCircleOutlined />}>
          Financing
        </Menu.Item>
        <Menu.Item key={5} icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
      </Menu>
      <div className="footer">
        <Menu theme="light">
          <Menu.Item key={5} icon={<QuestionCircleOutlined />}>
            Help
          </Menu.Item>
        </Menu>

        <Typography.Paragraph className="paragraph copyrights">
          <Typography.Text type="secondary">
            {collapsed ? "" : "Copyright © 2020 ConsciousGrowth"}
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph className="paragraph collapse">
          <Button
            className="collapse-button"
            onClick={onCollapse}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          ></Button>
        </Typography.Paragraph>
      </div>
    </Sider>
  );
};
