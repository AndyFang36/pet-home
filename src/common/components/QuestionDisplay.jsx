import {Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import questions from "../../app/data/questions.json";
import {EmojiObjects, QuestionAnswer} from "@mui/icons-material";
import {Fragment} from "react";

export const QuestionDisplay = () => {
  const {questionId} = useParams();
  const question = questions.find(question => question.id === questionId);
  // const [answers, setAnswers] = useState(question["answers"]);

  return (
    <Box>
      <Paper sx={{padding: "1rem"}}>
        <Box id="QuestionBox">
          <Typography component="h5" variant="h5"><QuestionAnswer/>{question.title}</Typography>
          <Divider/>
          <Typography component="p" variant="body1">精神状态不好，一直在睡觉，眼睛睁不开，嘴角有点烂，吃东西的时候感觉很难下咽，舌头的前半部分是白色的。</Typography>
          <Typography component="p" variant="body2">{question["questioner"]} 提问于 {question["creationTime"]}</Typography>
        </Box>
        <Divider sx={{margin: "1rem 0"}}/>
        <Box id="AnswerBox">
          <Typography><EmojiObjects/>共 {question["answers"].length} 条回复</Typography>
          <Divider/>
          {question["answers"].map((answer, index) => (
            <Box key={"answer" + index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="..." src={answer.avatar}/>
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography>
                    <b>Brunch this weekend? 0支持 0回复</b>
                    <small style={{float: "right"}}><time>{answer.time}</time></small>
                  </Typography>}
                  secondary={<Typography sx={{display: 'inline'}} component="span" variant="body2">
                    {answer.content}
                  </Typography>}
                />
              </ListItem>
              <Divider variant="inset"/>
            </Box>
          ))}
        </Box>
        <Divider sx={{margin: "1rem 0"}}/>
      </Paper>
    </Box>
  );
}