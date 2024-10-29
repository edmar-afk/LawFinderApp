/* eslint-disable react/prop-types */import React, { useState } from "react";
import { Choices } from "../../assets/LawData";

function Faqs({ onQuestionClick }) {
	// State to keep track of clicked questions
	const [hiddenQuestions, setHiddenQuestions] = useState([]);

	const handleQuestionClick = (question) => {
		onQuestionClick(question);
		// Add question to the hiddenQuestions state
		setHiddenQuestions((prev) => [...prev, question]);
	};

	return (
		<div className="bg-white/80 flex flex-row flex-wrap justify-evenly fixed bottom-24 right-2">
			{Choices.map((choice, index) => (
				<div
					key={index}
					className="p-0.5">
					{/* Conditionally render the question based on whether it's in hiddenQuestions */}
					{!hiddenQuestions.includes(choice.question) && (
						<p
							className="bg-green-400 w-fit rounded-lg py-0.5 px-2 text-white text-xs cursor-pointer"
							onClick={() => handleQuestionClick(choice.question)}>
							{choice.question}
						</p>
					)}
				</div>
			))}
		</div>
	);
}

export default Faqs;
