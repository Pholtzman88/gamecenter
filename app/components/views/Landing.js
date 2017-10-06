import React, { Component } from "react";
import { Link } from "react-router";
import Sound from "react-sound";

export default class Landing extends Component {
	constructor(props){
		super(props);
		this.state = {
			logoHeight: 0,
			logoWidth: 0,
			fontSize: 32,
			x: 650,
			y: 250,
			opacity: 0,
			playSound: false
		}
		this.tick = this.tick.bind(this);
	}

	componentDidMount(){
		this.tick()
		this.setState({
			playSound: true
		})
	}
	componentWillUnmount(){
		this.setState({
			playSound: false
		})
	}

	tick(){
		if ( this.state.logoWidth < 400){
			this.setState({
				logoWidth: this.state.logoWidth + 1,
				logoHeight: this.state.logoHeight + 1,
				x: this.state.x - .5,
				y: this.state.y - .5
			});
		}else{
			this.setState({
				opacity: this.state.opacity + .01
			});
			if (this.state.opacity == 1){
				window.cancelAnimationFrame(this.tick)
			}
		}
		

		window.requestAnimationFrame(this.tick);
	}

	render(){
		const style={
			height: this.state.logoHeight,
			width: this.state.logoWidth,
			position: "absolute",
			left: this.state.x,
			top: this.state.y
		}
		const playLinkStyle = {
			color: "black",
			position: "absolute",
			fontSize: this.state.fontSize,
			left: 515,
			top: 500,
			width: "110px",
			height: "50px",
			backgroundColor: "yellow",
			textAlign: "center",
			textDecoration: "none",
			borderRadius: "10px",
			border: "5px solid white",
			opacity: this.state.opacity
		}
		const controlsLinkStyle = {
			color: "black",
			position: "absolute",
			fontSize: this.state.fontSize,
			left: 675,
			top: 500,
			width: "110px",
			height: "50px",
			backgroundColor: "yellow",
			textAlign: "center",
			textDecoration: "none",
			borderRadius: "10px",
			border: "5px solid white",
			opacity: this.state.opacity
		}

		const contStyle = {
			position: "relative",
			width: "1200px",
			height: "500px"
		}
		return (
				<div style={contStyle}>
					{this.state.playSound ? <Sound url="../public/assets/sounds/intro.mp3" playStatus={Sound.status.PLAYING}/> : null}
					<svg style={style} id="SVGRoot" version="1.1" viewBox="0 0 30 30">
						<defs id="defs815"/>
						<g id="layer1">
							<path id="path1384" style={{"fill":"#ffff00","fillOpacity":"1","stroke":"#ffffff","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="M 0.67545402,13.249152 V 0.90488052 H 18.61289 V 4.3497935 H 7.5744677 V 7.866476 h 5.2892433 v 3.014298 H 7.9194183 V 22.435587 H 0.90542108 Z"/>
							<path id="path1384-6" style={{"fill":"#ffff00","fillOpacity":"1","stroke":"#ffffff","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="M 28.929161,10.112166 V 22.363818 H 10.991727 v -3.419066 h 11.038421 v -3.490295 h -5.289244 v -2.991683 h 4.944294 V 0.99465742 h 7.013997 z"/>
							<text id="text1403" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"6.31260252px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#ffffff","fillOpacity":"1","stroke":"#ffff00","strokeWidth":"0.24566929","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} transform="scale(0.89338853,1.1193338)" x="-0.024256159" y="25.705894" xmlSpace="preserve">
								<tspan id="tspan1401" style={{"fontSize":"5.1px","fill":"#ffffff","fillOpacity":"1","stroke":"#ffff00","strokeWidth":"0.24566929","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} x="-0.024256159" y="25.705894">Falcon Fighter</tspan>
							</text>
						</g>
					</svg>
					<Link to="/Game" style={playLinkStyle}>Play</Link>
					<Link to="/Controls" style={controlsLinkStyle}>Controls</Link>
				</div>
			);
	}
}
