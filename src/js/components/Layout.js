import React from "react";

import Location from "./Location";
import Login from "./Login";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Location / >
        <Login />
      </div>
    );
  }
}
