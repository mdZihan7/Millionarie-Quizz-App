import "./app.css"

function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
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
      <div className="main">main</div>
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
