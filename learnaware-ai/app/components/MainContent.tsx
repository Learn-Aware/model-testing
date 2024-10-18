"use client";
import { Tabs } from "antd";
import {
  MessageOutlined,
  FormOutlined,
  SettingOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import Questionnaire from "./Questionnaire";
import ChatAgent from "./ChatAgent";

const { TabPane } = Tabs;

const MainContent = () => {
  return (
    <Tabs className="p-4 bg-blue-100 min-h-screen" defaultActiveKey="0">
      {/* Chat Agent Tab */}
      <TabPane
        tab={
          <span>
            <MessageOutlined /> Chat Agent
          </span>
        }
        key="0"
      >
        <ChatAgent />
      </TabPane>

      {/* Questionnaire Tab */}
      <TabPane
        tab={
          <span>
            <FormOutlined /> Questionnaire
          </span>
        }
        key="1"
      >
        <Questionnaire />
      </TabPane>

      {/* General Settings Tab */}
      <TabPane
        tab={
          <span>
            <SettingOutlined /> General Settings
          </span>
        }
        key="2"
      >
        <p>General settings content goes here.</p>
      </TabPane>

      {/* Advanced Settings Tab */}
      <TabPane
        tab={
          <span>
            <ToolOutlined /> Advanced Settings
          </span>
        }
        key="3"
      >
        <p>Advanced settings content goes here.</p>
      </TabPane>
    </Tabs>
  );
};

export default MainContent;
