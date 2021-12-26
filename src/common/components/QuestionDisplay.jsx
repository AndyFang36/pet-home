import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import questions from "../../app/data/questions.json";

export const QuestionDisplay = () => {
  const {questionId} = useParams();
  const question = questions.find(question => question.id === questionId);
  // const [answers, setAnswers] = useState(question["answers"]);

  return(
    <Box>

    </Box>
  );
}