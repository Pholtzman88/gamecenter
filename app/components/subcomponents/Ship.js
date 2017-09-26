import React, { Component } from "react";
import Bullet from "./Bullet.js";



	var flightDirection = "";	
	var spin = "";
	var fire = false;

export default class Pacman extends Component {
	constructor(props){
		super(props);
		this.state = {
			shipX: 70,
			shipY: 20,
			bullets: [
				{
					stageBullet: false
				},
				{
					stageBullet: false
				},
				{
					stageBullet: false
				},
				{
					stageBullet: false
				}
			],
			bulletsLeft: 4,
			flightDirection: "",
			spin: "",
			angle: -90,
		};

		this.tick = this.tick.bind(this);
		this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this);
		this.handleflightDirection = this.handleflightDirection.bind(this);
		this.handleSpin = this.handleSpin.bind(this);
	}

	componentDidMount(){
		setInterval(x => this.tick(),32);
	}

	tick(){
		this.handleKeyboardEvents();
		this.setState({flightDirection: flightDirection});
		this.setState({spin: spin});
		this.handleflightDirection();
		this.handleSpin();
		this.triggerBullet();
	}

	handleKeyboardEvents(){
		document.body.addEventListener('keydown',function(e){
			if(e.keyCode){
				switch(e.keyCode){
					case 65:
					flightDirection = "left"
					break;
					case 68:
					flightDirection = "right"
					break;
					case 83:
					flightDirection = "down"
					break;
					case 87:
					flightDirection = "up"
					break;
					case 74:
					spin = "spinLeft";
					break;
					case 76:
					spin = "spinRight";
					break;
					case 32:
					fire = true;
					break;
				}
			}
		});
		document.body.addEventListener('keyup',function(e){
			switch(e.keyCode){
				case 74:
				case 76:
				spin = "still";
				break;
			}
		})
	}

	triggerBullet(){
		if (fire == true){
			
			console.log("load bullet")
			if (this.state.bulletsLeft > 0) {
				var newBulletState = this.state.bullets;
				newBulletState[this.state.bulletsLeft - 1].stageBullet = true;

				fire = false;

				this.setState({
					bullets: newBulletState,
					bulletsLeft: this.state.bulletsLeft - 1
				}) 
				console.log(this.state.bulletsLeft)	
				if (this.state.bulletsLeft == 1){
					var newClip = [
						{
							stageBullet: false
						},
						{
							stageBullet: false
						},
						{
							stageBullet: false
						},
						{
							stageBullet: false
						}
					];
					var oldClip = this.state.bullets;
					var reload = newClip.concat(oldClip);
					this.setState({
						bullets: reload,
						bulletsLeft: 2
					});
					fire = false;
				}				
				
			}
		}
	}



	handleflightDirection(){
		switch(this.state.flightDirection){
			case "left":
			this.setState({shipX: this.state.shipX - 5});
			break;
			case "right":
			this.setState({shipX: this.state.shipX + 5});
			break;
			case "down":
			this.setState({shipY: this.state.shipY - 5});
			break;
			case "up":
			this.setState({shipY: this.state.shipY + 5});
			break;
		}
	}

	handleSpin(){
		switch(this.state.spin){
			case "spinLeft":
			this.setState({angle: this.state.angle -5});
			break;
			case "spinRight":
			this.setState({angle: this.state.angle + 5});
			break;
		}
	}



	render(){
		const style = { 
				width: "30",
				height: "30",
				borderRadius: "100%",
				position: "absolute",
				left: this.state.shipX,
				bottom: this.state.shipY,
				transform: `rotateZ(${this.state.angle}deg)`
		}

		return (
			
			<div >
			<svg style={style} id="SVGRoot" version="1.1" viewBox="0 0 30 30">
				<defs id="defs815"/>
				<g id="layer1">
					<path id="path1376" style={{"fill":"#0000ff","fillOpacity":"1","stroke":"#000000","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 22.316469,7.5407916 6.506198,6.3404684 h -4.833984 v 2.431641 h 4.921875 l -6.471875,6.38901 -3.459767,-2.785495 c 0,0 -13.6807767,9.726563 -17.6651517,9.726563 0,0 9.5354047,-8.258417 9.5354047,-14.645135 0,-6.3867189 -9.7597267,-14.35877069 -9.7597267,-14.35877069 3.984375,0 18.0066617,9.25781249 18.0066617,9.25781249 z"/>
				</g>
			</svg>
			{this.state.bullets.map((bullet, i) => <Bullet key={i} stage={bullet.stageBullet} x={this.state.shipX} y={this.state.shipY} display={"block"} angle={this.state.angle} />)}
			</div>
		);
	}
}