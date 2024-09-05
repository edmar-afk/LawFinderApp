import { useState, useEffect, useRef } from "react";import SmartToyIcon from "@mui/icons-material/SmartToy";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import api from "../../assets/api";

function Messages() {
	// State to store messages, input value, and typing status
	const [messages, setMessages] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [typing, setTyping] = useState(false); // State to manage typing animation
	const messagesEndRef = useRef(null); // Reference to the end of the message container

	// Function to handle message submission
	const handleSubmit = async () => {
		if (!inputValue.trim()) return;

		// Add the user's message to the message list
		const newMessages = [...messages, { sender: "user", text: inputValue }];
		setMessages(newMessages);

		// Show typing animation
		setTyping(true);

		try {
			// Simulate a 1-second delay before sending the message
			setTimeout(async () => {
				// Send the message to the chatbot API
				const response = await api.post("/api/chatbot/", { question: inputValue });
				const chatbotResponse = response.data.answer;

				// Add the chatbot's response to the message list and hide typing animation
				setMessages((prevMessages) => [...prevMessages, { sender: "chatbot", text: chatbotResponse }]);
				setTyping(false);
			}, 1000); // 1 second delay before showing chatbot response
		} catch (error) {
			console.error("Error fetching chatbot response:", error);
			setTyping(false); // Hide typing animation in case of error
		}

		// Clear the input field after submission
		setInputValue("");
	};

	// Function to scroll to the bottom of the messages
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	// Scroll to the bottom whenever the messages array changes
	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<div>
			<div
				id="messages"
				className="flex flex-col space-y-4 p-3 overflow-y-auto mb-24 mt-24"
				style={{ maxHeight: "75vh" }} // Ensure the message area has a maximum height
			>
				{messages.map((msg, index) => (
					<div
						key={index}
						className="chat-message">
						{msg.sender === "user" ? (
							<div className="flex items-end justify-end">
								<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
									<div>
										<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-green-600 text-white">
											{msg.text}
										</span>
									</div>
								</div>
								<AccountCircleIcon className="order-2 text-green-600" />
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
								<SmartToyIcon className="text-green-600" />
							</div>
						)}
					</div>
				))}

				{/* Show typing animation */}
				{typing && (
					<div className="flex items-end">
						<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
							<div>
								<span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Typing...</span>
							</div>
						</div>
						<SmartToyIcon className="text-green-600" />
					</div>
				)}

				{/* Reference to scroll to */}
				<div ref={messagesEndRef} />
			</div>

			{/* Input area */}
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
						onChange={(e) => setInputValue(e.target.value)} // Update input field
						onKeyPress={(e) => {
							if (e.key === "Enter") handleSubmit(); // Submit on pressing Enter
						}}
					/>
					<div className="right-0 items-center inset-y-0 flex">
						<button
							type="button"
							className="inline-flex items-center justify-center px-4 py-3 transition duration-500 ease-in-out text-white bg-green-500 hover:bg-green-400 focus:outline-none"
							onClick={handleSubmit} // Handle click event to submit message
						>
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
