import { Form, Input, Button, Modal, Row, Col } from "antd";
import { useState, useImperativeHandle } from "react";
import styles from "../Layout/layout.module.scss";
import messages from "../Layout/messages";
import {
  useAddToQuestionsMutation,
} from "../../api/questions";

const { TextArea } = Input;

const AddQuestionModal = ({ reference }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ newQuestion ] = useAddToQuestionsMutation()


  useImperativeHandle(reference, () => ({
    showModal: () => {
      setIsModalOpen(true);
    },
    hideModal: () => {
      setIsModalOpen(false);
    },
  }));

  const handleOk = (values) => {
    newQuestion({
    title: values.title,
    content: values.content,
    time: new Date().toUTCString(),
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    answer_amount:0,
    })
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={messages.AddNewQuestion}
      open={isModalOpen}
      onCancel={handleCancel}
      className={styles.addQuestion}
      width={700}
      footer={null}
    >
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="vertical"
        className={styles.questionform}
        onFinish={handleOk}
      >
        <Row>
          <Col xs={24} className="">
            <Form.Item
              label={messages.questionTitle}
              labelCol={{ xs: 24 }}
              wrapperCol={{ xs: 24 }}
              name="title"
            >
              <Input/>
            </Form.Item>
          </Col>
          <Col xs={24} className="">
            <Form.Item
              label={messages.questionContent}
              labelCol={{ xs: 24 }}
              wrapperCol={{ xs: 24 }}
              name="content"
            >
              <TextArea rows={4} />
            </Form.Item>
          </Col>
          <Col xs={24} className={styles.formButton}>
            <Button
              key="back"
              type="text"
              className={styles.green_button_text}
              onClick={handleCancel}
            >
              {messages.Cancle}
            </Button>
            <Button
              htmlType="submit"
              type="primary"
              className={styles.green_button}
            >
              {messages.AddQuestion}
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default AddQuestionModal;
