import { useState } from 'react';
import './App.css';
import Start from './Components/Start/start';
import End from './Components/End/end';
import Modal from './Components/Modal/modal';
import Question from './Components/Question/question';
import PLNQuestion from './Data/pln.json';

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const quizStartHandler = () => {
    setStep(2);
  }


  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(1);
  }

  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question
        data={PLNQuestion.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOffQuestion={PLNQuestion.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onReset={resetClickHandler}
      />}
      {step === 3 && <End
        results={answers}
        data={PLNQuestion.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
      />}
       {showModal && <Modal 
      onClose={() => setShowModal(false)}
      results={answers}
      data={PLNQuestion.data}
      />}
    </div>
  );
}

export default App;
