import React, { useCallback } from "react";
import { PageWithHeader } from "../../../components";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, UserAddOutlined } from "@ant-design/icons";
import { messageService } from "../../../services";

function CreateMessage({ history }) {
  const onFinish = useCallback(
    async (values) => {
      try {
        await messageService.addMessages(values);
        history.goBack();
      } catch (error) {
        message.error(error.message);
      }
    },
    [history]
  );

  return (
    <PageWithHeader
      title="Create a message"
      history={history}
      enabledBackButton
    >
      <section style={{ width: "500px", padding: "40px" }}>
        <Form name="create_message" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="E-mail" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
                whitespace: true,
              },
            ]}
          >
            <Input prefix={<UserAddOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </section>
    </PageWithHeader>
  );
}

export default CreateMessage;
