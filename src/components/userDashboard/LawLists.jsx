import { motion } from "framer-motion";import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import { Laws } from "../../assets/LawData";
import { Link } from "react-router-dom";

function LawLists() {
	return (
		<div className="overflow-x-auto py-5 mb-24">
			<div className="flex flex-row justify-evenly flex-wrap">
				{Laws.map((law, index) => (
					<motion.div
						key={index}
						className="w-[150px] mb-3 p-6 bg-white border border-gray-200 rounded-lg shadow relative"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 10,
							delay: index * 0.1, // Slight delay for each item
						}}>
						<GavelOutlinedIcon className="text-green-700" />
						<div>
							<h5 className="mb-2 text-sm font-semibold tracking-tight text-green-200">{law.title}</h5>
						</div>
						<p className="mb-3 font-normal text-gray-500 text-xs">{law.subtitle}</p>
						<Link
							to={`/${law.url}`}
							className="inline-flex font-medium items-center text-blue-600 hover:underline">
							Read
							<svg
								className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 18 18">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
								/>
							</svg>
						</Link>
					</motion.div>
				))}
			</div>
		</div>
	);
}

export default LawLists;
