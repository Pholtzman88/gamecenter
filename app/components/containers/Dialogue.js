import React, { Component } from "react";
import Image from "../subcomponents/Image.js";
import Text from "../subcomponents/Text.js";

export default class Dialogue extends Component {
	constructor(props){
		super(props);
		this.state = {
			talk: false,
			villains: [
				{
					image: "vader",
					text: ["You show great promise, join me and we can rule the galaxy together!","You will never defeat the Empire.. resistance is futile!","I was a better pilot than you when I was 6..."]
				},
				{
					image: "darthMaul",
					text: ["..","...","......"]
				},
				{
					image: "stormtrooper",
					text: ["Stay still punk!","You can't run forever!","We do not forgive, we do not forget, expect us"]
				}
			],
			pros: [
				{
					image: "hanSolo",
					text: ["Hey careful kid! that was too close!!","If you hurt my ship you will have to answer to me!","I can't believe you vouched for this joker Chewy..."]
				},
				{
					image: "yoda",
					text: ["Focus you must..","Doing great you are!","Wear me as a backpack you must"]
				},
				{
					image: "obiWan",
					text: ["Feel the force!","These are not the droids you are looking for..","Don't give in to the dark side!"]
				}
			],
			image: "",
			text: "",
			encouragement: false,
			ticks: 3,
			lastDialogue: 0,
			currentImage: "",
			currentText: ""
		}
		this.tick = this.tick.bind(this);
		this.generateRandomVillainComment = this.generateRandomVillainComment.bind(this);
		this.generateRandomProComment = this.generateRandomProComment.bind(this);
	}
	
	componentDidMount(){
		setInterval(x => this.tick(), 1000);
	}

	tick(){
		console.log(this.state.currentImage, this.state.currentText)
		this.setState({ticks: this.state.ticks + 1})
		//every 5 seconds render dialogue box
		if (this.state.ticks%10 == 0){
			if (this.state.encouragement == true){
				this.generateRandomProComment()
			}
			else{
				this.generateRandomVillainComment()
			}

			//generate dialogue
			this.setState({
				talk: true,
				lastDialogue: this.state.ticks
			});
		}
		if (this.state.lastDialogue < this.state.ticks - 3){
			this.setState({
				talk: false
			})
		}
	}

	generateRandomVillainComment(){
		let randomVillain = this.state.villains[Math.floor(Math.random()*this.state.villains.length)];
		let image = randomVillain.image;
		let randomText = randomVillain.text[Math.floor(Math.random()* 3)];
		this.setState({
			currentImage: image,
			currentText: randomText,
			encouragement: true
		})
	}

	generateRandomProComment(){
		let randomPro = this.state.pros[Math.floor(Math.random()*this.state.pros.length)];
		let image = randomPro.image;
		let randomText = randomPro.text[Math.floor(Math.random()* 3)];
		this.setState({
			currentImage: image,
			currentText: randomText,
			encouragement: false
		})		
	}

	render(){

		const style = {
			width: "60%",
			height: "100px",
			marginLeft: "20%"
		}
	
		return (
			<div style={style}>
			{this.state.talk ?	<Image image={this.state.currentImage}/> : null}
			{this.state.talk ?	<Text text={this.state.currentText}/> : null}
			</div>
		);
	}
}