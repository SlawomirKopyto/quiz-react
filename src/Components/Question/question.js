import { useState, useRef } from "react";
import './question.css'

const Question = ({ data, onAnswerUpdate, numberOffQuestion, activeQuestion, onSetActiveQuestion, onSetStep, onReset }) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState('');
  const radioWrapper = useRef();


  const handleSelect = (option) => {
    if (selected === option && selected === data.answer) return "select";
    else if (selected === option && selected !== data.answer) return "wrong";
    else if (option === data.answer) return "select";
  };

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError('');
    }
  }

  const nextClickHandler = () => {
    if (selected === '') {
      return setError('Zaznacz jakąś odpowiedź!')
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if (activeQuestion < numberOffQuestion - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  }
  return (
    <div className="card">
      <div className="image"></div>
      <div className="card-content">
        <div className="content">
          <h2 className="">{data.question}</h2>
          <div className="control" ref={radioWrapper}>
            {data.options.map((option, i) => (
              <button name="answer" className={`singleOption  ${selected && handleSelect(option)}`} key={i} value={option} onClick={changeHandler} disabled={selected}>
                {option}
              </button>
            ))}
          </div>
          {error && <div className="text-danger">{error}</div>}
          <div className="button-navigation">
            <button className="button" onClick={onReset}>Reset</button>
            <button className="button" onClick={nextClickHandler}>Dalej</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;