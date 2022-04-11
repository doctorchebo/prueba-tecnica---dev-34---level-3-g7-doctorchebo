import React, { useCallback } from "react";
import { PageWithHeader } from "../../../components";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, UserAddOutlined } from "@ant-design/icons";
import { contactService } from "../../../services";

function DeleteContact({ history }) {
  const onFinish = ()=> useCallback(
    async (id) => {
      try {
        await contactService.deleteContact(id);
        history.goBack();
      } catch (error) {
        message.error(error.message);
      }
    },
    [history]
  );

  return (
    ()=> onFinish());
}

export default DeleteContact;
