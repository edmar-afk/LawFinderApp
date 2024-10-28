import { motion } from "framer-motion";
import Header from "../components/chatbot/Header";
import BotPress from "./BotPress";
import Messages from '../components/chatbot/Messages'
function Chatbot() {
	const ballVariants = {
		bounce: {
			y: [0, -20, 0], // Bouncing effect
			transition: {
				duration: 0.5,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
		changeColor: {
			backgroundColor: [
				"#3498db", // Blue
				"#e74c3c", // Red
				"#f1c40f", // Yellow
				"#2ecc71", // Green
				"#9b59b6", // Purple
				"#3498db", // Back to Blue
			],
			transition: {
				duration: 1.5,
				repeat: Infinity,
				ease: "linear",
			},
		},
	};

	const balls = [{ delay: "0s" }, { delay: "0.2s" }, { delay: "0.4s" }];

	return (
		<>
			<div className="flex-1 p:2 sm:p-6 justify-end flex flex-col h-full">
				<Header />
				{/* <div className="flex flex-col justify-center items-center -z-50 mt-44">
					<div className="flex space-x-4">
						{balls.map((ball, index) => (
							<motion.div
								key={index}
								className="w-8 h-8 rounded-full"
								variants={ballVariants}
								initial={{ y: 0 }}
								animate={{
									y: [0, -20, 0], // Bouncing
									backgroundColor: ballVariants.changeColor.backgroundColor,
								}}
								transition={{
									y: {
										duration: 0.5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: parseFloat(ball.delay),
									},
									backgroundColor: {
										duration: 1.5,
										repeat: Infinity,
										ease: "linear",
										delay: parseFloat(ball.delay),
									},
								}}
							/>
						))}
					</div>
					<p className="mt-4 text-lg">Loading chatbot, please wait...</p>
				</div> */}
				{/* <div className="my-8">
					<BotPress />
				</div> */}
				<div><Messages/></div>
			</div>
		</>
	);
}

export default Chatbot;
