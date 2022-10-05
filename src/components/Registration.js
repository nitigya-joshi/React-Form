import React from "react";
import RegistrationForm from "./RegistrationForm";

export default function Registration(props) {
	return (
		<div>
			<RegistrationForm
				data={props.data}
				handleInputChange={props.handleChange}
			/>
		</div>
	);
}
