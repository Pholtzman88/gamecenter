import React, { Component } from "react";

export default class Ship extends Component {
	constructor(props){
		super(props);
		this.state = {
			x: 0,
			y: 0,
			angle: -90,
			explode: false
		}
		this.tick = this.tick.bind(this);
	}
	componentDidMount(){
		this.tick();
	}

	tick(){
		this.setState({
			x: this.props.x,
			y: this.props.y,
			angle: this.props.angle,
			explode: this.props.explode

		})
		window.requestAnimationFrame(this.tick)
	}

	render(){
		const style = { 
				explode: {
					width: "300",
					height: "300",
					position: "absolute",
					left: this.state.x,
					bottom: this.state.y,
					transform: `rotateZ(${this.state.angle}deg)`
				},
				width: "50",
				height: "50",
				position: "absolute",
				left: this.state.x,
				bottom: this.state.y,
				transform: `rotateZ(${this.state.angle}deg)`
		}
		if (this.state.explode == true){
			return (
				<svg style={style.explode} id="SVGRoot" version="1.1" viewBox="0 0 30 30">
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
			
				<svg style={style}id="SVGRoot"  version="1.1" viewBox="0 0 30 30">
					<defs id="defs815"/>
					<g id="layer1">
						<path id="path5068" style={{"fill":"#000000","fillOpacity":"1","stroke":"#37dbff","strokeWidth":"0.24566929","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.98901098"}} d="m 13.499637,0.281626 h -3.239546 l -7.1118898,12.106316 2.586594,1.646453 h -2.051356 c 0,0 -0.961261,0.392204 -0.996686,1.625715 -0.01175,0.409172 -0.03525,1.766132 -0.03525,1.766132 0,0 -0.172993,1.632896 0.917017,1.632896 h 1.943212 l -2.555433,2.367061 c 0,0 1.81273,6.335749 6.139682,6.335749 0,0 -1.581943,2.054262 5.5304158,2.108822 7.850734,-0.0043 6.513421,-2.147004 6.513421,-2.147004 0,0 5.898424,-0.946402 5.875365,-6.745013 l -2.626708,-1.987337 2.156784,-0.214058 c 0,0 0.769798,-0.12468 0.895971,-1.274086 l -0.0078,-1.687684 c 0,0 -0.01425,-1.734842 -1.229251,-1.806072 -1.180705,-0.06922 -2.651493,0.107136 -2.651493,0.107136 l 3.157956,-1.668415 0.06846,-8.004809 -3.788287,0.03913 0.07016,1.167059 -3.189048,-5.379007 -3.224877,-0.04143 0.136586,7.905464 -3.237192,0.04143 z"/>
						<ellipse id="path5072" style={{"fill":"#37dbff","fillOpacity":"1","stroke":"#37dbff","strokeWidth":"0.24566929","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.8"}} cx="15.204856" cy="17.009575" rx="5.5140738" ry="5.4794393"/>
						<ellipse id="path5074" style={{"fill":"#000000","fillOpacity":"1","stroke":"#37dbff","strokeWidth":"0.24566929","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.8"}} cx="15.181891" cy="17.176777" rx="4.0639954" ry="3.9408178"/>
						<path id="path5076" style={{"fill":"#000000","fillOpacity":"1","stroke":"#37dbff","strokeWidth":"0.24566932","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.8"}} d="m 26.745459,3.574388 h -3.676494 c 0,0 0,-2.114885 1.805422,-2.114885 1.80542,0 1.871072,2.114885 1.871072,2.114885 z"/>
						<ellipse id="path5078" style={{"fill":"#37dbff","fillOpacity":"1","stroke":"#37dbff","strokeWidth":"0.24566929","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.8"}} cx="11.437794" cy="27.128901" rx="0.53779852" ry="0.64453125"/>
						<ellipse id="path5078-5" style={{"fill":"#37dbff","fillOpacity":"1","stroke":"#37dbff","strokeWidth":"0.24566929","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.8"}} cx="13.051188" cy="24.960932" rx="0.53779852" ry="0.64453125"/>
						<ellipse id="path5078-59" style={{"fill":"#37dbff","fillOpacity":"1","stroke":"#37dbff","strokeWidth":"0.24566929","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.8"}} cx="15.349053" cy="27.656244" rx="0.53779852" ry="0.64453125"/>
						<ellipse id="path5078-8" style={{"fill":"#37dbff","fillOpacity":"1","stroke":"#37dbff","strokeWidth":"0.24566929","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.8"}} cx="15.349053" cy="25.078119" rx="0.53779852" ry="0.64453125"/>
						<ellipse id="path5078-2" style={{"fill":"#37dbff","fillOpacity":"1","stroke":"#37dbff","strokeWidth":"0.24566929","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.8"}} cx="19.211424" cy="27.070307" rx="0.53779852" ry="0.64453125"/>
						<ellipse id="path5078-7" style={{"fill":"#37dbff","fillOpacity":"1","stroke":"#37dbff","strokeWidth":"0.24566929","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.8"}} cx="17.500248" cy="24.960932" rx="0.53779852" ry="0.64453125"/>
					</g>
				</svg>
		);
	}
}