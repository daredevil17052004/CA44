import React, { useState } from 'react'
import { useContext } from 'react'
import QuestionBox, { myContext } from './QuestionBox'
import style from './Result.module.css'

function Result() {
  let usng = useContext(myContext)
  let [re, setRe] = useState(false)


  const handleRestart= () =>{
    setRe(true);
  }
  if (re) {
    return <QuestionBox />;
  }

  return (
    <div className={style.container}>
      <div className={style.nh}>
        <div className={style.main}>
          Final Result
        </div>
        <div className={style.num}>
          {usng.count}/5
        </div>
        <div className={style.restart}>
          <button className={style.re} onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </div>
  )
}

export default Result