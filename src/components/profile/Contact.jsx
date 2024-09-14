/* eslint-disable react/no-unescaped-entities */ import { motion } from "framer-motion";
import policeBg from "../../assets/svg/police.svg";
import CallIcon from "@mui/icons-material/Call";

const animationSettings = (delay) => ({
	initial: { opacity: 0, x: -50 },
	animate: { opacity: 1, x: 0 },
	transition: { type: "spring", stiffness: 100, damping: 10, delay },
});

function Contact() {
	return (
		<motion.div
			className="flex flex-col font-bold"
			initial="initial"
			animate="animate">
			<motion.p
				initial={animationSettings(0.1).initial}
				animate={animationSettings(0.1).animate}
				transition={animationSettings(0.1).transition}>
				Don't hesitate to call us!
			</motion.p>
			<motion.div
				className="flex flex-row mt-8 items-start"
				initial={animationSettings(0.2).initial}
				animate={animationSettings(0.2).animate}
				transition={animationSettings(0.2).transition}>
				<motion.img
					src={policeBg}
					alt=""
					className="w-44"
					initial={animationSettings(0.3).initial}
					animate={animationSettings(0.3).animate}
					transition={animationSettings(0.3).transition}
				/>
				<motion.div
					className="ml-4 mt-8"
					initial={animationSettings(0.4).initial}
					animate={animationSettings(0.4).animate}
					transition={animationSettings(0.4).transition}>
					<motion.p
						initial={animationSettings(0.5).initial}
						animate={animationSettings(0.5).animate}
						transition={animationSettings(0.5).transition}>
						Call the Authority
					</motion.p>
					<motion.p
						className="text-xs font-extralight mt-2 flex items-center"
						initial={animationSettings(0.6).initial}
						animate={animationSettings(0.6).animate}
						transition={animationSettings(0.6).transition}>
						<CallIcon fontSize="small" />
						<span className="ml-1">09123456789</span>
					</motion.p>
					<motion.p
						className="text-xs font-extralight mt-2 flex items-center"
						initial={animationSettings(0.7).initial}
						animate={animationSettings(0.7).animate}
						transition={animationSettings(0.7).transition}>
						<CallIcon fontSize="small" />
						<span className="ml-1">09123456789</span>
					</motion.p>
					<motion.p
						className="text-xs font-extralight mt-2 flex items-center"
						initial={animationSettings(0.8).initial}
						animate={animationSettings(0.8).animate}
						transition={animationSettings(0.8).transition}>
						<CallIcon fontSize="small" />
						<span className="ml-1">09123456789</span>
					</motion.p>
				</motion.div>
			</motion.div>

			<motion.div
				className="px-4 mt-8 mb-24"
				initial={animationSettings(0.9).initial}
				animate={animationSettings(0.9).animate}
				transition={animationSettings(0.9).transition}>
				<motion.p
					initial={animationSettings(1).initial}
					animate={animationSettings(1).animate}
					transition={animationSettings(1).transition}>
					Attention Women and Children:
				</motion.p>
				<motion.p
					className="font-extralight text-xs mt-3"
					initial={animationSettings(1.1).initial}
					animate={animationSettings(1.1).animate}
					transition={animationSettings(1.1).transition}>
					Your safety is one of our top priorities. If you ever find yourself in a situation where you feel threatened
					or in danger, it is crucial to seek help immediately. Do not wait or hesitate—reach out to the emergency
					number provided above as soon as possible. This number is available to assist you in times of urgent need and
					ensure your safety and well-being. Remember, you have the right to feel safe and secure. There are resources
					and support systems in place to help you. Please take action promptly if you need assistance.
				</motion.p>
			</motion.div>
		</motion.div>
	);
}

export default Contact;
