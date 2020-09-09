import React, { Component } from 'react'
import Home from './home'
import LogIn from './login'

class Dashboard extends Component {
    state = { 
        loggedIn: false,
     }

     logMeIn = (user) => {
        this.setState({ loggedIn: !this.state.loggedIn, user: user});
      };
  
    render() { 
        return ( 
        <>
        {this.state.loggedIn ? <Home logMeOut={this.logMeIn} firstName={this.state.user}/> : <LogIn logMeIn={this.logMeIn}/>}
        </> 
        );
    }
}
 
export default Dashboard;