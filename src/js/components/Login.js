import React from "react";

var frameStyle = {margin: "20px", border: "5px solid whitesmoke" };


export default class Login extends React.Component {

  render() {
    return (
        <div>
            <div class='container panelstart'>
                <div class="row">
                    <div class="column-xs-6">
                        <div class='panel panel-primary'>
                            <div class='panel-heading'>
                                <h2>Login</h2>
                            </div>
                            <div class='panel-body'>
                                <h3>Login to make a booking</h3><br /><br />
                                <form class="form-group" action="#">
                                <input type="text" placeholder="Email" class="form-control" name="email" /><br />
                                <input type="password" placeholder="Password" class="form-control" name="password" /><br />
                                <input type="submit" value="Login"class="btn btn-primary" />
                                </form>
                            </div>
                            <div class="panel-footer">
                                Don't Have an account? <a href="#">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}