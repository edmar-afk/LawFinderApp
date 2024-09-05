import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import { Link } from "react-router-dom";

function Header() {
	const userData = JSON.parse(localStorage.getItem("userData"));

	return (
		<>
			<div className="flex flex-row justify-between py-6 px-4 text-xs items-center pt-12">
				<Link to={"/logout"}>
					<DoorFrontOutlinedIcon className="text-red-600" />
				</Link>
				<p>{userData ? userData.first_name : "Visitor"}</p>
			</div>
		</>
	);
}

export default Header;
