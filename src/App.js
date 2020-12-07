import './App.css';
import React, {useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import lists from "./quizData"

const useStyles = makeStyles({
    button:{
      margin: "5px",
      borderRadius: "10px",
      padding: "10px"
    },
    contentWrap:{
      textAlign:"center",
      marginTop: "24px"
    },
    question: {
      whiteSpace: "pre-line",
      verticalAlign: "bottom",
      marginBottom: "20px"
    },
    answerArea: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column"
    }
});

function App() {
  const classes = useStyles();


const [step, setStep] = useState(0)
const [score, setScore] = useState(0)
const [showScore, setShowScore] = useState(false)

const listsLength =  lists.length //3

const scorePlus = () => setScore(prevScore => prevScore + 1 )

const clickHandler = (e) => {
    if(lists[step].correct === e.currentTarget.value){
      alert("正解！")
      scorePlus()
    }else{
      alert("不正解！") 
    }

    if(step + 1< listsLength){ // 123 < 123
      setStep(step+1)
    }else {
      setShowScore(true)
    }
}

const QuizContents = ( 
<div className="App">
  <h1>UI/UX基礎知識</h1>
  { showScore ? (
    <div className={classes.contentWrap}>
            <p>お疲れ様でした！結果は{listsLength}問中{score}問正解！</p>
            <p>正答率{(score/listsLength)*100}%</p>
            {console.log(`スコア合計 ${score}`)}
    </div>
    ) : (
      <>
      <h2>Q{step+1}</h2>
        <div className={classes.contentWrap}> 
            <div className={classes.question}> {lists[step].question}</div>
            <div className={classes.answerArea}>
            { lists[step].answers.map((answer, index) =>  
                <Button className={classes.button} variant="contained" color="primary" 
                        keys={index} value={answer} onClick={clickHandler} >
                  {answer}
                </Button>
            )}
            </div>
        </div>
      </>
    )}
   </div>
  );

  return (
   <> 
    {QuizContents}
   </> 
  );
}

export default App;
