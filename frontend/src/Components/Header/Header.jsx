import { Link } from "react-router-dom";
import "./Header.css"


const Header = () => {
	return (
		<header className="w-full h-36 flex flex-col items-center justify-center bg-black">
			<h1 className="lg-name font-bold text-8xl ">SRI VINAYAGA HOMEFOODS</h1>
			{/* <nav className="flex items-center justify-center space-x-20">
				<h1>Navbar</h1>
				<div className="flex items-center gap-10">
					<Link to="/">Home</Link>
					<Link to="/aboutus">About Us</Link>
				</div>
			</nav> */}
		</header>
	);
};

export default Header;
