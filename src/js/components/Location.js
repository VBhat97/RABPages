import React from "react";

var frameStyle = {margin: "20px", border: "5px solid whitesmoke" };


export default class Location extends React.Component {

  render() {
    return (
    	<div >
    		<center><h1>Please select your location.</h1></center>
    		<nav class="menu-navigation-icons">
        		<a href="#" class="menu-magenta" style = {frameStyle}><i class="fa fa-taxi"></i><span>Mumbai</span></a>
        		<a href="#" class="menu-blue" style = {frameStyle}><i class="fa fa-tint"></i><span>Goa</span></a>
        		<a href="#" class="menu-green" style = {frameStyle}><i class="fa fa-building"></i><span>Delhi</span></a>
        		<a href="#" class="menu-yellow" style = {frameStyle}><i class="fa fa-cutlery"></i><span>Hyderabad</span></a>
    		</nav>
		</div>
    );
  }
}