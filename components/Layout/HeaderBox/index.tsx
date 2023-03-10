import styles from "../layout.module.scss";
import { Row, Col, Button, Space, Avatar, Typography } from "antd";
import { CaretDownOutlined, PlusOutlined } from "@ant-design/icons";
import messages from "../messages";
import { useRef } from "react";
import AddQuestionModal from "../../AddquestionModal";

const { Title } = Typography;
const avatarUrl = "https://randomuser.me/api/portraits/women/71.jpg";

const HeaderBox = ({ title }) => {
  const modalref = useRef(null);
  const show = () => {
    modalref?.current?.showModal();
  };
  return (
    <Row className={styles.header}>
      <Col className="container">
        <Row>
          <Col span={12}>
            <Title className={styles.page_title}>{title}</Title>
          </Col>
          <Col span={12} className={styles.header_user_side}>
            <Button
              type="primary"
              className={styles.green_button}
              onClick={show}
              icon={<PlusOutlined />}
            >
              {messages.NewQuestion}
            </Button>
            <AddQuestionModal reference={modalref} />
            <Space>
              <Avatar src={avatarUrl} size={44} />
              <Typography className={styles.user_name}>
                {messages.Username}
              </Typography>
              <CaretDownOutlined className={styles.user_menu_icon} />
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default HeaderBox;
