import React from "react";


import Location from "./Location";
import Login from "./Login";
import Signup from "./Signup";
import Footer from "./Footer";
import Upload_buttons from "./Upload_buttons"

export default class Layout extends React.Component {
  render() {
    return (
      <div>
      	<Upload_buttons />
      </div>
    );
  }
}
