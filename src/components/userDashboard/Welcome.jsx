import { motion } from "framer-motion";
import law from "../../assets/img/icon.png";

function Welcome() {
	return (
		<>
			<motion.div
				className="bg-green-700 w-full text-white rounded-2xl flex flex-row justify-between items-center p-2"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ type: "spring", stiffness: 100, damping: 15 }}>
				<div>
					<img
						src={law}
						style={{ transform: "scaleX(-1)" }}
						alt=""
						className="w-96"
					/>
				</div>
				<div>
					<p className="text-lg text-left leading-5">Welcome to Law Finder App!</p>
					<p className="text-xs text-left pt-2">
						Your go-to app for finding legal information and resources with ease.
					</p>
				</div>
			</motion.div>

			<motion.div
				className="my-6"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}>
				<p className="font-bold text-xl">Explore, Browse, and Ask</p>
				<p className="text-xs">
					Feel free to browse about law related to Anti-Violence Against Women and their Children (VAWC).
				</p>
			</motion.div>
		</>
	);
}

export default Welcome;
