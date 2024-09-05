import Header from "../components/chatbot/Header";import Messages from "../components/chatbot/Messages";
function Chatbot() {
	return (
		<>
			<div className="flex-1 p:2 sm:p-6 justify-end flex flex-col h-full">
				<Header />
				<Messages />
			</div>
		</>
	);
}

export default Chatbot;
