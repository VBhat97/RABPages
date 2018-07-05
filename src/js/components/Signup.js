import React from "react";


var errorStyle = {color : "red"};
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;


export default class Signup extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={
            emailValidation : null,
            passwordValidation : null,
            confpasswordValidation : null,
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlecPassword = this.handlecPassword.bind(this);
    }


    handleEmail(e)
    {
        let email = this.refs.email.value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            this.setState({
                emailValidation: null,
            })
        }
        else
        {
            this.setState({
                emailValidation: "Email is not valid",
            })
        }
    }

    handlePassword(e)
    {
        let password = this.refs.password.value;

        if(!password.match(lowerCaseLetters))
        {
            this.setState({
                passwordValidation: "Password must contain a lower case letter",
            })
        }
        else if(!password.match(upperCaseLetters))
        {
            this.setState({
                passwordValidation: "Password must contain an upper case letter",
            })
        }

        else if(!password.match(numbers))
        {
            this.setState({
                passwordValidation: "Password must contain atleast a number",
            })
        }

        else if(password.length < 8)
        {
            this.setState({
                passwordValidation: "Password must contain minimum 8 characters",
            })
        }

        else
        {
            this.setState({
                passwordValidation: null,
            })
        }

    }

    handlecPassword(e)
    {
        let confpassword = this.refs.confpassword.value;
        let password = this.refs.password.value;

        if(password==confpassword)
        {
            this.setState({
                confpasswordValidation : null,
            })
        }

        else
        {
            this.setState({
                confpasswordValidation: "Passwords do not match",
            })
        }
    }


  render() {
    return (
        <div>
            <div class='container panelstart'>
                <div class="row">
                    <div class="column-xs-6">
                        <div class='panel panel-primary'>
                            <div class='panel-heading'>
                                <h2>Signup</h2>
                            </div>
                            <div class='panel-body'>
                                <h3>Register on Rent A Bike</h3><br /><br />
                                <br />
                                <form class='form-group formwidth'>
                                    <input type='text' placeholder="Name" class='form-control' ref="name" /><br />
                                    <input type='text' placeholder="Email" class='form-control' ref="email" onChange={this.handleEmail.bind(this)}/>
                                        <h5 style={errorStyle}>{this.state.emailValidation}</h5>
                                    <input type="password" placeholder="Password" class='form-control' ref="password" onChange={this.handlePassword.bind(this)}/>
                                        <h5 style={errorStyle}>{this.state.passwordValidation}</h5>
                                    <input type="cpassword" placeholder="Confirm Password" class='form-control' ref="confpassword" onChange={this.handlecPassword.bind(this)} /><br />
                                        <h5 style={errorStyle}>{this.state.confpasswordValidation}</h5>
                                    <input type="submit" value="Signup" class="btn btn-primary"/>
                                </form>
                            </div>
                            <div class="panel-footer">
                                Already have an account? <a href="#">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}