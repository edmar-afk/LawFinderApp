import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

function Search() {
	return (
		<>
			<form className="flex items-center max-w-sm mx-auto">
				<label
					htmlFor="simple-search"
					className="sr-only">
					Search
				</label>
				<div className="relative w-full">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<GavelOutlinedIcon fontSize="small" className="text-gray-500"/>
					</div>
					<input
						type="text"
						id="simple-search"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5 placeholder-gray-400"
						placeholder="Search law..."
						required
					/>
				</div>
				<button
					type="submit"
					className="p-2.5 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
					<svg
						className="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
					<span className="sr-only">Search</span>
				</button>
			</form>
		</>
	);
}

export default Search;
