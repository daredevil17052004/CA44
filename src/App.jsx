import  React,{ useState,useContext, createContext } from 'react'
import './App.css'
import QuestionBox from './components/QuestionBox'
import questions from './questions'

export const myContext = React.createContext();

function App() {
  return(
    // <Quiz/>
      <QuestionBox />
  )
}

export default App
