import React, { Component } from "react";
import Game from "./views/Game.js";

export default class Main extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
