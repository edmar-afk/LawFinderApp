/* eslint-disable react/no-unescaped-entities */ import { useState, useEffect } from "react";import { Link, useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Swal from "sweetalert2";
import api from "../assets/api";
import logo from "../assets/img/icon.png";

const Login = () => {
	const [username, setUsername] = useState(""); // Changed to username
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.state && location.state.successMessage) {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: location.state.successMessage,
				showConfirmButton: false,
				timer: 1500,
				customClassName: {
					title: "text-lg font-semibold text-xs",
					icon: "p-2 rounded-full w-16 h-14",
					popup: "bg-gray-100 rounded-lg shadow-md max-w-xs max-h-56",
				},
			});
		}
	}, [location]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await api.post("/api/token/", { username, password }); // Using username

			if (res.status === 200) {
				localStorage.setItem("ACCESS_TOKEN", res.data.access);
				localStorage.setItem("REFRESH_TOKEN", res.data.refresh);

				const userRes = await api.get("/api/user/", {
					headers: {
						Authorization: `Bearer ${res.data.access}`,
					},
				});

				localStorage.setItem("userData", JSON.stringify(userRes.data));

				navigate("/user-dashboard");
			} else {
				Swal.fire({
					title: "Error!",
					text: "Login failed.",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		} catch (error) {
			Swal.fire({
				title: "Error!",
				text: error.response?.data?.detail || "Login failed",
				icon: "error",
				confirmButtonText: "OK",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Link
				to="/"
				className="p-3 flex items-center fixed top-14">
				<ArrowBackIcon className="text-gray-800" />
			</Link>
			<section className="bg-white h-screen py-24">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<a
						href="#"
						className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
						<img
							className="w-8 h-8 mr-2"
							src={logo}
							alt="logo"
						/>
						Law Finder
					</a>
					<div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
								Login to your account
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="username"
										className="block mb-2 text-sm font-medium text-gray-900">
										Mobile Number
									</label>
									<input
										type="number" // Changed to text for username input
										name="username"
										id="username"
										className="bg-gray-50 text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 placeholder-gray-400"
										placeholder="Enter your mobile number"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 placeholder-gray-400"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>

								<button
									type="submit"
									className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center">
									{loading ? (
										<svg
											className="w-5 h-5 text-white animate-spin"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24">
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8v3.08a5 5 0 00-4.91 4.91H4z"></path>
										</svg>
									) : (
										"Login"
									)}
								</button>
								<p className="text-sm font-light text-gray-500">
									Don’t have an account yet?{" "}
									<Link
										to={"/register"}
										className="font-medium text-green-600 hover:underline">
										Register here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
