import React, { Component } from "react";

export default class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {
			time: this.props.time,
		}
		this.tick = this.tick.bind(this);
	}
	
	componentDidMount(){
		this.tick();
	}

	tick(){
		this.setState({
			time: this.props.time
		});
		window.requestAnimationFrame(this.tick)
	}


	render(){

		const style = {
			color: "white",
			position: "absolute",
			left: 600
		}
	
		return (
			<div><h1 style={style}>{this.state.time}</h1></div>
		);
	}
}