import "./App.css";
import React, { useState } from "react";
import NavHead from "./components/NavHead";
import Registration from "./components/Registration";

function App() {
	const [data, setData] = useState({
		fname: "",
		mname: "",
		lname: "",
		email: "",
		password: "",
		course: "",
		gender: "",
		phone: "",
		address: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<>
			<NavHead />
			<Registration data={data} handleChange={handleInputChange} />
		</>
	);
}

export default App;
