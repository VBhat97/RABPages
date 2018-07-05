import React from "react";


var errorStyle = {color : "red"};

export default class Signup extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={
            emailValidation : null,
            passwordValidation : null,
            cpasswordValidation : null,
        }
        this.handleEmail = this.handleEmail.bind(this);
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
                                    <input type='text' placeholder="Email" class='form-control' ref="email" onChange={this.handleEmail.bind(this)} />
                                        <h5 style={errorStyle}>{this.state.emailValidation}</h5>
                                    <input type="password" placeholder="Password" class='form-control' ref="password" /><br />
                                    <input type="cpassword" placeholder="Confirm Password" class='form-control' ref="cpassword" /><br />
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