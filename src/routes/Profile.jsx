import BottomNav from "../components/BottomNav";
import Contact from "../components/profile/Contact";
import Header from "../components/profile/Header";
function Profile() {
	return (
		<>
			<div className="bg-white px-4">
				<Header />
				<Contact/>
			</div>
			<BottomNav />
		</>
	);
}

export default Profile;
