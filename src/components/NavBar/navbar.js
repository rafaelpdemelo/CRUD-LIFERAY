
import React, { useState } from "react";
import ClayNavigationBar from "@clayui/navigation-bar";

export const NavBar = () => {

	function Example(){
		const [count, setCount] = useState(0);
		
	}

	const btnStyle = {
		padding: "5.5px 16px 5.5px 16px",
		borderColor: "var(--indigo)"
	};

	return (
		
		<ClayNavigationBar triggerLabel="Item 1">
			<ClayNavigationBar.Item active>
					<button className="btn btn-unstyled btn-block btn-sm" style={btnStyle} type="button">GET</button>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item>
					<button className="btn btn-unstyled btn-block btn-sm" style={btnStyle} type="button">POST</button>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item>
					<button className="btn btn-unstyled btn-block btn-sm" style={btnStyle} type="button">DELETE</button>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item>
					<button className="btn btn-unstyled btn-block btn-sm" style={btnStyle} type="button">GET BY ID</button>
			</ClayNavigationBar.Item>
		</ClayNavigationBar>
		
	);
}
	
