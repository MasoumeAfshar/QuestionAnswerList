import { Col, Row, Typography, Avatar, Divider, Button } from "antd";
import styles from "./questionList.module.scss";
import messages from "./messages";
import {
  FrownOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { convertDateToJalaliForView, convertTimeToJalaliForView } from "../../utils/convertDate";
import { usePatchAnswersMutation } from "../../api/questions"

const { Paragraph, Text } = Typography;

const AnswerItem = ({ data }) => {
  const [ PutLike ] =   usePatchAnswersMutation({})

  const increaseLike= ()=>{
    PutLike({like: data.like+1, questionListId: data.questionListId,id: data.id })
  }
  const increaseDislike= ()=>{
    PutLike({dislike: data.dislike+1, questionListId: data.questionListId,id: data.id })
  }

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
              <Text className={styles.itemTitle}>{data.name}</Text>
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
              <div className={styles.emoji_box}>
               <span className={styles.emojiIcon}>
                  <SmileOutlined className={styles.greenIcon}/>
                  <Text className={styles.dateTime_lable}>{data.like}</Text>
                </span>
                <span className={styles.emojiIcon}>
                <FrownOutlined className={styles.redIcon}/>
                <Text className={styles.dateTime_lable}>{data.dislike}</Text>
                </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24} className={styles.itemContent}>
          <Paragraph>{data.content}</Paragraph>
        </Col>
        <Col span={24} className={styles.btns_box}>
          <Button className={styles.green_button_border} onClick={increaseLike} icon={<SmileOutlined />}>
            {messages.GoodAnswer}
          </Button>
          <Button className={styles.red_button_border} onClick={increaseDislike} icon={<FrownOutlined />}>
            {messages.badAnswer}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AnswerItem;
