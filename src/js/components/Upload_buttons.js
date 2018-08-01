import React from "react";

var button_Style = {width:"500px", height:"200px",fontSize:"500%"};

export default class Upload_buttons extends React.Component {

  render() {
    return (
        <div>
            <center>
            <button type="button" class="btn btn-outline-primary waves-effect" style={button_Style}>Upload Battery</button>
            <button type="button" class="btn btn-outline-default waves-effect" style={button_Style}>Upload Vehicle</button>
            </center>
        </div>
    );
  }
}