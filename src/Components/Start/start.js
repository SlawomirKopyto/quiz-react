import './start.css'
const Start = ({ onQuizStart }) => {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h1>Witamy w Quizie</h1>
            <h4>Zasady</h4>
            <ol className='card-description'>
              <li>Każde pytanie ma cztery odpowiedzi z jedną poprawną</li>
              <li>Po wybraniu odpowiedzi nie można jej cofnąć</li>
              <li>Po 2 minutach nieaktywności powrót do ekranu głównego</li>
            </ol>
            <p>Powodzenia !!!</p>
            <button className="button" onClick={onQuizStart}>Start</button>
          </div>
        </div>
      </div>
    )
  }
  export default Start;