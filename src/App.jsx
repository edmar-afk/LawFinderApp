import { useEffect } from "react";
import NoInterConnection from "./components/NoInternetConnection";
import Login from "./routes/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./routes/Register";
import Homepage from "./routes/Homepage";
import UserDashboard from "./routes/UserDashboard";
import Profile from "./routes/Profile";
import Chatbot from "./routes/Chatbot";
import SafeSpacesAct from "./routes/SafeSpacesAct";
import Vawc from "./routes/Vawc";
import AntiRape from "./routes/AntiRape";
import AntiChildAbuse from "./routes/AntiChildAbuse";
import Harrassment from "./routes/Harrassment";
import Trafficking from "./routes/Trafficking";

function Logout() {
	localStorage.clear();
	return <Navigate to="/" />;
}

const disableZoom = () => {
	// Disable zoom on mouse wheel
	window.addEventListener(
		"wheel",
		(e) => {
			if (e.ctrlKey) {
				e.preventDefault();
			}
		},
		{ passive: false }
	);

	// Disable zoom on keydown (Ctrl + '+' or '-' or '0')
	window.addEventListener("keydown", (e) => {
		if (
			(e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "0")) ||
			(e.key === "Meta" && (e.key === "+" || e.key === "-" || e.key === "0"))
		) {
			e.preventDefault();
		}
	});
};

function App() {
	useEffect(() => {
		disableZoom();

		return () => {
			// Cleanup event listeners on unmount
			window.removeEventListener("wheel", disableZoom);
			window.removeEventListener("keydown", disableZoom);
		};
	}, []);

	return (
		<>
			<NoInterConnection>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Homepage />}
						/>
						<Route
							path="/register"
							element={<Register />}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>
						<Route
							path="/user-dashboard"
							element={<UserDashboard />}
						/>
						<Route
							path="/profile"
							element={<Profile />}
						/>
						<Route
							path="/chatbot"
							element={<Chatbot />}
						/>
						<Route
							path="/safeSpaces"
							element={<SafeSpacesAct />}
						/>
						<Route
							path="/vawc"
							element={<Vawc />}
						/>
						<Route
							path="/anti-rape"
							element={<AntiRape />}
						/>
						<Route
							path="/child-abuse"
							element={<AntiChildAbuse />}
						/>
						<Route
							path="/harrassment"
							element={<Harrassment />}
						/>
						<Route
							path="/trafficking"
							element={<Trafficking />}
						/>
						<Route
							path="/logout"
							element={<Logout />}
						/>
					</Routes>
				</BrowserRouter>
			</NoInterConnection>
		</>
	);
}

export default App;
