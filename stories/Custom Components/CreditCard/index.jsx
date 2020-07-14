import React from "react";
import { Card, PageHeader, Typography, Layout } from "antd";
import VisaLogo from "./VisaLogo";

import "./style.less";

const { Content } = Layout;

const fakeCard = {
  card_id: 4,
  card_name: "Marketing",
  member: "Isaiah Thomas Jr",
  card_type: "Physical",
  card_number: "5168828533751234",
  payment_limit: [7000, 100000],
  allow_international_payment: false,
  status: false,
};
export default ({ card = fakeCard }) => {
  return (
    <Layout>
      <PageHeader title="Creadit card" />
      <Content style={{ padding: "0 30px" }}>
        <Typography.Title level={4}>Examples:</Typography.Title>
        <Typography.Paragraph>
          Component used on Cards page in Drawer
        </Typography.Paragraph>
        <section className="example">
          <Card className="card" style={{ maxWidth: "285px" }}>
            <div className="card-header">
              <span>{card.card_type}</span>
              <span>
                <VisaLogo width={40} height={12} textColor={"#fff"} />
              </span>
            </div>
            <div className="card-chip">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="card-number">
              <p>{`•••• •••• •••• ${card.card_number.substring(12)}`}</p>
            </div>
            <div className="card-shadow"></div>
          </Card>
        </section>
      </Content>
    </Layout>
  );
};
