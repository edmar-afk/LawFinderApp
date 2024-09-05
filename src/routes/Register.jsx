import { useState, useEffect } from "react";import { Link, useNavigate } from "react-router-dom";import api from "../assets/api";
import Swal from "sweetalert2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import logo from '../assets/img/icon.png'
function Register() {
	const [firstName, setFirstName] = useState("");
	const [mobileNum, setMobileNum] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [mobileNumError, setMobileNumError] = useState(""); // Separate error for mobile number
	const [passwordError, setPasswordError] = useState(""); // Separate error for password
	const [canSubmit, setCanSubmit] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// Function to check if passwords match
	const checkPasswordsMatch = () => {
		if (password && password2 && password !== password2) {
			setPasswordError("Passwords do not match");
		} else {
			setPasswordError(""); // Clear error if passwords match
		}
	};

	// Function to validate mobile number
	const validateMobileNum = (value) => {
		const regex = /^09\d{9}$/;
		if (!regex.test(value)) {
			setMobileNumError("Please enter an 11-digit number starting with '09'.");
		} else {
			setMobileNumError(""); // Clear error if valid
		}
	};

	const handleMobileNumChange = (e) => {
		const value = e.target.value;
		setMobileNum(value);
		validateMobileNum(value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		checkPasswordsMatch(); // Check password match every time password is updated
	};

	const handlePassword2Change = (e) => {
		setPassword2(e.target.value);
		checkPasswordsMatch(); // Check password match every time confirm password is updated
	};

	useEffect(() => {
		checkPasswordsMatch();

		// Check if all required fields are filled
		if (firstName && mobileNum && password && password2 && !mobileNumError && !passwordError) {
			setCanSubmit(true);
		} else {
			setCanSubmit(false);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [firstName, mobileNum, password, password2, mobileNumError, passwordError]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!canSubmit) return;
		setLoading(true);

		try {
			const res = await api.post("/api/register/", {
				first_name: firstName,
				username: mobileNum,
				mobile_num: mobileNum,
				password: password,
				password2: password2,
			});

			if (res.status === 201) {
				// Navigate to login page with success message
				navigate("/login", { state: { successMessage: "You have been registered successfully." } });
			} else {
				Swal.fire({
					title: "Error!",
					text: "Registration failed.",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		} catch (error) {
			let errorMessage = "Registration failed";
			if (error.response) {
				if (error.response.data && typeof error.response.data === "object") {
					errorMessage = Object.values(error.response.data).join(" ");
				} else if (error.response.data && error.response.data.detail) {
					errorMessage = error.response.data.detail;
				}
			}
			Swal.fire({
				title: "Error!",
				text: errorMessage,
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
								Register your account
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="firstName"
										className="block mb-2 text-sm font-medium text-gray-900">
										Full Name
									</label>
									<input
										type="text"
										name="firstName"
										id="firstName"
										className="bg-gray-50 text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
										placeholder="Enter your full name"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="mobileNum"
										className="block mb-2 text-sm font-medium text-gray-900">
										Mobile Number
									</label>
									<input
										type="number"
										name="mobileNum"
										id="mobileNum"
										className="bg-gray-50 text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
										placeholder="09XXXXXXXXX"
										value={mobileNum}
										onChange={handleMobileNumChange}
										required
									/>
									{mobileNumError && <p className="text-red-600 text-xs">{mobileNumError}</p>}{" "}
									{/* Display mobile number error */}
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
										className="bg-gray-50 text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
										value={password}
										onChange={handlePasswordChange}
										required
									/>
									{passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}{" "}
									{/* Display password error */}
								</div>
								<div>
									<label
										htmlFor="password2"
										className="block mb-2 text-sm font-medium text-gray-900">
										Confirm Password
									</label>
									<input
										type="password"
										name="password2"
										id="password2"
										placeholder="••••••••"
										className="bg-gray-50 text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
										value={password2}
										onChange={handlePassword2Change}
										required
									/>
								</div>

								<button
									type="submit"
									className={`w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
										!canSubmit || loading ? "opacity-50 cursor-not-allowed" : ""
									}`}
									disabled={!canSubmit || loading}>
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
										"Register"
									)}
								</button>
								<p className="text-sm font-light text-gray-500">
									Already have an account?{" "}
									<Link
										to="/login"
										className="font-medium text-green-600 hover:underline">
										Login here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Register;
