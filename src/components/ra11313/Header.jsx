import safesBg from "../../assets/img/RA11313bg.jpg";

function Header() {
	return (
		<div className="relative -z-10 shadow-2xl">
			<img
				src={safesBg}
				alt=""
			/>
		</div>
	);
}

export default Header;
