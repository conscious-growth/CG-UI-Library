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
  WalletOutlined,
  EuroOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import LogoFull from "../../../img/LogoFull.svg";
import LogoG from "../../../img/LogoG.svg";

import "./style.less";

const { Sider } = Layout;
const { SubMenu } = Menu;

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: () => (
      <Redirect
        to={{
          pathname: "/transactions",
        }}
      />
    ),
  },
  {
    name: "Transactions",
    path: "/transactions",
    key: "TRANSACTIONS",
    exact: true,
    component: () => "<Transactions />",
    icon: <SwapOutlined />,
  },
  {
    name: "Payments",
    path: "/payments",
    key: "PAYMENTS",
    exact: true,
    component: () => <h1>Payments</h1>,
    icon: <WalletOutlined />,
    routes: [
      {
        name: "Single Euro transfer",
        path: "/payment/euro",
        key: "PAYMENTS_EURO",
        exact: true,
        component: () => <h1>Cards</h1>,
        icon: <EuroOutlined />,
      },
      {
        name: "Bulk transfer",
        path: "/payment/bulk",
        key: "PAYMENTS_BULK",
        exact: true,
        component: () => <h1>Cards</h1>,
        icon: <EuroOutlined />,
      },
      {
        name: "Non Euro transfer",
        path: "/payment/single",
        key: "PAYMENTS_SINGLE",
        exact: true,
        component: () => <h1>Cards</h1>,
        icon: <EuroOutlined />,
      },
    ],
  },
  {
    name: "Cards",
    path: "/cards",
    key: "CARDS",
    exact: true,
    component: () => "<Cards />",
    icon: <CreditCardOutlined />,
  },
  {
    name: "Create Cards",
    path: "/cards/create",
    key: "CARDS_CREATE",
    exact: true,
    component: () => "<CardsCreate />",
    skipInMenu: true,
  },
  {
    name: "Create virtual card",
    path: "/cards/create/virtual",
    key: "CARDS_CREATE_VIRTUAL",
    exact: true,
    component: () => '<CreateCardForm type="virtual" />',
    skipInMenu: true,
  },
  {
    name: "Create physical card",
    path: "/cards/create/physical",
    key: "CARDS_CREATE_PHYSICAL",
    exact: true,
    component: () => '<CreateCardForm type="physical" />',
    skipInMenu: true,
  },
  {
    name: "Financing",
    path: "/financing",
    key: "FINANCING",
    exact: true,
    component: () => <h1>Financing</h1>,
    icon: <DollarCircleOutlined />,
  },
  {
    name: "Overview",
    path: "/overview",
    key: "OVERVIEW",
    exact: true,
    component: () => <h1>Overview</h1>,
    icon: <PieChartOutlined />,
  },
  {
    name: "Members",
    path: "/business/members",
    key: "BUSINESS_MEMBERS",
    exact: true,
    component: () => "<Members />",
    skipInMenu: true,
  },
];

export default () => {
  const [collapsed, setCollapsed] = React.useState(false);

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
          <div className="fixed">
            <div className="logo">
              <a href="/">
                {collapsed ? (
                  <img src={LogoG} alt="Brand Logo" />
                ) : (
                  <img src={LogoFull} alt="Brand Logo" />
                )}
              </a>
            </div>
            <RoutesList />
            <div className="footer">
              <Menu theme="dark" style={{ marginBottom: "1em" }}>
                <Menu.Item key={1} icon={<QuestionCircleOutlined />}>
                  <a href="/help">Help</a>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </Sider>
      </Layout>
    </section>
  );
};

const RoutesList = () => {
  return (
    <Menu className="app-navigation" theme="dark" mode="inline">
      {ROUTES.map((route) => {
        if (route.name) {
          if (route.routes) {
            return (
              <SubMenu
                key="sub1"
                title={
                  <span>
                    {route.icon}
                    <span>{route.name}</span>
                  </span>
                }
              >
                {route.routes.map((subRoute) => (
                  <Menu.Item key={subRoute.key} icon={subRoute.icon}>
                    <a href={subRoute.path}>{subRoute.name}</a>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          } else if (!route.skipInMenu) {
            return (
              <Menu.Item key={route.key} icon={route.icon}>
                <a href={route.path}>{route.name}</a>
              </Menu.Item>
            );
          }
        }
      })}
    </Menu>
  );
};

export const AppSider = () => {
  const [collapsed, setCollapsed] = React.useState(false);

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
      <div className="fixed">
        <div className="logo">
          <a href="/">
            {collapsed ? (
              <img src={LogoG} alt="Brand Logo" />
            ) : (
              <img src={LogoFull} alt="Brand Logo" />
            )}
          </a>
        </div>
        <RoutesList />
        <div className="footer">
          <Menu theme="dark" style={{ marginBottom: "1em" }}>
            <Menu.Item key={1} icon={<QuestionCircleOutlined />}>
              <a href="/help">Help</a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Sider>
  );
};
