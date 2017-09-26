import React, { Component } from "react";
	var direction = "";	
export default class Pacman extends Component {
	constructor(props){
		super(props);
		this.state = {
			x: Math.floor(Math.random()*1300),
			y: Math.floor(Math.random()*600),
			vx: Math.floor(Math.random()*5)*2.5,
			vy: Math.floor(Math.random()*5)*2.5,
			width: 50,
			height: 50

		};
		this.tick = this.tick.bind(this);
	}
	componentWillMount(){
		if (this.state.vx < 3 && this.state.vy < 3){
			this.setState({width: 50, height: 50});
		}else if(this.state.vx < 6 && this.state.vy < 6){
			this.setState({width: 30, height: 30});
		}else{
			this.setState({width: 10, height: 10});
		}
	}

	componentDidMount(){
		setInterval(x => this.tick(),50);

	}

	tick(){

		this.setState({x: this.state.x -= this.state.vx, y: this.state.y += this.state.vy})
		if ( -100 > this.state.x ){
			this.setState({vx: this.state.vx *= -1});
		}else if ( 1300 < this.state.x){
			this.setState({vx: this.state.vx *= -1});
		}else if ( -100 > this.state.y){
			this.setState({vy: this.state.vy *= -1});
		}else if ( 650 < this.state.y){
			this.setState({vy: this.state.vy *= -1});
		}
		// console.log(`vx: ${this.state.vx} vy: ${this.state.vy} x: ${this.state.x} y: ${this.state.y}`)
	}




	render(){
		const style = {
			width: this.state.width,
			height: this.state.height,
			borderRadius: "100%",
			backgroundColor: "red",
			position: "absolute",
			left: this.state.x,
			top: this.state.y
		}

		return (
			<div style={style}>
			</div>
		);
	}
}