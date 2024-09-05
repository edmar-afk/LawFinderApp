import BottomNav from "../components/BottomNav";import Header from "../components/userDashboard/Header";
import LawLists from "../components/userDashboard/LawLists";
import Search from "../components/userDashboard/Search";
import Welcome from "../components/userDashboard/Welcome";
function UserDashboard() {
	return (
		<>
			<div className="bg-white px-4">
				<Header />
                <Welcome />
                <Search />
                <LawLists/>
			</div>
			<BottomNav />
		</>
	);
}

export default UserDashboard;
