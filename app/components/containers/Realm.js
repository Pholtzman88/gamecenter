import React, { Component } from "react";
import Ship from "../subcomponents/Ship.js";
import Asteroid from "../subcomponents/Asteroid.js";

export default class Realm extends Component {
	constructor(props){
		super(props);
	}
	
	render(){
		const style = {
			width: "1200",
			height: "600",
			marginLeft:50,
			backgroundColor: "black",
			position: "relative",
			overflow: "hidden"
		}
		return (
			<div style={style}>
			<Ship />
			<Asteroid />
			<Asteroid />
			<Asteroid />
			<Asteroid />
			<Asteroid />
			<Asteroid />
			<Asteroid />
			<Asteroid />
			<Asteroid />
			</div>
		);
	}
}
