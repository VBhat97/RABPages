import React from "react";

var frameStyle = {margin: "20px", border: "5px solid whitesmoke" };


export default class Login extends React.Component {

    constructor(props)
    {
        super(props)
        this.state={
            user: null
        }
    }

    handleSignIn(e)
    {
        lets email = this.refs.email.value;
        lets password = this.refs.password.value;
        this.props.onSignIn(email,password);
    }

    signIn(email,password)
    {
        //Get your Backend Data here for checking the username and password
        if(email==="test" && password==="test")
        {
            this.setState({
                user:{
                    email,
                    password,
                }
            })
        }
    }

  render() {
    return (
        <div>
        {(this.state.user) ? 
            <div class='container panelstart'>
                <div class="row">
                    <div class="column-xs-6">
                        <div class='panel panel-primary'>
                            <div class='panel-heading'>
                                <h2>Login</h2>
                            </div>
                            <div class='panel-body'>
                                <h3>Login to make a booking</h3><br /><br />
                                <form class="form-group" onSubmit={this.handleSignIn.bind(this)} action="#">
                                <input type="text" placeholder="Email" class="form-control" ref="email" /><br />
                                <input type="password" placeholder="Password" class="form-control" ref="password" /><br />
                                <input type="submit" value="Login"class="btn btn-primary" />Login
                                </form>
                            </div>
                            <div class="panel-footer">
                                Don't Have an account? <a href="#">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <h1>Welcome!!</h1>
        </div>
        }
    );
  }
}