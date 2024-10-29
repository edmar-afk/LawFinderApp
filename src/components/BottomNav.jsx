import { NavLink } from "react-router-dom";import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

function BottomNav() {
	return (
		<>
			<div className="fixed z-100 w-[90%] h-14 -translate-x-1/2 bg-purple-900 border border-purple-200 rounded-full bottom-4 left-1/2 shadow-lg">
				<div className="grid h-full grid-cols-3 mx-auto">
					<NavLink
						to="/user-dashboard"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center px-5 rounded-s-full ${
								isActive ? "bg-purple-500" : ""
							} group`
						}>
						<HomeOutlinedIcon className="text-purple-100" />
						<span className="sr-only">Home</span>
					</NavLink>
					<NavLink
						to="/chatbot"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center px-5 ${isActive ? "bg-purple-500" : ""} group`
						}>
						<QuestionAnswerOutlinedIcon className="text-purple-100" />
						<span className="sr-only">Chatbot</span>
					</NavLink>
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center px-5 rounded-e-full ${
								isActive ? "bg-purple-500" : ""
							} group`
						}>
						<Person2OutlinedIcon className="text-purple-100" />
						<span className="sr-only">Profile</span>
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default BottomNav;
