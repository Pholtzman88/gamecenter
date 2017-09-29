import React, { Component } from "react";

export default class Scoreboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			score: 0
		}
		this.tick = this.tick.bind(this);
	}
	
	componentDidMount(){
		this.tick();
	}

	tick(){
		this.setState({
			score: this.props.score
		})
		window.requestAnimationFrame(this.tick);
	}

	render(){

		const style = {
			color: "white",
			marginLeft: "20px"
		}
	
		return (
			<div><h1 style={style}>{`${this.state.score}pts`}</h1></div>
		);
	}
}