import React, { useState } from 'react';
import './estilo.css';

const perguntas = [
    "Quem é o atual campeão da Fórmula E?",
    "Qual cidade teve a primeira corrida da Fórmula E?",
    "Quantas etapas tem uma temporada padrão da Fórmula E?",
    "Qual é o recorde de vitórias numa única temporada da Fórmula E?",
    "Qual equipe tem mais títulos de construtores na Fórmula E?",
    "Quem foi o primeiro campeão da Fórmula E?",
    "Qual equipe venceu o primeiro título de construtores da Fórmula E?",
    "Qual é o circuito mais curto da Fórmula E?",
    "Qual é o nome do carro usado na primeira geração da Fórmula E?",
    "Quantas equipes competem na temporada 2023-24?",
    "Quem é o piloto com mais vitórias na história da Fórmula E?",
    "Em que ano foi realizada a primeira temporada da Fórmula E?",
    "Quantos carros uma equipe podia usar até a temporada 2017-18?",
    "Qual equipe venceu o título de construtores na temporada 2022-23?",
    "Quantas cidades sediaram corridas de Fórmula E até 2024?",
    "Qual a velocidade máxima dos carros da Gen2 da Fórmula E?",
    "Qual piloto tem o maior número de GPs disputados na Fórmula E?",
    "Em qual cidade a primeira corrida da temporada 2019-20 foi realizada?"
];

const respostas = [
    "Nyck de Vries",
    "Pequim",
    "Tem 15 etapas por temporada",
    "Jean-Éric Vergne ganhou 4 corridas na temporada 2017–18",
    "DS Techeetah",
    "Nelson Piquet Jr.",
    "Renault e.dams",
    "Mônaco",
    "Spark-Renault SRT 01E",
    "11 equipes",
    "Lucas di Grassi e Sébastien Buemi com 13 vitórias",
    "2014",
    "4 carros por equipe",
    "Envision Racing",
    "33 cidades",
    "220 km/h",
    "Lucas di Grassi",
    "Riade, Arábia Saudita"
];

const opcoes = [
    ["Nyck de Vries", "António Félix da Costa", "Jean-Éric Vergne", "Lucas di Grassi"],
    ["Pequim", "Paris", "Nova York", "Londres"],
    ["Tem 10 etapas por temporada", "Tem 12 etapas por temporada", "Tem 15 etapas por temporada", "Tem 20 etapas por temporada"],
    ["Sebastien Buemi ganhou 3 corridas na temporada 2016–17", "Jean-Éric Vergne ganhou 4 corridas na temporada 2017–18", 
     "Lucas di Grassi ganhou 5 corridas na temporada 2018–19", "António Félix da Costa ganhou 6 corridas na temporada 2019–20"],
    ["DS Techeetah", "Audi Sport ABT Schaeffler", "Mercedes-EQ Formula E Team", "Envision Virgin Racing"],
    ["Nelson Piquet Jr.", "Lucas di Grassi", "Sébastien Buemi", "Jean-Éric Vergne"],
    ["Renault e.dams", "Audi Sport ABT Schaeffler", "DS Techeetah", "Mercedes-EQ Formula E Team"],
    ["Mônaco", "Berlim", "Nova York", "Cidade do México"],
    ["Spark-Renault SRT 01E", "Spark SRT05e", "Porsche 99X Electric", "Jaguar I-Type 6"],
    ["10 equipes", "11 equipes", "12 equipes", "13 equipes"],
    ["Lucas di Grassi", "Sébastien Buemi", "Mitch Evans", "Jean-Éric Vergne"],
    ["2013", "2014", "2015", "2016"],
    ["2 carros por equipe", "3 carros por equipe", "4 carros por equipe", "5 carros por equipe"],
    ["DS Techeetah", "Envision Racing", "Mercedes-EQ Formula E Team", "Jaguar TCS Racing"],
    ["30 cidades", "31 cidades", "32 cidades", "33 cidades"],
    ["200 km/h", "210 km/h", "220 km/h", "230 km/h"],
    ["Lucas di Grassi", "Sébastien Buemi", "Stoffel Vandoorne", "Jake Dennis"],
    ["Berlim, Alemanha", "Londres, Reino Unido", "Riade, Arábia Saudita", "Mônaco, Monte Carlo"]
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    
    const getRandomQuestions = () => {
        const shuffledQuestions = perguntas
            .map((question, index) => ({ question, index }))
            .sort(() => Math.random() - 0.5);
        
        return shuffledQuestions.slice(0, 10).map(item => item.index);
    };

    const [selectedQuestions] = useState(getRandomQuestions());

    const handleAnswerOptionClick = (option) => {
        setSelectedOption(option);
        const correctAnswer = respostas[selectedQuestions[currentQuestion]];
        if (option === correctAnswer) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < selectedQuestions.length) {
            setTimeout(() => {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
                setIsCorrect(null);
            }, 1500);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz-container">
            <div className="quiz-card"> {/* Card container */}
                {showScore ? (
                    <div className="score-section">
                        <h2>Você acertou {score} de {selectedQuestions.length} perguntas!</h2>
                    </div>
                ) : (
                    <div className="quiz-content">
                        <div className="question-section">
                            <h3 className="question">{perguntas[selectedQuestions[currentQuestion]]}</h3>
                        </div>
                        <div className="answer-section">
                            {opcoes[selectedQuestions[currentQuestion]].map((option) => {
                                let buttonClass = 'answer-button';
                                if (selectedOption === option) {
                                    buttonClass += isCorrect === true ? ' correct' : ' incorrect';
                                }
                                return (
                                    <button
                                        key={option}
                                        className={buttonClass}
                                        onClick={() => handleAnswerOptionClick(option)}
                                        disabled={selectedOption !== null} 
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
