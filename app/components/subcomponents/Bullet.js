import React, { Component } from "react";


export default class Bullet extends Component {
	constructor(props){
		super(props);
		this.state = {
			x: this.props.x,
			y: this.props.y,
			stageBullet: this.props.stage,
			bulletIsStaged: false,
			fire: false,
			display: "none",
			angle: 0,
			radians: 0
		}

		this.stageBullet = this.stageBullet.bind(this);
		this.fireBullet = this.fireBullet.bind(this);
		this.tick = this.tick.bind(this);

	}

	componentDidMount(){
		setInterval(x => this.tick(),60);
		console.log("component did mount");
	}


	tick(){
		this.stageBullet();
		this.fireBullet();
	}

	stageBullet(){
		if (this.props.stage == true && this.state.fire == false){

			console.log("staging bullet");

			this.setState({
				x: this.props.x,
				y: this.props.y,
				display: this.props.display,
				angle: this.props.angle,
				bulletIsStaged: true
			});
		}
	}

	fireBullet(){
		if (this.state.bulletIsStaged == true){

			console.log("bullet is firing");

			var deg = this.state.angle;
			var radians = deg * Math.PI/180;
			radians = radians * -1
			var speed = 20;
			var vx = speed * Math.cos(radians);
			var vy = speed * Math.sin(radians);

			this.setState({
				x: this.state.x + vx,
				y: this.state.y + vy,
				fire: true
			})
		}
	}


	render(){
		let style = {
			width: "2",
			height: "2",
			borderRadius: "100%",
			position: "absolute",
			display: this.state.display,
			left: this.state.x + 12.5,
			bottom: this.state.y + 12.5,
			backgroundColor: "yellow",
			transform: `rotateZ(${this.state.angle}deg)`
		}
		return (
			<div style={style} />
		);
	}
}
