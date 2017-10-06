import React, { Component } from "react";
import Realm from "../containers/Realm.js";
import Dialogue from "../containers/Dialogue.js";
import GameOver from "../subcomponents/GameOver.js";

export default class Game extends Component {
	constructor(props){
		super(props);
		this.state = {
			score: 0,
			runGame: true,
			gameOver: false
		}
		this.getGameStatus = this.getGameStatus.bind(this);
		this.reset = this.reset.bind(this);
	}

	getGameStatus(score, runGame){
		if (this.state.score !== score || this.state.runGame !== runGame){
			this.setState({
				score: score,
				runGame: runGame
			});
			if (this.state.runGame == false){
				this.setState({
					gameOver: true
				});
			}
		}
	}

	reset(){
		// this.setState({
		// 	score: 0,
		// 	runGame: true,
		// 	gameOver: false
		// });
		window.location.reload();
	}


	render(){
		return (
			<div>
				{this.state.runGame ? <Realm getGameStatus={this.getGameStatus}/> : null}
				{this.state.runGame ? <Dialogue/> : null}
				{this.state.gameOver ? <GameOver finalScore={this.state.score} reset={this.reset}/> : null}
			</div>
		);
	}
}
