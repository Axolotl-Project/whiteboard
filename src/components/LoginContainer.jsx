import React, { Component } from 'react';

class LoginContainer extends Component {
  constructor () {
    super() 
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  //on button click functionality to update state
  onLoginSubmit (e) {
    //prevents default reload
    e.preventDefault();

    //set stating 
    this.setState({
      email: e.target.value,
      password: e.target.value
    });

    //create url variable to hold server signup[ address
    const url = 'http://localhost:4000/login';
     // submit what is currently in state entry
     fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(this.state), // body data type must match "Content-Type" header
    })
      // .then((res) => res.json())
      .then((data) => console.log('email, pass'))
      .then(() => {
        this.setState({
          email: '',
          password: ''
        });
        window.location.href = 'http://localhost:3000/api'
      })
      .catch((err) => console.log('Failed to fetch', err));


    //log email and passwrd submit to console
    // console.log('The current state of email is: ', this.state.email);
    // console.log('The current state of pswd is: ', this.state.password);
    

    //reset the state of the page to be an empty string 
    
  }

  //on user feild change upstate state
  onFeildusrChange (e) {
    this.setState({
      email: e.target.value,
    });
  };

  //on psd feild change upstate state
  onFeildpsdChange (e) {
    this.setState({
      password: e.target.value
    });
  };
  
  render() {
    return (
      <div>
        <h1>
          Login Page
        </h1>
        <form>
            <label>
              Email:
              <input type="text" value={this.state.email} onChange={(e)=> {this.onFeildusrChange(e)}}  name="name" />
            </label>
            <br/>
            <label>
               Password:
              <input type="text" value={this.state.password} onChange={(e)=> {this.onFeildpsdChange(e)}}  name="passwd" />
            </label>
            <br/>
          <input type="submit" value="Submit" onClick={(e) => this.onLoginSubmit(e)}/>
        </form>
      </div>
    );
  }
}


export default LoginContainer;