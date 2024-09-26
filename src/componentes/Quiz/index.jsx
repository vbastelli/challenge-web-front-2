import React, { useState } from 'react';
import './estilo.css'; // Importando o CSS

const perguntas = [
    "Quem é o atual campeão da Fórmula E?",
    "Qual cidade teve a primeira corrida da Fórmula E?",
    "Quantas etapas tem uma temporada padrão da Fórmula E?",
    "Qual é o recorde de vitórias numa única temporada da Fórmula E?",
    "Qual equipe tem mais títulos de construtores na Fórmula E?"
];

const respostas = [
    "Nyck de Vries",
    "Pequim",
    "Tem 15 etapas por temporada",
    "Jean-Éric Vergne ganhou 4 corridas na temporada 2017–18",
    "DS Techeetah"
];

const opcoes = [
    ["Nyck de Vries", "António Félix da Costa", "Jean-Éric Vergne", "Lucas di Grassi"],
    ["Pequim", "Paris", "Nova York", "Londres"],
    ["Tem 10 etapas por temporada", "Tem 12 etapas por temporada", "Tem 15 etapas por temporada", "Tem 20 etapas por temporada"],
    ["Sebastien Buemi ganhou 3 corridas na temporada 2016–17", "Jean-Éric Vergne ganhou 4 corridas na temporada 2017–18", "Lucas di Grassi ganhou 5 corridas na temporada 2018–19", "António Félix da Costa ganhou 6 corridas na temporada 2019–20"],
    ["DS Techeetah", "Audi Sport ABT Schaeffler", "Mercedes-EQ Formula E Team", "Envision Virgin Racing"]
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswerOptionClick = (option) => {
        setSelectedOption(option);
        const correctAnswer = respostas[currentQuestion];
        if (option === correctAnswer) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }

        // Avança para a próxima pergunta após um tempo
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < perguntas.length) {
            setTimeout(() => {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
                setIsCorrect(null);
            }, 1500); // Espera 1.5 segundos
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz-container">
            <div className="quiz-card"> {/* Card container */}
                {showScore ? (
                    <div className="score-section">
                        <h2>Você acertou {score} de {perguntas.length} perguntas!</h2>
                    </div>
                ) : (
                    <div className="quiz-content">
                        <div className="question-section">
                            <h3 className="question">{perguntas[currentQuestion]}</h3>
                        </div>
                        <div className="answer-section">
                            {opcoes[currentQuestion].map((option) => {
                                let buttonClass = 'answer-button';
                                if (selectedOption === option) {
                                    buttonClass += isCorrect === true ? ' correct' : ' incorrect';
                                }
                                return (
                                    <button
                                        key={option}
                                        className={buttonClass}
                                        onClick={() => handleAnswerOptionClick(option)}
                                        disabled={selectedOption !== null} // Desabilita botões após uma seleção
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
