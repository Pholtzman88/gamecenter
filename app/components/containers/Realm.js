import React, { Component } from "react";
import Sound from "react-sound";
import Ship from "../subcomponents/Ship.js";
import Asteroid from "../subcomponents/Asteroid.js";
import Bullet from "../subcomponents/Bullet.js";
import Clock from "../subcomponents/Clock.js";
import Scoreboard from "../subcomponents/Scoreboard.js";
import GameOver from "../subcomponents/GameOver.js";


var shipDirection;
var fire = false;
var spin;
export default class Realm extends Component {
	constructor(props){
		super(props);
		this.state = {
			runGame: true,
			gameOver: false,
			shipX:350,
			shipY: 200,
			shipDirection: "",
			shipSpin: "",
			shipExplode: false,
			angle: 0,
			initBulletX:0,
			initBulletY: 0,
			fire: false,
			asteroidField: [
				{
					x: Math.floor(Math.random()*1300),
					y: Math.floor(Math.random()* 600),
					render: true,
					explode: false
				},
				{
					x: Math.floor(Math.random()*1300),
					y: Math.floor(Math.random()* 600),
					render: true,
					explode: false
				},
				{
					x: Math.floor(Math.random()*1300),
					y: Math.floor(Math.random()* 600),
					render: true,
					explode: false
				},
				{
					x: Math.floor(Math.random()*1300),
					y: Math.floor(Math.random()* 600),
					render: true,
					explode: false
				},
				{
					x: Math.floor(Math.random()*1300),
					y: Math.floor(Math.random()* 600),
					render: true,
					explode: false
				}
	
			],
			time: 11,
			convertedTime: "",
			score: 0,
			enemiesLeft: 5,
			blasterSound: false,
			explosionSound: false,
			playMusic: false

		}
		this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this);
		this.handleShipDirection = this.handleShipDirection.bind(this);
		this.handleShipSpin = this.handleShipSpin.bind(this);
		this.fireBullet = this.fireBullet.bind(this);
		this.getAsteroidPosition = this.getAsteroidPosition.bind(this);
		this.getBulletPosition = this.getBulletPosition.bind(this);
		this.getShipPosition = this.getShipPosition.bind(this);
		this.handleCollision = this.handleCollision.bind(this);
		this.tick = this.tick.bind(this);
		this.count = this.count.bind(this);
		this.formatTime = this.formatTime.bind(this);
		this.updateScore = this.updateScore.bind(this);
		this.updateTime = this.updateTime.bind(this);
		this.unmount = this.unmount.bind(this);
		this.addAsteroids = this.addAsteroids.bind(this);
		this.handleSongFinishedPlaying = this.handleSongFinishedPlaying.bind(this);
		this.handleExplosionEnd = this.handleExplosionEnd.bind(this);
	}

	componentDidMount(){
		this.tick()
		setInterval(x => this.count(this.formatTime),1000);
		setInterval(x => this.unmount(),500);
		this.setState({
			playMusic: true
		});
	}


	count(next){
		this.setState({
			time: this.state.time - 1
		});
		next();
	}

	formatTime(){
		var minutes = Math.floor(this.state.time/60);
		var seconds = this.state.time - (minutes * 60);
		if (seconds < 10){
			seconds = "0" + seconds
		}
		if (minutes === 0){
			minutes = "00";
		}else if (minutes < 10){
			minutes = "0" + minutes;
		}
		if (this.state.convertedTime === "00:00"){
			this.setState({
				convertedTime: this.state.convertedTime,
				runGame: false
			});
		}else{
			this.setState({
			convertedTime: `${minutes}:${seconds}`
			});
		}
	}

	tick(){
		this.props.getGameStatus(this.state.score,this.state.runGame);

		if (this.state.runGame == true){
			this.handleKeyboardEvents();
			this.setState({shipDirection: shipDirection});
			this.setState({shipSpin: spin});
			if(fire == true){this.setState({fire: true})}else{this.setState({fire:false})}
			this.handleShipDirection();
			this.handleShipSpin();
			this.fireBullet();
			this.getAsteroidPosition();
			this.getBulletPosition();
			this.getShipPosition();
			this.addAsteroids();
		}else{
			this.setState({
				gameOver: true
			});
		}
		window.requestAnimationFrame(this.tick)
	}

	handleKeyboardEvents(){
		document.body.addEventListener('keydown',function(e){
			if(e.keyCode){
				switch(e.keyCode){
					case 65:
					shipDirection = "left"
					break;
					case 68:
					shipDirection = "right"
					break;
					case 83:
					shipDirection = "down"
					break;
					case 87:
					shipDirection = "up"
					break;
					case 74:
					spin = "spinLeft";
					break;
					case 76:
					spin = "spinRight";
					break;
				}
			}
		});

		document.body.addEventListener('keyup',function(e){
			switch(e.keyCode){
				// case 65:
				// case 68:
				// case 83:
				// case 87:
				// shipDirection = "still"
				// break;
				case 74:
				case 76:
				spin = "still";
				break;
				case 32:
				fire = true;
				break;
			}
		})
	}

	handleShipDirection(){
		switch(this.state.shipDirection){
			case "left":
			if ( this.state.shipX < 0){
				this.setState({shipX: this.state.shipX})
			}
			else{
				this.setState({shipX: this.state.shipX - 5})
			}
			break;
			case "right":
			if (this.state.shipX > 700){
				this.setState({shipX: this.state.shipX})
			}
			else{
				this.setState({shipX: this.state.shipX + 5})
			}
			break;
			case "down":
			if (this.state.shipY < 0){
				this.setState({shipY: this.state.shipY})
			}
			else{
				this.setState({shipY: this.state.shipY - 5})
			}
			break;
			case "up":
			if (this.state.shipY > 400){
				this.setState({shipY: this.state.shipY})
			}
			else{
				this.setState({shipY: this.state.shipY + 5})
			}
			break;
		}
	}

	handleShipSpin(){
		switch(this.state.shipSpin){
			case "spinLeft":
			this.setState({angle: this.state.angle - 5});
			break;
			case "spinRight":
			this.setState({angle: this.state.angle + 5});
			break;
		}
	}


	fireBullet(){
		if (fire == true){
			this.setState({
				blasterSound: true
			});
			console.log(this.state.blasterSound)
			fire = false;
			this.setState({
				initBulletX: this.state.shipX,
				initBulletY: this.state.shipY
			});
		}
	}

	getAsteroidPosition(x,y,i){

		let newState = Object.assign({},this.state);

		if (newState.asteroidField[i] !== undefined){

			if (newState.asteroidField[i].render == true && newState.asteroidField[i].explode == false){

				newState.asteroidField[i] = {x: x, y: y, render: true, explode: false, index: i}
				this.setState(newState)

			}

		}
	}

	addAsteroids(){
		const newField = [
			{
				x: Math.floor(Math.random()*1300),
				y: Math.floor(Math.random()* 600),
				render: true,
				explode: false
			},
			{
				x: Math.floor(Math.random()*1300),
				y: Math.floor(Math.random()* 600),
				render: true,
				explode: false
			}
		];
		const oldField = this.state.asteroidField;
		const merge = oldField.concat(newField);
		const enemiesLeft = this.state.enemiesLeft;
		const half = Math.floor(this.state.asteroidField.length/2);

			if (enemiesLeft < half){
				this.setState({
					asteroidField: merge,
				});
				this.setState({
					enemiesLeft: this.state.asteroidField.length
				});
			}
		
	}

	getBulletPosition(x,y){
		this.handleCollision("bullet",x,y);
	}

	getShipPosition(){
		this.handleCollision("ship",this.state.shipX,this.state.shipY)
	}

	handleCollision(type,x,y){

		this.state.asteroidField.map((asteroid) => {
			var aX = asteroid.x;
			var aY = asteroid.y;
			var asteroidRadius = 17.5;
			var shipRadius = 22.5;
			var fieldX = false;
			var fieldY = false;

			if (type === "bullet"){
				if (x >= aX  && x <= (aX + 35)){
					fieldX = true;
				};
				if(y >= aY  && y <= (aY + 35)){
					fieldY = true;
				};
				if (fieldX == true && fieldY == true){
					let newState = Object.assign({},this.state);
					newState.asteroidField[asteroid.index].explode = true;
					this.setState(newState);
					this.setState({
						enemiesLeft: this.state.enemiesLeft - 1,
						explosionSound: true
					})

				}
			}
			else if (type === "ship"){
				var dx = x - aX;
				var dy = y - aY;
				var distance = Math.sqrt(dx*dx + dy*dy);

				if ( distance < asteroidRadius + shipRadius){
					if (this.state.asteroidField[asteroid.index].render == true){
						this.setState({
							shipExplode: true
						});
						this.setState({
							runGame: false
						})
					}					
				}
			}

		})
	}

	unmount(){
		this.state.asteroidField.map(asteroid => {

			if (asteroid.explode == true) {
				let newS = Object.assign({},this.state);
				newS.asteroidField[asteroid.index].render = false;
				this.setState(newS)
			}
		})
	}

	updateScore(addedScore){
		this.setState({
			score: this.state.score + addedScore
		})
	}

	updateTime(addedTime){
		this.setState({
			time: this.state.time + addedTime
		})
	}

	handleSongFinishedPlaying(){
		this.setState({
			blasterSound: false
		})
	}

	handleExplosionEnd(){
		this.setState({
			explosionSound: false
		})
	}


	render(){
		const style = {
			width: "60%",
			height: "450",
			marginLeft:"20%",
			marginTop: "20px",
			border: "5px solid #2799b2",
			borderRadius: "10px",
			backgroundColor: "black",
			position: "relative",
			overflow: "hidden"
		}
		return (
			<div style={style} className="game">
			{this.state.playMusic ? <Sound url="../public/assets/sounds/game.mp3" playStatus={Sound.status.PLAYING}/> : null}
			{this.state.explosionSound ? <Sound url="../public/assets/sounds/explosion.mp3" playStatus={Sound.status.PLAYING} onFinishedPlaying={this.handleExplosionEnd}/> : null}
			{this.state.blasterSound ? <Sound url="../public/assets/sounds/blaster-firing.mp3" playStatus={Sound.status.PLAYING} onFinishedPlaying={this.handleSongFinishedPlaying}/> : null}
			{this.state.runGame ? <Clock time={this.state.convertedTime}/> : null}
			{this.state.runGame ? <Scoreboard score={this.state.score} /> : null}
			<Ship x={this.state.shipX} y={this.state.shipY} angle={this.state.angle} explode={this.state.shipExplode}/>
			<Bullet x={this.state.initBulletX} y={this.state.initBulletY} angle={this.state.angle} fire={this.state.fire} getPos={this.getBulletPosition}/>
			{this.state.asteroidField.map((asteroid,i)=> asteroid.render ? <Asteroid key={i} index={i} getPos={this.getAsteroidPosition} updateScore={this.updateScore} updateTime={this.updateTime} explode={asteroid.explode}/> : null)}
			</div>
		);
	}
}
