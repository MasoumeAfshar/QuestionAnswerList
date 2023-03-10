import QuestionDetails from '../../components/QuestionDetails';
import { useRouter } from "next/router";

export default function QuestionDetailPage() {
  const {query, isReady} = useRouter();
  const { id } = query;
  return (
    <>
      {isReady && <QuestionDetails id={id} />}
    </>
  )
}