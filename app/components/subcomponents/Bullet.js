import React, { Component } from "react";


export default class Bullet extends Component {
	constructor(props){
		super(props);
		this.state = {
			x: -200,
			y: -200,
			fire: false,
			angle: 0
		}
		this.setVelocity = this.setVelocity.bind(this);
		this.stageBullet = this.stageBullet.bind(this);
		this.tick = this.tick.bind(this);
	}
	componentDidMount(){
		this.tick();
	}

	tick(){
		this.stageBullet();
		this.setVelocity();
		this.props.getPos(this.state.x, this.state.y)
		window.requestAnimationFrame(this.tick);
	}

	stageBullet(){
		if(this.props.fire == true){
			var x = (this.props.x + 20)
			var y = (this.props.y + 20)
			this.setState({
				fire: true,
				x: x,
				y: y,
				angle: this.props.angle
			})
		}
	}

	setVelocity(){
		if (this.state.fire == true){
			var deg = this.state.angle;
			var radians = deg * Math.PI/180;
			
			var speed = 10;
			var vx = speed * Math.sin(radians);
			var vy = speed * Math.cos(radians);

			this.setState({
				x: this.state.x + vx,
				y: this.state.y + vy
			});
		}
	}

	render(){
		let style = {
			width: "2",
			height: "20",
			borderRadius: "100%",
			position: "absolute",
			display: "block",
			left: this.state.x,
			bottom: this.state.y,
			backgroundColor: "white",
			transform: `rotateZ(${this.state.angle}deg)`
		}
		return (

			<div style={style} />

		);
	}
}
