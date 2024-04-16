import { useEffect, useState } from "react";
import "./Menu.css";
// import {
// 	Tabs,
// 	TabsHeader,
// 	TabsBody,
// 	Tab,
// 	TabPanel,
// } from "@material-tailwind/react";


import Tabs from '@mui/material/Tabs';

import Tab from '@mui/material/Tab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPepperHot, faHamburger, faCarrot } from '@fortawesome/free-solid-svg-icons';

import Papa from "papaparse";
import axios from "axios";
import Item from "./Item";

const Menu = () => {


	const [Data, setData] = useState([]);
	const [Headers, setHeaders] = useState([]);
	const [Filtereddata, setFiltereddata] = useState([])

	const [activeTab, setActiveTab] = useState("Variety Rice");


	useEffect(() => {
		fetchData("main_menu.csv", "lunch", "headers");
		fetchData("lunch.csv", "Variety Rice", "items");
	}, []);

	const fetchData = async (file_path, item_name, section) => {
		try {

			const response = await axios.get(file_path);
			const csvData = response.data;



			Papa.parse(csvData, {
				header: true,
				complete: (results) => {
					if (section === "headers") {
						const filteredRows = results.data.filter(
							(row) => row.time === item_name
						);
						setHeaders(filteredRows);
						// console.log("headers" + filteredRows)
					} else {
						setData(results.data);
						const filteredRows = results.data.filter(
							(row) => row.item === item_name
						);
						setFiltereddata(filteredRows)

						// console.log("data" + results.data)
						// console.log("Filter" + filteredRows)
					}


				},
			});
		} catch (error) {
			console.error("Error fetching or parsing csv file:", error);
		}
	};

	const filterByitem = (value) => {
		const filteredRows = Data.filter(
			(row) => row.item === value
		);
		setFiltereddata(filteredRows)
		// console.log("Filter" + filteredRows)
	}

	const handleTabClick = (e, value) => {
		console.log("item_name" + value)
		setActiveTab(value); // Update active tab when a tab is clicked
		filterByitem(value) // Fetch data for the clicked tab
	};

	const renderIconForRowName = (rowName) => {
		switch (rowName) {
			case "Variety Rice":
				return <RestaurantMenuIcon />;
			case "Biriyani":
				return <FontAwesomeIcon icon={faUtensils} />;
			case "Gravy":
				return <FontAwesomeIcon icon={faPepperHot} />;
			case "Meals":
				return <FontAwesomeIcon icon={faHamburger} />;
			case "Side Dishes":
				return <FontAwesomeIcon icon={faCarrot} />;
			default:
				return null;
		}
	};




	return (
		<div className="tab-div text-lg p-[2%]">

			<div className="title flex justify-center mb-7 ">
				<h1 className="text-7xl sm:text-8xl md:text-9xl">Menu</h1>
			</div>

			<TabContext value={activeTab}>

				<div className=" headers bg-slate-100  z-10 h-20 mb-4 rounded-full">

					{/* aria-label="lab API tabs example" */}
					<TabList onChange={handleTabClick} variant="fullWidth" className="flex flex-col text-xl" >
						{Headers.map((row, index) => (

							<Tab
								icon={renderIconForRowName(row.name)}
								label={row.name}
								value={row.name}
								iconPosition="start"
								aria-label="phone"
								sx={{
									fontSize: "1.2rem",
									fontWeight: "extrabold",
									color: activeTab === row.name ? "#ffffff" : "#191970",
									background: activeTab === row.name ? "linear-gradient(135deg, #007bff, #00bfff)" : "none",
									borderRadius: activeTab === row.name ? "0.5rem 0.5rem 0.5rem 0.5rem" : "none",

								}}
							/>
							// {activeTab === row.name ? "tab active-tab" : "tab"}
							// <Tab key={index} value={row.name}  className={activeTab === row.name ? "active-tab" : ""} , color: "#191970">
						)
						)}
					</TabList>
				</div>


				<div className="tabbody py-5 text-black-800 ">

					{/* animate={{
					initial: { y: 500 },
					mount: { y: 0 },
					unmount: { y: 500 },
				}} */}
					{Headers.map((row, index) => (

						<TabPanel key={index} value={row.name}>
							<div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
								{Filtereddata.map((item, index) => (
									<Item item={item} />
								))
								}
							</div>
						</TabPanel>
					)
					)}
				</div>

			</TabContext>
		</div >
	);
};

export default Menu;
