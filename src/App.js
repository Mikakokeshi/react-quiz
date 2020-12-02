import './App.css';
import React, {useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


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
  const lists = [
    { question: ["ユーザビリティを日本語で簡潔に一言で表すと何ですか？"],
       answers:["わかりやすさ","使いやすさ","視認性","有用性"],
       correct: "使いやすさ"
    },
    { question: [`デバイスの入力手段の特徴として、下記の穴を埋めたもので、正しいものを選んでください。PCは、[ ① ]を使って操作し、細かい操作が[ ② ]で、ホバーが使える。スマートフォンは、[ ③ ]を使って操作し、細かい操作が[ ④ ]で、ジェスチャーが使える。`],
      answers:["① ポインティングデバイス ② 苦手 ③ 指 ④ 容易", "① 指 ② 容易 ③ ポインティングデバイス ④ 苦手","① ポインティングデバイス ② 容易 ③ 指 ④ 苦手","① ポインティングデバイス ② 容易 ③ 指 ④ 苦手"],
      correct: "① ポインティングデバイス ② 苦手 ③ 指④ 容易"
    },
    { question: [`深くて狭い階層と、浅くて広い階層では、どちらのほうがユーザーは使いやすいですか？`],
      answers:["深くて狭い階層", "浅くて広い階層"],
      correct: "浅くて広い階層"
    },
    { question: [`プロジェクトの中でUIデザイナーが担うものとして、正しいものを選んでください。`],
      answers:["情報設計と視覚表現", "要件定義と視覚表現","情報設計と目標設定"],
      correct: "情報設計と視覚表現"
    },
    { question: [`KGIの説明として正しいものを選んでください。`],
      answers:["プロジェクトの最終的な目標", "最終目標へのプロセスの達成度をはかる指標","会社全体の目標管理"],
      correct: "プロジェクトの最終的な目標"
    },
    { question: [`KPIの説明として正しいものを選んでください。`],
      answers:["プロジェクトの最終的な目標", "最終目標へのプロセスの達成度をはかる指標","会社全体の目標管理"],
      correct: "最終目標へのプロセスの達成度をはかる指標"
    },
    { question: [`正しい課題と解決策を見つけるという役割を持っていて、2つの大きなダイヤモンドから構成されるフレームワークを何と言いますか？`],
      answers:["ダブルダイアモンド", "ダイアモンドループ","エメラルドループ"],
      correct: "ダブルダイアモンド"
    },
    { question: [`アジャイル開発の手法の特徴として、正しい方を選んでください。`],
      answers:["機能を１つ１つ開発→リリースしていく", "計画→設計→実装→テスト→納品という１つのサイクルで開発する"],
      correct: "機能を１つ１つ開発→リリースしていく"
    },
    { question: [`エキスパートレビューを行う効果として、正しいものを選んでください。`],
      answers:["インターフェース全体の一貫性の有無や、デザインのベストプラクティスに反しているかを事前に調査できる", "ユーザーの気持ちや深層心理を理解できる","プロダクトの使いやすさを検証できる"],
      correct: "インターフェース全体の一貫性の有無や、デザインのベストプラクティスに反しているかを事前に調査できる"
    },
    { question: [`Appleが作ったもので、iOSやmacOSなどについて書かれているデザインシステムはどちらですか`],
      answers:["Human Interface Guidelines（HIG・ヒューマンインターフェースガイドライン）","Material Design（マテリアルデザイン）"],
      correct: "Human Interface Guidelines（HIG・ヒューマンインターフェースガイドライン）"
    },
  ]

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
<Paper elevation={3} />

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
