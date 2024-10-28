/* eslint-disable react/prop-types */
import { Choices } from "../../assets/LawData";
function Faqs({ onQuestionClick }) {
	return (
		<div className="bg-white/80 flex flex-row flex-wrap justify-evenly fixed bottom-24 right-2">
			{Choices.map((choice, index) => (
				<div
					key={index}
					className="p-0.5">
					<p
						className="bg-green-400 w-fit rounded-lg py-0.5 px-2 text-white text-xs cursor-pointer"
						onClick={() => onQuestionClick(choice.question)}>
						{choice.question}
					</p>
				</div>
			))}
		</div>
	);
}

export default Faqs;
