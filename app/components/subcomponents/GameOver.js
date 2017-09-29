import React, { Component } from "react";

export default class GameOver extends Component {
	constructor(props){
		super(props);
	}

	render(){

		const style = {
				color: "white",
				position: "absolute",
				left: 500,
				zIndex: 1000,
				textAlign: "center"
		}
	
		return (
			<div style={style}>
			<h1>GAME OVER</h1>
			<h2>Final Score: {this.props.finalScore}pts</h2>
			</div>
		);
	}
}