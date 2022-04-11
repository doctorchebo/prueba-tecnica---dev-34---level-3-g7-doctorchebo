import React, { useCallback } from "react";
import { PageWithHeader } from "../../../components";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, UserAddOutlined } from "@ant-design/icons";
import { messageService } from "../../../services";
import ContactList from "../../Contacts/components/ContactList";

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
            name="contacts"
            rules={[
              {
                required: true,
                message: "Please input at least one contact!",
              },
            ]}
          >
            <Input prefix={<ContactList />} placeholder="Contacts" />
          </Form.Item>
          <Form.Item
            name="content"
            rules={[
              {
                required: true,
                message: "The message cannot be empty!",
                whitespace: true,
              },
            ]}
          >
            <Input prefix={<MessageEvent />} placeholder="Content" />
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
