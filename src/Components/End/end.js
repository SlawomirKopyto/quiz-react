import { useState, useEffect } from 'react';
import './end.css'

const End = ({ results, data, onReset, onAnswersCheck }) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);
  
    useEffect(() => {
      
      let correct = 0;
      results.forEach((result, index) => {
        if (result.a === data[index].answer) {
          correct++;
        }
      });
      setCorrectAnswers(correct);
    }, []);
return (
    <div className="card">
      <div className="card-content card-end">
        <div className="content">
          <h3>Twój wynik</h3>
          <p>{correctAnswers} z {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <div className="card-button">
          <button className="button" onClick={onAnswersCheck}>Sprawdź swoje odpowiedzi</button>
          <button className="button button-repeat" onClick={onReset}>Spróbuj ponownie</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default End;