import React, { Component } from "react";
import { Link } from "react-router";

export default class Controls extends Component {
	constructor(props){
		super(props);

	}

	render(){
			const style = {
				linkStyle: {
					color: "black",
					position: "absolute",
					fontSize: "36px",
					left: 600,
					top: 500,
					width: "100px",
					height: "50px",
					backgroundColor: "yellow",
					textAlign: "center",
					textDecoration: "none",
					borderRadius: "10px",
					border: "5px solid white"
					},
					svgStyle: {
						marginLeft: "calc(50% - 400px)",
						marginTop: "20px",
						height: "550px",
						width: "800px"
					}
				}

		return (
			<div>
				<svg style={style.svgStyle} id="SVGRoot" version="1.1" viewBox="0 0 600 350">
					<defs id="defs2597"/>
					<g id="layer1">
						<rect height="28.820274" id="rect1453" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="57.049828" rx="8" ry="5.9999995" x="0.5" y="0.24254417"/>
						<rect height="27.329571" id="rect1455" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="63.615574" y="0.24254417"/>
						<rect height="27.324507" id="rect1457" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="105.459" y="0.74452782"/>
						<rect height="29.317179" id="rect1459" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="147.4133" y="0.24254417"/>
						<rect height="28.323374" id="rect1461" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="189.08598" y="0.24254417"/>
						<rect height="28.323374" id="rect1463" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="231.4306" y="0.24254417"/>
						<rect height="28.820274" id="rect1465" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="272.9856" y="0.24254417"/>
						<rect height="28.820274" id="rect1467" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="314.54672" y="-0.25434303"/>
						<rect height="28.820274" id="rect1469" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="356.18295" y="0.24254417"/>
						<rect height="28.820274" id="rect1471" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="397.93137" y="-0.25434303"/>
						<rect height="29.814077" id="rect1473" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="439.58063" y="-0.25434303"/>
						<rect height="29.317179" id="rect1475" style={{"opacity":"0.94599998","fill":"#18262d","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="481.76144" y="-0.25434303"/>
						<rect height="29.317179" id="rect1477" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="523.9491" y="0.24254417"/>
						<rect height="28.323374" id="rect1481" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="7.9999976" ry="5.9999995" x="565.78564" y="0.24254417"/>
						<rect height="29.317179" id="rect1483" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="55.662727" rx="8" ry="5.9999995" x="544.59161" y="34.031837"/>
						<rect height="28.323374" id="rect1485" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="564.70337" y="68.318031"/>
						<rect height="28.323374" id="rect1487" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="66.472473" rx="8.0000019" ry="5.9999995" x="533.2373" y="102.10732"/>
						<rect height="28.323374" id="rect1489" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="85.614128" rx="7.9999995" ry="5.9999995" x="513.14551" y="135.89659"/>
						<rect height="26.448046" id="rect1491" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="564.77228" y="171.90733"/>
						<rect height="29.309048" id="rect1495" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="35.180725" rx="8" ry="5.9999995" x="522.98132" y="169.69405"/>
						<rect height="26.448046" id="rect1501" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="480.91873" y="172.05812"/>
						<rect height="26.448046" id="rect1503" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="439.48846" y="171.54106"/>
						<rect height="29.317179" id="rect1505" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="43.262787" rx="8" ry="5.9999995" x="388.43881" y="169.6859"/>
						<rect height="28.820274" id="rect1507" style={{"opacity":"0.94599998","fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="198.72356" rx="8" ry="5.9999995" x="180.20694" y="169.6859"/>
						<rect height="28.820274" id="rect1509" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="43.171036" rx="7.9999986" ry="5.9999995" x="127.39658" y="169.6859"/>
						<rect height="28.820274" id="rect1511" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="85.723877" y="170.18282"/>
						<rect height="28.820274" id="rect1513" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="33.806408" rx="8" ry="5.9999995" x="43.579609" y="169.6859"/>
						<rect height="29.317179" id="rect1515" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.705315" rx="8" ry="5.9999995" x="1.926239" y="170.18282"/>
						<rect height="26.448046" id="rect1517" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="89.378067" rx="8" ry="5.9999995" x="0.97540283" y="136.74025"/>
						<rect height="29.814077" id="rect1519" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="66.558136" rx="8" ry="5.9999995" x="1.926239" y="101.61041"/>
						<rect height="26.83267" id="rect1521" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="56.574406" rx="8" ry="5.9999995" x="1.926239" y="69.808723"/>
						<rect height="29.317184" id="rect1523" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="35.180725" rx="8" ry="5.9999995" x="0.5" y="32.301003"/>
						<rect height="31.048019" id="rect1534" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="36.13155" rx="8" ry="5.9999995" x="40.500034" y="32.301003"/>
						<rect height="31.048019" id="rect1536" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="37.017223" rx="8" ry="5.9999995" x="83.378937" y="32.301003"/>
						<rect height="29.814077" id="rect1538" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="7.9999995" ry="5.9999995" x="126.29501" y="34.52874"/>
						<rect height="28.820274" id="rect1540" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="168.24998" y="34.52874"/>
						<rect height="30.310978" id="rect1542" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="210.09958" y="34.52874"/>
						<rect height="28.820274" id="rect1544" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="251.79846" y="34.52874"/>
						<rect height="29.814077" id="rect1546" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="292.4646" y="34.52874"/>
						<rect height="30.807882" id="rect1548" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="335.40887" y="34.031837"/>
						<rect height="27.329571" id="rect1550" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="376.9212" y="35.025642"/>
						<rect height="28.323374" id="rect1552" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="419.35739" y="34.52874"/>
						<rect height="27.826475" id="rect1554" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="461.20084" y="34.52874"/>
						<rect height="28.820274" id="rect1556" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="502.47964" y="34.031837"/>
						<rect height="29.317179" id="rect1558" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="523.34259" y="68.318031"/>
						<rect height="29.317179" id="rect1560" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="481.10599" y="67.821144"/>
						<rect height="26.448046" id="rect1562" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="491.01382" y="102.79217"/>
						<rect height="26.448046" id="rect1564" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="471.19754" y="137.69228"/>
						<rect height="26.448046" id="rect1566" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="449.99728" y="102.75261"/>
						<rect height="27.826475" id="rect1570" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="7.9999995" ry="5.9999995" x="439.68869" y="68.814934"/>
						<rect height="28.820274" id="rect1572" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="397.63257" y="68.318031"/>
						<rect height="26.448046" id="rect1574" style={{"opacity":"0.94599998","fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="7.9999995" ry="5.9999995" x="408.64886" y="102.88931"/>
						<rect height="26.448046" id="rect1576" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="429.4429" y="137.69228"/>
						<rect height="26.448046" id="rect1578" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="387.74399" y="137.69228"/>
						<rect height="28.323374" id="rect1580" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="356.35983" y="68.814934"/>
						<rect height="26.448046" id="rect1582" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="366.54999" y="102.96848"/>
						<rect height="26.448046" id="rect1584" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="345.89438" y="137.69228"/>
						<rect height="26.448046" id="rect1586" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="7.9999995" ry="5.9999995" x="303.7955" y="137.69228"/>
						<rect height="26.448046" id="rect1590" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="262.4538" y="137.69228"/>
						<rect height="26.448046" id="rect1592" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="7.9999995" ry="5.9999995" x="220.14182" y="137.69301"/>
						<rect height="26.448046" id="rect1594" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="178.7807" y="137.27504"/>
						<rect height="26.448046" id="rect1596" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="7.9999995" ry="5.9999995" x="137.20665" y="137.76134"/>
						<rect height="26.448046" id="rect1602" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="7.9999995" ry="6.000001" x="95.56424" y="137.4016"/>
						<rect height="26.448046" id="rect1604" style={{"opacity":"0.94599998","fill":"#18262d","fillOpacity":"0","stroke":"#f7ce40","strokeWidth":"2","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="74.537537" y="103.32108"/>
						<rect height="26.448046" id="rect1606" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="64.409393" y="69.689598"/>
						<rect height="26.448046" id="rect1610" style={{"opacity":"0.94599998","fill":"#18262d","fillOpacity":"0","stroke":"#f7ce40","strokeWidth":"2","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="106.5406" y="69.696465"/>
						<rect height="26.448046" id="rect1612" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="148.16441" y="69.675926"/>
						<rect height="28.323374" id="rect1614" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="188.84984" y="68.814934"/>
						<rect height="26.448046" id="rect1616" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="7.9999995" ry="5.9999995" x="231.5256" y="69.683113"/>
						<rect height="26.448046" id="rect1618" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="272.52982" y="69.689598"/>
						<rect height="26.448046" id="rect1620" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="314.49716" y="69.662254"/>
						<rect height="26.448046" id="rect1622" style={{"opacity":"0.94599998","fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="323.92377" y="102.79217"/>
						<rect height="26.44805" id="rect1624" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="6.0000005" x="282.18222" y="102.79217"/>
						<rect height="26.448046" id="rect1626" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="241.01416" y="103.10448"/>
						<rect height="26.448046" id="rect1628" style={{"opacity":"0.94599998","fill":"#999999","fillOpacity":"0","stroke":"#e9e9e9","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="199.07025" y="102.72456"/>
						<rect height="26.448046" id="rect1630" style={{"opacity":"0.94599998","fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254604" rx="8" ry="5.9999995" x="157.44644" y="102.90228"/>
						<rect height="26.448046" id="rect1632" style={{"opacity":"0.94599998","fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="34.254601" rx="8" ry="5.9999995" x="115.7641" y="102.81017"/>
						<text id="text1640" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"16.75771904px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#18262d","fillOpacity":"0","stroke":"#f7ce40","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} transform="scale(1.1343493,0.88156268)" x="100.41939" y="99.479248" xmlSpace="preserve">
							<tspan id="tspan1638" style={{"fill":"#18262d","fillOpacity":"0","stroke":"#f7ce40","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} x="100.41939" y="99.479248">W</tspan>
						</text>
						<text id="text1644" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"19.03586006px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} transform="scale(1.1794303,0.84786697)" x="71.165428" y="143.28482" xmlSpace="preserve">
							<tspan id="tspan1642" style={{"fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} x="71.165428" y="143.28482">A</tspan>
						</text>
						<text id="text1648" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"19.85321426px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} transform="scale(1.0820688,0.92415566)" x="115.81488" y="131.7874" xmlSpace="preserve">
							<tspan id="tspan1646" style={{"fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} x="115.81488" y="131.7874">S</tspan>
						</text>
						<text id="text1652" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"22.26285553px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} transform="scale(1.1383507,0.8784639)" x="143.08186" y="139.42554" xmlSpace="preserve">
							<tspan id="tspan1650" style={{"fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} x="143.08186" y="139.42554">D</tspan>
						</text>
						<text id="text1656" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"25.07219124px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} transform="scale(1.25283,0.79819289)" x="266.69293" y="154.48425" xmlSpace="preserve">
							<tspan id="tspan1654" style={{"fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} x="266.69293" y="154.48425">J</tspan>
						</text>
						<text id="text1660" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"23.78415871px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} transform="scale(1.0669894,0.93721643)" x="391.91757" y="131.74554" xmlSpace="preserve">
							<tspan id="tspan1658" style={{"fill":"#18262d","fillOpacity":"0","stroke":"#e5cc4e","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} x="391.91757" y="131.74554">L</tspan>
						</text>
						<path id="path3338" style={{"fill":"none","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 76.904631,116.38802 -18.287537,0.58593 -0.585938,111.9133 v 0 l 22.851563,-0.58594"/>
						<path id="path3340" style={{"fill":"none","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="M 108.32176,69.872779 H 36.937406 V 290.99662 h 44.531251"/>
						<path id="path3342" style={{"fill":"none","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 137.73737,125.33297 1.75781,26.21052 86.11411,1.17188 -2.92969,136.52344 v 0 h 42.77344"/>
						<path id="path3344" style={{"fill":"none","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 191.13846,116.63601 51.65686,0.20219 -0.77978,108.53343 h 22.26563 v 0"/>
						<path id="path3346" style={{"fill":"none","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 367.82101,192.23716 -0.58594,96.41571 v 0 0 0 l 92.74922,0.58594"/>
						<path id="path3348" style={{"fill":"none","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 354.6861,116.5259 46.1185,0.58594 v 138.1426 0 l 58.59375,-10e-6"/>
						<path id="path3350" style={{"fill":"none","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 435.30963,114.86523 1.17187,108.16264 h 21.74497 l -0.58593,-0.58594"/>
						<text id="text3362" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"13.33333302px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#000000","fillOpacity":"1","stroke":"#f7ce40","strokeOpacity":"1"}} x="87.304688" y="222.85156" xmlSpace="preserve">
							<tspan id="tspan3360" x="87.304688" y="222.85156">"W": fly ship</tspan>
							<tspan id="tspan3364" x="87.304688" y="239.51823">upwards</tspan>
						</text>
						<text id="text3368" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"5.33333349px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#000000","fillOpacity":"1","stroke":"none"}} x="92.578125" y="280.85938" xmlSpace="preserve">
							<tspan id="tspan3366" x="92.578125" y="285.72513"/>
						</text>
						<text id="text3372" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"13.33333302px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#000000","fillOpacity":"1","stroke":"#f7ce40","strokeOpacity":"1"}} x="86.71875" y="286.13281" xmlSpace="preserve">
							<tspan id="tspan3370" x="86.71875" y="286.13281">"A": fly ship</tspan>
							<tspan id="tspan3374" x="86.71875" y="302.79947">to the left</tspan>
						</text>
						<text id="text3372-1" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"13.33333302px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#000000","fillOpacity":"1","stroke":"#f7ce40","strokeOpacity":"1"}} x="273.85416" y="221.27278" xmlSpace="preserve">
							<tspan id="tspan3370-8" x="273.85416" y="221.27278">"D": fly ship</tspan>
							<tspan id="tspan3374-5" x="273.85416" y="237.93945">to the right</tspan>
						</text>
						<text id="text3372-7" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"13.33333302px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#000000","fillOpacity":"1","stroke":"#f7ce40","strokeOpacity":"1"}} x="274.44012" y="285.72592" xmlSpace="preserve">
							<tspan id="tspan3370-3" x="274.44012" y="285.72592">"S": fly ship</tspan>
							<tspan id="tspan3374-0" x="274.44012" y="302.39258">downwards</tspan>
						</text>
						<text id="text3372-79" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"13.33333302px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#000000","fillOpacity":"1","stroke":"#f7ce40","strokeOpacity":"1"}} x="463.11197" y="220.68684" xmlSpace="preserve">
							<tspan id="tspan3374-1" x="463.11197" y="220.68684">"L": rotate ship</tspan>
							<tspan id="tspan3439" x="463.11197" y="237.35352">clockwise</tspan>
						</text>
						<text id="text3372-13" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"13.33333302px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#000000","fillOpacity":"1","stroke":"#f7ce40","strokeOpacity":"1"}} x="462.52603" y="259.35873" xmlSpace="preserve">
							<tspan id="tspan3374-53" x="462.52603" y="259.35873">"J": rotate ship</tspan>
							<tspan id="tspan3443" x="462.52603" y="276.02539">counterclockwise</tspan>
						</text>
						<text id="text3372-71" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"13.33333302px","lineHeight":"1.25","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#000000","fillOpacity":"1","stroke":"#f7ce40","strokeOpacity":"1"}} x="463.11197" y="298.03061" xmlSpace="preserve">
							<tspan id="tspan3374-3" x="463.11197" y="298.03061">"SPACE": fire bullet</tspan>
						</text>
						<ellipse id="path3559" style={{"opacity":"0.94599998","fill":"#2fbad9","fillOpacity":"1","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="108.98438" cy="70.800781" rx="4.6875" ry="4.3945312"/>
						<ellipse id="path3559-2" style={{"opacity":"0.94599998","fill":"#2fbad9","fillOpacity":"1","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="76.904633" cy="116.38802" rx="4.6875" ry="4.3945312"/>
						<ellipse id="path3559-2-8" style={{"opacity":"0.94599998","fill":"#2fbad9","fillOpacity":"1","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="137.73737" cy="125.33297" rx="4.6875" ry="4.3945312"/>
						<ellipse id="path3559-2-3" style={{"opacity":"0.94599998","fill":"#2fbad9","fillOpacity":"1","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="191.13846" cy="116.63601" rx="4.6875" ry="4.3945312"/>
						<ellipse id="path3559-2-9" style={{"opacity":"0.94599998","fill":"#2fbad9","fillOpacity":"1","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="354.6861" cy="116.5259" rx="4.6875" ry="4.3945312"/>
						<ellipse id="path3559-2-1" style={{"opacity":"0.94599998","fill":"#2fbad9","fillOpacity":"1","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="435.30963" cy="114.86523" rx="4.6875" ry="4.3945312"/>
						<ellipse id="path3559-2-7" style={{"opacity":"0.94599998","fill":"#2fbad9","fillOpacity":"1","stroke":"#2fbad9","strokeWidth":"0.89999998","strokeLinecap":"butt","strokeLinejoin":"round","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="367.82101" cy="192.23717" rx="4.6875" ry="4.3945312"/>
					</g>
				</svg>
				<Link to="/Game" style={style.linkStyle}>Play</Link>
			</div>
			);
	}
}