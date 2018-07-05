import React from "react";

var frameStyle = {margin: "20px", border: "5px solid whitesmoke" };
var panelMod = {width: "800px"};


export default class Login extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            user: null
        }
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleSignIn(e)
    {
        console.log("This happend");
        let email = this.refs.email.value
        let password = this.refs.password.value
        //GET THE VALUE OF EMAIL AND PASSWORD FROM THE DATABASE HERE.
        const a = [email,password]
        if(email==="test" && password==="test")
        {
            this.setState({
                user: email
            })
        }
        else
        {
            this.setState({
                user: "Email and password do not match."
            })
        }
    }




  render() {
    return (
        <div>
            <div class='container panelstart' style={panelMod}>
                <div class="row">
                    <div class="column-xs-6">
                        <div class='panel panel-primary'>
                            <div class='panel-heading'>
                                <h2>Login</h2>
                            </div>
                            <div class='panel-body'>
                                <h3>Login to make a booking</h3><br /><br />
                                {this.state.user}
                                <br />
                                <form class="form-group" onSubmit={this.handleSignIn.bind(this)} action="#">
                                    <input type="text" placeholder="Email" class="form-control" ref="email" /><br />
                                    <input type="password" placeholder="Password" class="form-control" ref="password" /><br />
                                    <input type="submit" value="Login" class="btn btn-primary"/>
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