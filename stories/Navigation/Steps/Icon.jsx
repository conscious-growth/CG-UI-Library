import React, { Component } from "react";
import { Steps, Icon } from "antd";

import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";

class StepIcon extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Steps With Icon</h3>
        <Steps>
          <Step status="finish" title="Login" icon={<UserOutlined />} />
          <Step
            status="finish"
            title="Verification"
            icon={<SolutionOutlined />}
          />
          <Step status="process" title="Pay" icon={<LoadingOutlined />} />
          <Step status="wait" title="Done" icon={<SmileOutlined />} />
        </Steps>
      </section>
    );
  }
}

export default StepIcon;
