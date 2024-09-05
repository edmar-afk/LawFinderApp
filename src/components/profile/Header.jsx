import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
	const userData = JSON.parse(localStorage.getItem("userData")) || {}; // Default to an empty object if userData is null
	const isEmpty = Object.keys(userData).length === 0; // Check if userData is empty

	return (
		<>
			<div className="py-12">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ type: "spring", stiffness: 100, damping: 10 }}
					className="flex items-center">
					<AssignmentIndIcon
						sx={{ fontSize: 120 }}
						className="text-green-600"
					/>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}>
						<motion.p
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
							className="font-bold text-xl">
							{isEmpty ? "Guest" : userData.first_name}
						</motion.p>
						<motion.p
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
							className="text-sm">
							{isEmpty ? "No number" : userData.username}
						</motion.p>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}>
							<Link className="text-xs bg-red-600 text-white py-1 px-4 rounded-2xl">Logout</Link>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
}

export default Header;
