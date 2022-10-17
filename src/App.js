import "./App.css";
import React, { useState } from "react";
import NavHead from "./components/NavHead";
import Registration from "./components/Registration";

function App() {
	const obj={
		fname: "",
		mname: "",
		lname: "",
		email: "",
		password: "",
		course: "",
		gender: "",
		phone: "",
		address: "",
	}
	const [data, setData] = useState(obj);

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
