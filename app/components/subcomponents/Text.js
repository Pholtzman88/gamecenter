import React, { Component } from "react";
import Typing from "react-typing-animation";

export default class Text extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: ""
		}
		this.tick = this.tick.bind(this);
	}
	componentDidMount(){
		this.tick();
	}

	tick(){
		this.setState({
			text: this.props.text
		})
		window.requestAnimationFrame(this.tick);
	}

	render(){
		const style = {
			color: "white",
			float: "left"
		}
	
		return (
			<div>
				<Typing speed={20}><h3 style={style}>{this.state.text}</h3></Typing>
			</div>

		);
	}
}