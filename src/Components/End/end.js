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

  let percent = ((correctAnswers / data.length) * 100);

  const text = () => {
    if (percent < 55)
      return 'Niestety poszło Ci bardzo słabo';
    else
      if (percent > 80)
        return 'Świetnie, jesteś bardzo dobry';
      else {
        return 'Nie jest źle ale może być lepiej';
      }
  };

  return (
    <div className="card">
      <div className="card-content card-end">
        <div className="content">
          <h3>Twój wynik</h3>
          <p>{correctAnswers} z {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>{text(percent)}</strong></p>
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