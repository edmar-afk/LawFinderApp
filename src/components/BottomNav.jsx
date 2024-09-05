import { NavLink } from "react-router-dom";import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

function BottomNav() {
	return (
		<>
			<div className="fixed z-100 w-[90%] h-14 -translate-x-1/2 bg-green-900 border border-green-200 rounded-full bottom-4 left-1/2 shadow-lg">
				<div className="grid h-full grid-cols-3 mx-auto">
					<NavLink
						to="/user-dashboard"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center px-5 rounded-s-full ${
								isActive ? "bg-green-500" : ""
							} group`
						}>
						<HomeOutlinedIcon className="text-green-100" />
						<span className="sr-only">Home</span>
					</NavLink>
					<NavLink
						to="/chatbot"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center px-5 ${isActive ? "bg-green-500" : ""} group`
						}>
						<QuestionAnswerOutlinedIcon className="text-green-100" />
						<span className="sr-only">Chatbot</span>
					</NavLink>
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center px-5 rounded-e-full ${
								isActive ? "bg-green-500" : ""
							} group`
						}>
						<Person2OutlinedIcon className="text-green-100" />
						<span className="sr-only">Profile</span>
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default BottomNav;
