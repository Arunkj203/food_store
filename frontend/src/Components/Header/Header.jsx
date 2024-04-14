import { Link } from "react-router-dom";
import "./Header.css"
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import the menu icon
import {
	Alert,
	Button,
	IconButton,
	InputAdornment,
	Modal,
	TextField,
} from "@mui/material";

const Header = () => {

	const [isSticky, setIsSticky] = useState(false);
	const [open, setOpen] = useState(false);

	const [data, setData] = useState([])

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const show_list = () => {

		setOpen(true)
		const existingOrderList = sessionStorage.getItem('order_list')
		if (existingOrderList) {
			const cartItems = new Map(JSON.parse(existingOrderList))
			setData(Array.from(cartItems.entries()))
		}

		else {
			setOpen(true)
		}
	}
	return (
		<header className={`w-full  flex flex-col items-center justify-center bg-black ${isSticky ? "fixed top-0 h-24" : "h-28"
			} z-10 transition-all duration-300 ease-in-out`}>

			{
				isSticky ?

					<div className="flex items-center justify-between  w-full px-8 ">
						<h1 className="lg-name font-bold text-xl">SRI VINAYAGA HOMEFOODS</h1>
						<button className="flex items-center space-x-2 px-4 py-2 text-slate-200 text-3xl rounded-md" onClick={show_list}>
							<FiMenu /> {/* Menu icon */}
							<span className="text-sm">Show Menu List</span>
						</button>

					</div> : <div>
						<h1 className="lg-name font-bold  text-2xl sm:text-4xl md:text-5xl lg:text-6xl ">SRI VINAYAGA HOMEFOODS</h1>
					</div>
			}

			<Modal
				open={open}
				onClose={() => {
					setOpen(false);
				}}
				placement="bottom"
			>

				<div className="w-4/5 flex justify-center items-center h-screen ml-5" >
					<div class=" h-auto w-4/5 max-w-md bg-white flex flex-col items-center ">
						<h2 class="text-2xl font-semibold mb-4 ">Order List</h2>
						<ul>
							{
								data.map(([itemName, quantity]) => (
									<li v-for="item in orderList" key="index" class="mb-2">
										<span class="font-semibold">{itemName}</span> - {quantity}
									</li>
								))
							}


						</ul>
					</div>
				</div>
			</Modal>

		</header >
	);
};

export default Header;














{/* <nav className="flex items-center justify-center space-x-20">
				<h1>Navbar</h1>
				<div className="flex items-center gap-10">
					<Link to="/">Home</Link>
					<Link to="/aboutus">About Us</Link>
				</div>
			</nav> */}