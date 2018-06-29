import React from "react";


export default class Location extends React.Component {
  render() {
    return (
    	<div>
    		<center><h1>Please select your location.</h1></center>
    		<nav class="menu-navigation-icons" style="background-color: white">
        		<a href="#" class="menu-magenta"><i class="fa fa-taxi"></i><span>Mumbai</span></a>
        		<a href="#" class="menu-blue"><i class="fa fa-tint"></i><span>Goa</span></a>
        		<a href="#" class="menu-green"><i class="fa fa-building"></i><span>Delhi</span></a>
        		<a href="#" class="menu-yellow"><i class="fa fa-cutlery"></i><span>Hyderabad</span></a>
    		</nav>
		</div>
    );
  }
}