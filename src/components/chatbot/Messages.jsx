import { useState, useEffect, useRef } from "react";import SmartToyIcon from "@mui/icons-material/SmartToy";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import api from "../../assets/api";
import Faqs from "./Faqs";

function Messages() {
	const [messages, setMessages] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [typing, setTyping] = useState(false);
	const messagesEndRef = useRef(null);

	const handleSubmit = async (messageText) => {
		const message = messageText || inputValue;
		if (!message.trim()) return;

		const newMessages = [...messages, { sender: "user", text: message }];
		setMessages(newMessages);
		setTyping(true);

		try {
			setTimeout(async () => {
				const response = await api.post("/api/chatbot/", { question: message });
				const chatbotResponse = response.data.answer;

				setMessages((prevMessages) => [...prevMessages, { sender: "chatbot", text: chatbotResponse }]);
				setTyping(false);
			}, 1000);
		} catch (error) {
			console.error("Error fetching chatbot response:", error);
			setTyping(false);
		}

		setInputValue("");
	};

	const handleQuestionClick = (question) => {
		handleSubmit(question);
	};

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<div>
			<div
				id="messages"
				className="flex flex-col space-y-4 p-3 overflow-y-auto mb-96 mt-24"
				style={{ maxHeight: "75vh" }}>
				{messages.map((msg, index) => (
					<div
						key={index}
						className="chat-message">
						{msg.sender === "user" ? (
							<div className="flex items-end justify-end">
								<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
									<div>
										<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-purple-600 text-white">
											{msg.text}
										</span>
									</div>
								</div>
								<AccountCircleIcon className="order-2 text-purple-600" />
							</div>
						) : (
							<div className="flex items-end">
								<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
									<div>
										<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
											{msg.text}
										</span>
									</div>
								</div>
								<SmartToyIcon className="text-purple-600" />
							</div>
						)}
					</div>
				))}

				{typing && (
					<div className="flex items-end">
						<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
							<div>
								<span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Typing...</span>
							</div>
						</div>
						<SmartToyIcon className="text-purple-600" />
					</div>
				)}

				<Faqs onQuestionClick={handleQuestionClick} />
				<div ref={messagesEndRef} />
			</div>

			<div className="fixed w-full bottom-2 pt-4 mb-2 sm:mb-0 px-2">
				<div className="relative flex">
					<span className="absolute inset-y-0 flex items-center">
						<button
							type="button"
							className="inline-flex items-center justify-center h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
							<MessageIcon />
						</button>
					</span>
					<input
						type="text"
						placeholder="Write your message!"
						className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 py-3"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyPress={(e) => {
							if (e.key === "Enter") handleSubmit();
						}}
					/>
					<div className="right-0 items-center inset-y-0 flex">
						<button
							type="button"
							className="inline-flex items-center justify-center px-4 py-3 transition duration-500 ease-in-out text-white bg-purple-500 hover:bg-purple-400 focus:outline-none"
							onClick={() => handleSubmit()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-6 w-6 transform rotate-90">
								<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Messages;
