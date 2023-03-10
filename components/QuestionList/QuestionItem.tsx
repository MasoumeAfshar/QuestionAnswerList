import { Col, Row, Typography, Avatar, Divider, Button } from "antd";
import Link from "next/link";
import styles from "./questionList.module.scss";
import messages from "./messages";
import { MessageOutlined } from "@ant-design/icons";
import { convertDateToJalaliForView, convertTimeToJalaliForView } from "../../utils/convertDate";

const { Paragraph, Text } = Typography;

const QuestionItem = ({ data, nobtn= false }:{ data:any,nobtn?:boolean}) => {
  return (
    <div className={styles.boxItem}>
      <Row>
        <Col span={24} className={styles.itemHeader}>
          <Row>
            <Col span={16}>
              <Avatar
                shape="square"
                src={data?.avatar}
                size={32}
                className={styles.chat_item_avatar}
              />
              <Text className={styles.itemTitle}>{data?.title}</Text>
            </Col>
            <Col span={8} className={styles.dateTime}>
              <Text className={styles.dateTime_lable}>
                {messages.Hour} :
                <span className={styles.dateTime_value}>{convertTimeToJalaliForView({date: data?.time})}</span>
              </Text>
              <Divider type="vertical" />
              <Text className={styles.dateTime_lable}>
                {messages.Date} :
                <span className={styles.dateTime_value}>{convertDateToJalaliForView({date: data?.time})}</span>
              </Text>
              <Divider type="vertical" />
              <MessageOutlined className={styles.dateTime_icon} />
              <Text className={styles.dateTime_lable}>{data?.answer_amount}</Text>
            </Col>
          </Row>
        </Col>
        <Col span={24} className={styles.itemContent}>
          <Paragraph>{data?.content}</Paragraph>
          { !nobtn ? 
            <Button className={styles.green_button_border}>
              <Link
                href={{
                  pathname: "/questionDetails",
                  query: { id: data?.id },
                }}
              >
                {messages.ViewDeials}
              </Link>
            </Button>:""
          }
        </Col>
      </Row>
    </div>
  );
};

export default QuestionItem