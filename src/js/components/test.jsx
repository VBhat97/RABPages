import React from "react";

export default class Signup extends React.Component {

  render() {
    return (
            <div>
                <form class='form-group formwidth' method="post" action="Signup_Script.php">
                    <input type='text' placeholder="Name" class='form-control' name="name" /><br />
                    <input type='text' placeholder="Email" class='form-control' name="email" / ><br />
                    <input type="password" placeholder="Password" class='form-control' name="password" /><br />
                    <input type='number' placeholder="Contact" class='form-control' name="number" /><br />
                    <input type='text' placeholder="City" class='form-control' name="city" /><br />
                    <input type='text' placeholder="Address" class='form-control' name="address" /><br />
                    <input type="submit" value="Login" class="btn btn-primary"/>
                </form>
            </div>
    );
  }
}