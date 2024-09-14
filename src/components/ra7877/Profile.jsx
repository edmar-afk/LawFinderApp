import harrassmentProfile from "../../assets/img/RA7877Profile.jpg";import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";import { Link } from "react-router-dom";
import Description from "./Description";
function Profile() {
	return (
		<>
			<div className="mx-2 -mt-8 shadow-2xl">
				<div className="bg-white w-full border-t-4 border-purple-700 border-b-4 rounded-t-2xl px-4 z-50 p-4">
					<div className="flex flex-row">
						<img
							src={harrassmentProfile}
							className="w-32 rounded-2xl hover:scale"
							alt=""
						/>
						<div className="flex flex-col ml-3">
							<p className="font-bold">R.A. 7877 - Anti-Sexual Harassment Act of 1995</p>
							<p className="text-xs border-2 border-purple-800 rounded-full w-fit py-0.5 px-3">
								Enacted on Feb. 14, 1995
							</p>
							<Link
								to={"/user-dashboard"}
								className="text-xs mt-4 font-bold underline text-red-700">
								<KeyboardBackspaceIcon fontSize="small" /> Go back
							</Link>
						</div>
					</div>
					<Description />
				</div>
			</div>
			<Link
				to={"/user-dashboard"}
				className="py-8 flex justify-center bg-purple-50 w-full">
				Back
			</Link>
		</>
	);
}

export default Profile;
