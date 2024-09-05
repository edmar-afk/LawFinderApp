import law from "../../assets/img/law.png";
function Welcome() {
	return (
		<>
			<div className="relative bg-green-700 w-full text-white rounded-2xl flex flex-row justify-between items-center p-2">
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
			</div>
			<div className="my-6">
				<p className="font-bold text-xl">Explore, Browse, and Ask</p>
				<p className="text-xs">Feel free to browse about law related to Violence Against Women (VAWC).</p>
			</div>
		</>
	);
}

export default Welcome;
