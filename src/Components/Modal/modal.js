import React from 'react';
import './modal.css'

const Modal = ({ onClose, results, data }) => {
	return (
		<div className="modal is-active">
			<div className="modal-background" onClick={onClose}></div>
			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">Twoje odpowiedzi</p>
					<button className="delete" onClick={onClose}>x</button>
				</header>
				<section className="modal-card-body content">
					<ul>
						{results.map((result, i) => (
							<li key={i} >
								<p><strong>{result.q}</strong></p>
								<p className={result.a === data[i].answer ? 'background-success text' : 'background-danger text'}>Twoja odpowiedź: {result.a}</p>
								{result.a == data[i].answer && <p className="background-explain text">Wyjaśnienie: {data[i].explain}</p>}
								{result.a !== data[i].answer && <p className="background-link text">Poprawna odpowiedź: {data[i].answer}</p>}
								{result.a !== data[i].answer && <p className="background-explain text">Wyjaśnienie: {data[i].explain}</p>}
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
}

export default Modal;