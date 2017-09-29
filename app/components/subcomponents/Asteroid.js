import React, { Component } from "react";

export default class Asteroid extends Component {
	constructor(props){
		super(props);
		this.state = {
			x:Math.floor(Math.random()*1300) + 100,
			y:Math.floor(Math.random()*600),
			vx: Math.floor(Math.random()*3+1)*1.5,
			vy: Math.floor(Math.random()*3+1)*1.5
		}
		this.setTrajectory = this.setTrajectory.bind(this);
		this.tick = this.tick.bind(this);
	}

	componentDidMount(){
		this.tick();
	}

	tick(){
		this.setTrajectory();
		this.props.getPos(this.state.x,this.state.y,this.props.index);
		window.requestAnimationFrame(this.tick);
	}

	componentWillUnmount(){
		console.log("unmounting");
		this.props.updateScore(5);
		this.props.updateTime(4);
	}

	setTrajectory(){

		switch(this.props.explode){
			case false:
			this.setState({
				x: this.state.x -= this.state.vx,
				y: this.state.y += this.state.vy
			});
			break;
			case true:
			this.setState({
				x: this.state.x,
				y: this.state.y
			})
			break;
		}
		
		if ( -100 > this.state.x ){
			this.setState({vx: this.state.vx *= -1});
		}else if ( 1300 < this.state.x){
			this.setState({vx: this.state.vx *= -1});
		}else if ( -100 > this.state.y){
			this.setState({vy: this.state.vy *= -1});
		}else if ( 650 < this.state.y){
			this.setState({vy: this.state.vy *= -1});
		}
	}

	render(){
		const style = {
			tiefighter: {
				width: 35,
				height: 35,
				borderRadius: "100%",
				position: "absolute",
				left: this.state.x,
				bottom: this.state.y
			},
			explosion: {
				width: 70,
				height: 70,
				borderRadius: "100%",
				position: "absolute",
				left: this.state.x,
				bottom: this.state.y				
			}
			
		}

		if (this.props.explode == true){
			return (
				<svg style={style.explosion} id="SVGRoot" version="1.1" viewBox="0 0 30 30">
					<defs id="defs815"/>
					<g id="layer1">
						<path id="path1438" style={{"fill":"#ff0500","stroke":"#000000","strokeWidth":"0.24566929","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1","fillOpacity":"0.996337"}} d="m 7.1047979,10.317407 -4.672951,-6.8838434 7.7882521,4.3476902 0.93459,-3.4419213 2.866076,2.4757679 4.112198,-6.40076599 0.996896,7.84999599 3.925278,-0.6642303 -0.996896,3.8042289 7.414416,0.724615 -6.542132,3.019229 6.10599,5.072306 -7.66364,-0.90577 0.436142,2.89846 -3.1153,-0.784998 1.806873,8.333071 -5.109092,-7.306535 -1.806875,4.830767 -1.24612,-4.89115 -4.9844811,7.548072 1.0592024,-9.118072 -8.16208785,1.690768 5.79445935,-4.891151 -4.174503,-1.932307 3.6760548,-1.449231 -4.4860329,-3.44192 z"/>
						<path id="path1440" style={{"fill":"#fff800","stroke":"#000000","strokeWidth":"0.62362205","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1","strokeMiterlimit":"4","strokeDasharray":"none","fillOpacity":"0.996337"}} d="m 6.5625,7.3242187 2.8125,4.2773433 -4.8046875,-0.05859 3.515625,2.988281 -3.1054687,1.113281 3.1640625,1.582031 -3.984375,3.164063 5.8007812,-1.289063 -0.8203125,5.214844 3.515625,-4.453125 0.996094,3.105469 1.757812,-3.105469 2.519532,4.160156 -0.585938,-4.6875 2.871094,0.9375 -0.820313,-2.167968 6.855469,0.996093 -6.09375,-4.21875 5.15625,-1.933593 -5.039062,-0.46875 0.820312,-3.2812503 -3.105469,0.9960933 -0.585937,-5.742187 -2.988281,4.453125 -2.578125,-2.1679688 -0.9375,2.7539063 z"/>
						<ellipse id="path1442" style={{"fill":"#000000","fillOpacity":"0.996337","stroke":"#fb0000","strokeWidth":"0.62362206","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="14.247358" cy="14.727251" rx="1.4941406" ry="1.5820312"/>
					</g>
				</svg>
			);
		}

		return (

			<svg style={style.tiefighter} id="SVGRoot" version="1.1" viewBox="0 0 30 30">
				<defs id="defs815"/>
				<g id="layer1">
					<path id="path1385" style={{"fill":"#000000","fillOpacity":"1","stroke":"#fb0000","strokeWidth":"0.99999988px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 7.99021,1.3196795 -1.3568847,1.21718 -5.2013916,7.5349495 0.1696105,1.484989 -0.5653687,0.934994 0.1130738,1.209992 -0.62190555,1.099993 0.50883175,2.914979 -0.22614742,0.714995 1.01766362,0.879994 -0.1696106,1.319991 4.9187073,7.809947 0.452295,-0.055 0.7915161,0.934993 L 8.3294313,29.046679 7.594452,27.726687 7.7075258,27.23169 3.4107239,19.476743 4.4283875,17.331759 6.6898622,17.001762 11.043201,19.146746 c 0,0 1.922254,3.533264 4.127191,3.588265 2.204938,0.05499 3.95758,-3.617018 3.95758,-3.617018 l 4.296803,-2.061233 2.318011,0.384998 1.074201,1.649989 -4.353339,8.249943 v 0.494996 l -0.621905,1.154992 0.508831,0.384999 1.017664,-1.319993 h 0.395758 l 4.918707,-7.534947 v -1.649989 l 0.452295,-0.769994 0.339221,-3.849975 -0.565369,-1.264991 0.169612,-0.824994 -0.73498,-0.659995 0.169611,-1.5949895 -5.031782,-7.589948 -1.413421,-0.989993 0.395758,1.924986 4.240265,7.9199465 -0.848053,2.089986 -2.544159,0.494996 -4.353339,-2.254984 c 0,0 -0.565368,-2.5299835 -3.901043,-2.5299835 -3.335676,0 -3.844507,2.4199835 -3.844507,2.4199835 L 6.7463991,13.756783 4.5414612,13.371786 3.4107239,11.171801 7.7640627,3.1418555 Z"/>
					<ellipse id="path1387" style={{"fill":"#ff0000","fillOpacity":"1","stroke":"#000000","strokeWidth":"0.623622","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="15.142124" cy="15.46177" rx="3.9858491" ry="3.8273211"/>
					<ellipse id="path1391" style={{"fill":"#ff0000","fillOpacity":"0.99633699","stroke":"#000000","strokeWidth":"0.75590551","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="15.170393" cy="15.496065" rx="2.0099604" ry="1.846181"/>
					<path id="path1401" style={{"fill":"none","stroke":"#000000","strokeWidth":"0.99999988px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 14.969397,11.63541 0.133998,2.077057 z"/>
					<path id="path1401-3" style={{"fill":"none","stroke":"#000000","strokeWidth":"0.99999988px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 16.609053,14.397195 1.477593,-1.557204 z"/>
					<path id="path1401-31" style={{"fill":"none","stroke":"#000000","strokeWidth":"0.99999988px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 15.170393,17.379216 0.113074,1.825391 z"/>
					<path id="path1401-7" style={{"fill":"none","stroke":"#000000","strokeWidth":"0.99999988px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 12.321139,18.371178 1.477593,-1.557205 z"/>
					<path id="path1401-1" style={{"fill":"none","stroke":"#000000","strokeWidth":"0.99999988px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 16.648301,16.714732 1.667093,1.380197 z"/>
					<path id="path1401-4" style={{"fill":"none","stroke":"#000000","strokeWidth":"0.99999988px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 12.025391,12.959786 1.667094,1.380196 z"/>
				</g>
			</svg>
		);
	}
}