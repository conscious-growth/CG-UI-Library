import React, { Fragment } from "react";
import { Layout, PageHeader, Empty } from "antd";
const { Content } = Layout;

import { AppHeader } from "../Header/default";
import { AppSider } from "../Sider/default";

export default () => {
  return (
    <Fragment>
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <AppSider></AppSider>
        <Layout style={{ padding: "0 5px" }}>
          <AppHeader></AppHeader>
          <Content>
            <PageHeader title="Example page"></PageHeader>
            <Empty />
          </Content>
        </Layout>
      </Layout>
    </Fragment>
  );
};
