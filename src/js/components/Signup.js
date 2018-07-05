import React from "react";

export default class Signup extends React.Component {

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
                                <br />
                                <form class='form-group formwidth' method="post" action="Signup_Script.php">
                                    <input type='text' placeholder="Name" class='form-control' name="name" /><br />
                                    <input type='text' placeholder="Email" class='form-control' name="email" /><br />
                                    <input type="password" placeholder="Password" class='form-control' name="password" /><br />
                                    <input type='number' placeholder="Contact" class='form-control' name="number" /><br />
                                    <input type='text' placeholder="City" class='form-control' name="city" /><br />
                                    <input type='text' placeholder="Address" class='form-control' name="address" /><br />
                                    <input type="submit" value="Signup" class="btn btn-primary"/>
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