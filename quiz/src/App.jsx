import "./app.css"
import Quizzz from "./components/Quizzz";
import React, { useEffect, useState } from "react";

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  const moneyPyramid = [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 400"},
    {id:4, amount:"$ 600"},
    {id:5, amount:"$ 800"},
    {id:6, amount:"$ 1200"},
    {id:7, amount:"$ 2400"},
    {id:8, amount:"$ 3600"},
    {id:9, amount:"$ 4400"},
    {id:10, amount:"$ 56000"},
    {id:11, amount:"$ 64000"},
    {id:12, amount:"$ 720000"},
    {id:13, amount:"$ 840000"},
    {id:14, amount:"$ 880000"},
    {id:15, amount:"$ 960000"},
    {id:16, amount:"$ 1000000"},
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Quizzz data={data} 
          setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          />
        </div>
      </div>
      <div className="display">
        <ul className="moneylist">
          {moneyPyramid.map(m=>(
             
             <li className={questionNumber === m.id ? "moneylistItem active" : "moneylistItem"} >
             <span className="moneylistItemNumber">{m.id}</span>
             <span className="moneylistItemAmount">{m.amount}</span>
           </li>
          ))}
         
        </ul>
      </div>
    </div>
  );
}

export default App;
