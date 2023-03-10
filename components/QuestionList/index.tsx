import { Col, Row } from "antd";
import { useEffect } from "react";
import styles from "./questionList.module.scss";
import HeaderBox from "../Layout/HeaderBox";
import messages from "./messages";
import QuestionItem from "./QuestionItem";
import {
  useGetQuestionListQuery,
} from "../../api/questions";

const QuestionList = () => {

  const { data } = useGetQuestionListQuery({});
  return (
    <>
      <HeaderBox title={messages.QuestionListTitle} />
      <Row>
        <Col span={24} className={`${styles.mt32}`}>
          <div className="container">
            {data?.map((item, index) => {
              return <QuestionItem key={`question_${index}`} data={item} />;
            })}
          </div>
        </Col>
      </Row>
    </>
  );
};
export default QuestionList;
