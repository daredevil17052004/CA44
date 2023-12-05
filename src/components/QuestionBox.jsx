import React, { useCallback, useContext, useState } from 'react'
import styles from './Q.module.css'
import st from './Quiz.module.css'
import questions from '../questions';
import Result from './Result'

export let myContext = React.createContext(null);

function QuestionBox(props) {
    const [curQues, setCurQues] = useState(-1)
    const [count,setCount] = useState(0)
    const [darkMode, setDarkMode] = useState(true);
    const [high,setHigh] = useState(false)

    const handleDark=()=>{
        setDarkMode(!darkMode)
    }

    console.log(darkMode)
    const handleAnswer=(isCorrect)=>{
       if(isCorrect){
        let news = curQues + 1
        setCurQues(news)
        console.log(curQues)

        let y = count + 1
        setCount(y);
       }else{
        let i = curQues +1
        setCurQues(i)
       }   
    }

    const handleHigh = () =>{
        setHigh(!high)        
    }
  

    if(curQues >= questions.length){
        return(
            <myContext.Provider value={{count,curQues}}>
                <Result/>
            </myContext.Provider>
        )
    }

    const handleStart = () =>{
        let news = 0
        setCurQues(news)
    }

    if(curQues === -1){
         
        return (
            <div>
                <div className={st.main}>
                    <div className={st.img}>
                
                    </div>
                    <div className={st.ite}>
                        React Quiz
                    </div>
                    <div className={st.item}>
                        <button className={st.bu} onClick={handleStart} >Play</button>
                    </div>
                </div>
            
            </div>
        )
    }
  return (

    <div className={darkMode?styles.dark:styles.light}>
        <div className={styles.container}>
            <div className={darkMode?styles.internals:styles.internalslight}>
                <div className={styles.ques}>
                  
                    <div className={darkMode?styles.no:styles.nolight}>
                        Question: {curQues+1} of 5
                    </div>
                    <div className={darkMode?styles.but:styles.butlight}>
                        <button onClick={handleDark}>{darkMode? 'Dark':"Light"}</button>
                    </div>
                </div>
                <div className={styles.saas}>
                    <div className={darkMode?styles.theQuestion:styles.theQuestionlight}>
                        <div className={high?styles.hh:styles.hu}>
                            {questions[curQues].text}
                        </div>
                    <div className={styles.nm}>
                        {
                            questions[curQues].options.map((option)=>{
                                return(
                                    <div className={darkMode?styles.buttt:styles.butttlight}>
                                        <button key={option.id} onClick={()=>handleAnswer(option.isCorrect)}>{option.text}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
                <div className={darkMode?styles.high:styles.highlight}>
                    <div>
                        <button onClick={handleHigh}>{high?'Remove Highlight':'Highlight'}</button>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default QuestionBox