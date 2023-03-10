import { Col, Row, Typography } from "antd";
import styles from "./details.module.scss";
import HeaderBox from "../Layout/HeaderBox";
import messages from "./messages";
import QuestionItem from "../QuestionList/QuestionItem";
import AnswerItem from "../QuestionList/AnswerItem";
import AnswerForm from "./AnswerForm";
import { useGetQuestionDetailQuery, useGetAnswerListQuery } from "../../api/questions"

const { Text } = Typography;

const QuestionDetails = ({id}) => {

  const { data } = useGetQuestionDetailQuery({id})
  const { data: answers } = useGetAnswerListQuery({id})
  return (
    <>
      <HeaderBox title={messages.QuestionDetailTitle} />
      <div className="container">
      <Row>
        <Col span={24} className={`${styles.mt32}`}>
          <QuestionItem data={data} nobtn/>
            {answers?.map((item, index) => {
              return <AnswerItem key={`question_${index}`} data={item} />;
            })}
        </Col>
        <Col span={24}>
         <Text className={styles.formTitle}>{messages.SubmitYourAnswer}</Text>
         <Text className={styles.fromSubTitle}>{messages.WriteYourAnswer}</Text>
         <AnswerForm qid={id} amount={answers?.length}/>
        </Col>
      </Row>
      </div>
    </>
  );
};
export default QuestionDetails;
