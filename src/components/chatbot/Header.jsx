/* eslint-disable react/no-unescaped-entities */ import SmartToyIcon from "@mui/icons-material/SmartToy";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
function Header() {
	const navigate = useNavigate();

	return (
		<>
			<div className="fixed w-full top-0 pt-12 bg-white flex sm:items-center justify-between py-3 px-4 border-b-2 border-gray-200">
				<div className="relative flex items-center space-x-4">
					<div className="relative">
						<SmartToyIcon
							className="text-purple-600"
							fontSize="large"
						/>
					</div>
					<div className="flex flex-col leading-tight">
						<div className="text-sm mt-1 flex items-center">
							<span className="text-gray-700 mr-3">VAWC In-charge Chat Bot</span>
						</div>
						<span className="text-xs text-gray-600">Feel free to ask related to VAWC</span>
					</div>
				</div>
				<div className="flex items-center space-x-2">
					<button
						onClick={() => navigate(-1)}
						className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
						<ArrowBackIosIcon />
					</button>
				</div>
			</div>
		</>
	);
}

export default Header;
