import { Link } from "react-router-dom";
import icon from "../assets/img/icon.png";

function Homepage() {
	return (
		<>
			<section className="pt-24 bg-gray-50 h-full">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="text-center">
						<p className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
							Law Finder App
						</p>
						<h1 className="max-w-2xl pt-4 mx-auto px-6 text-sm text-gray-600 font-inter">
							Your specialized resource for navigating the intricacies of Violence Against Women and Children (VAWC)
							laws.
						</h1>
						<div className="flex justify-center mx-auto py-8">
							<img
								className="px-4 w-full"
								src={icon}
							/>
						</div>
						<div className="flex flex-row justify-evenly py-9">
							<Link
								to={'/login'}
								title=""
								className="inline-flex items-center mx-4 justify-center w-full px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-green-600 border-2 border-transparent sm:w-auto rounded-xl"
								role="button">
								Login
							</Link>
							
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Homepage;
