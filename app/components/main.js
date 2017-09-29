import React, { Component } from "react";
import Realm from "./containers/Realm.js";
import Dialogue from "./containers/Dialogue.js";

export default class Main extends Component {


	render(){
		return (
			<div>
				<Realm />
				<Dialogue/>
			</div>
		);
	}
}
