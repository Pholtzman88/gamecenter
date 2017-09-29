import React, { Component } from "react";

export default class Image extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: ""
		}
		this.tick = this.tick.bind(this);
	}
	componentDidMount(){
		this.tick();
	}


	tick(){
		this.setState({
			name: this.props.image
		})
		window.requestAnimationFrame(this.tick)
	}

	render(){

		const style = {
			width: "20%",
			height: "100%",
			float: "left"
		}
	
		return (
			<div style={style} className={this.state.name}></div>
		);
	}
}