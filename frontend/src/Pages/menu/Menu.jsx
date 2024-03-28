import { useEffect, useState } from "react";
import "./Menu.css";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";



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

	const handleTabClick = (value) => {
		console.log("item_name" + value)
		setActiveTab(value); // Update active tab when a tab is clicked
		filterByitem(value) // Fetch data for the clicked tab
	};




	return (
		<div className="tab-div text-lg m-12">
			<Tabs value={activeTab}>
				<TabsHeader className="bg-black text-white text-4xl z-10 h-50">
					{Headers.map((row, index) => (

						<Tab key={index} value={row.name} onClick={() => handleTabClick(row.name)}>
							{row.name}
						</Tab>
					)
					)}
				</TabsHeader>
				<TabsBody
					animate={{
						initial: { y: 250 },
						mount: { y: 0 },
						unmount: { y: 250 },
					}}
					className="py-5 bg-blue-500 text-black-800"
				>
					<TabPanel value={activeTab}>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3'>
							{Filtereddata.map((item, index) => (
								<Item item={item} key={index} />
							))
							}
						</div>
					</TabPanel>
				</TabsBody>
			</Tabs>
		</div>
	);
};

export default Menu;
