import React, { Component } from 'react'

class Login extends Component {

    state = {
        new: false
    }
  
    changeListener = (e) => {
        this.setState({ [e.target.id]: e.target.value });
      };

    render() { 
        return ( 
        <>
        {!this.state.new &&
        <div className="loginTable" onChange={this.changeListener}>
        <h2>Log in</h2>
            <label htmlFor="user">
            User
            </label>
            <input name="User" type="text" id="user" />
            <label htmlFor="password">
            Password
            </label>
            <input
            name="Password"
            type="password"
            id="password"
            />
        <button className="loginButton" onClick={() => this.props.logMeIn(this.state.user)}>
          Log in
        </button>
        <p>New here? Why not <span style={{color: "yellow", cursor: "pointer"}} onClick={() => this.setState({new: true})}>register</span></p>
    
        </div> }
        {this.state.new &&
         <div className="registerTable" onChange={this.changeListener}>
         <h2>Register</h2>
             <label htmlFor="user">
                    User
             </label>
             <input name="User" type="text" id="user" />
             <label htmlFor="password">
                    Password
             </label>
             <input
                name="Password"
                type="password"
                id="password"
             />
         <button className="loginButton" onClick={() => this.props.logMeIn(this.state.user)}>
           Register
         </button>
         <p>Already a user? Why not <span style={{color: "yellow", cursor: "pointer"}} onClick={() => this.setState({new: false})}>Login</span></p>
     
         </div>
        }
        </> 
        );
    }
}
 
export default Login;