import { useState } from "react";
import React from "react";
import quizQuestions from "../../data/data";

function Quiz() {
    const [index, setIndex] = useState(0); // Current question index
    const [selectedAnswer, setSelectedAnswer] = useState(null); // User's selected option
    const [isCorrect, setIsCorrect] = useState(null); // Track correct or incorrect answer
    const question = quizQuestions[index]; // Current question data

    // Function to handle answer selection
    const handleAnswerClick = (option) => {
        if (selectedAnswer === null) { // Prevent re-selection
            setSelectedAnswer(option);
            setIsCorrect(option === question.answer); // Check if the answer is correct
        }
    };

    // Function to go to the next question
    const handleNext = () => {
        if (index < quizQuestions.length - 1) {
            setIndex(index + 1);
            setSelectedAnswer(null); // Reset selection for the next question
            setIsCorrect(null); // Reset correctness check
        }
    };

    return (
        <div className="bg-white max-w-2xl m-auto mt-5 flex flex-col gap-5 rounded-lg pl-12 pt-5 pr-12">
            <h1 className="text-xl">Quiz App</h1>
            <hr className="bg-gray-500 border-none h-[1px]" />

            {/* Display Dynamic Question */}
            <h2 className="text-xl">{index + 1}. {question.question}</h2>

            {/* Display Dynamic Options */}
            <ul className="">
                {question.options.map((option, i) => (
                    <li 
                        key={i} 
                        onClick={() => handleAnswerClick(option)}
                        className={`flex items-center h-20 pl-5 rounded-lg text-sm cursor-pointer border border-black m-4 
                        ${selectedAnswer === option ? (isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white") : ""} 
                        ${selectedAnswer !== null ? "pointer-events-none" : ""} `}
                    >
                        {option}
                    </li>
                ))}
            </ul>

            {/* Feedback Message */}
            {selectedAnswer !== null && (
                <p className={`text-lg font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                    {isCorrect ? "✅ Correct Answer!" : `❌ Wrong! The correct answer is: ${question.answer}`}
                </p>
            )}

            {/* Next Button */}
            <button 
                onClick={handleNext} 
                className={`bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 m-4 
                ${index === quizQuestions.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`} 
                disabled={index === quizQuestions.length - 1 || selectedAnswer === null}
            >
                Next
            </button>

            {/* Quiz Progress */}
            <div className="m-auto">
                <p>{index + 1} of {quizQuestions.length} questions</p>
            </div>
        </div>
    );
}

export default Quiz;
