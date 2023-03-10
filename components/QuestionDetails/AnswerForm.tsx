import { Form, Input, Button, Row, Col } from "antd";
import styles from "../Layout/layout.module.scss";
import messages from "./messages";
import {
  useAddToAnswersMutation
  ,usePatchAnswersAmountMutation
} from "../../api/questions";

const { TextArea } = Input;

const AnswerForm = ({qid, amount}) => {
  const [ addNewAnswer ] =   useAddToAnswersMutation(qid)
  const [ UpdateAnswer ]= usePatchAnswersAmountMutation({})

  const handleOk = async(values) => {
    await addNewAnswer({
    name: 'Masoumeh Afshar',
    content: values.content,
    time: new Date().toUTCString(),
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    like:0,
    dislike:0,
    questionListId: qid
  })
    UpdateAnswer({id: qid, answer_amount: amount+1 })
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="vertical"
      className={styles.Answerform}
      onFinish={handleOk}
    >
      <Row>
        <Col xs={24} className="">
          <Form.Item
            labelCol={{ xs: 24 }}
            wrapperCol={{ xs: 24 }}
            name="content"
          >
            <TextArea rows={4} placeholder={messages.AnswerText}  />
          </Form.Item>
        </Col>
        <Col xs={24} className={styles.formButton}>
          <Button
            htmlType="submit"
            type="primary"
            className={`${styles.green_button} ${styles.widebtn}`}
          >
            {messages.SendAnswer}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default AnswerForm;
