import React, { Component } from "react";
import { Link } from "react-router";

export default class GameOver extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(evt){
		if (evt.target.name === "replay"){
			this.props.reset();
		}else if (evt.target.name === "home"){
			this.props.history.push("/");
		}
	}

	render(){

		const style = {
				color: "white",
				position: "absolute",
				left: 500,
				zIndex: 1000,
				textAlign: "center"
		}

		const btnStyle = {
			width: "100px",
			height: "25px",
			marginLeft: "50px",
			backgroundColor: "yellow",
			color: "black",
			display: "inline-block",
			border: "3px solid white",
			borderRadius: "10px",
			textAlign: "center"
		}
		const btnFont = {
			fontSize: "20px",
			textDecoration: "none",
			color: "black"
		}
	
		return (
			<div style={style}>
			<h1>GAME OVER</h1>
			<h2>Final Score: {this.props.finalScore}pts</h2>
			<div style={btnStyle}>
				<a style={btnFont} name="replay" onClick={this.handleClick}>Play Again</a>
			</div>
			<div style={btnStyle}>
				<Link style={btnFont} to="/Home">Home</Link>
			</div>
			</div>
		);
	}
}