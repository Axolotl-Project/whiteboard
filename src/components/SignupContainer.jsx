import React, { Component } from 'react';

class SignupContainer extends Component {
  constructor () {
    super() 
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: ''
    }
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }

  //on button click functionality to update state
  onSignupSubmit (e) {
    //prevents default reload
    e.preventDefault();

    //set stating 
    this.setState({
      firstname: e.target.value,
      lastname: e.target.value,
      username: e.target.value,
      password: e.target.value
    });

    //create url variable to hold server signup[ address
    const url = 'http://localhost:4000/signup';
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
      .then((res) => res.json())
      .then((data) => console.log('username, pass, first and last name successfully sent!!'))
      .catch((err) => console.log('Failed to fetch', err));


    //log username and passwrd submit to console - confirm state has been updated with proper data
    console.log('The current state of firstname is: ', this.state.firstname);
    console.log('The current state of lastname is: ', this.state.lastname);
    console.log('The current state of username is: ', this.state.username);
    console.log('The current state of pswd is: ', this.state.password);
    

    //reset the state of the page to be an empty string 
    this.setState({
      firstname: '',
      lastname: '',
      username: '',
      password: ''
    });
  }

  //on firstname feild change upstate state
  onFeildfnChange (e) {
    this.setState({
      firstname: e.target.value,
    });
  };
  //on lastname feild change upstate state
  onFeildlastNameChange (e) {
    this.setState({
      lastname: e.target.value,
    });
  };

  //on user feild change upstate state
  onFeildusrChange (e) {
    this.setState({
      username: e.target.value,
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
          Signup Page
        </h1>
        <form>
            <label>
              First Name:
              <input type="text" value={this.state.firstname} onChange={(e)=> {this.onFeildfnChange(e)}}  name="firstnamename" />
            </label>
              <br/>
            <label>
              Last Name:
              <input type="text" value={this.state.lastname} onChange={(e)=> {this.onFeildlastNameChange(e)}}  name="lastname" />
            </label>
              <br/>
            <label>
              user-name:
              <input type="text" value={this.state.username} onChange={(e)=> {this.onFeildusrChange(e)}}  name="username" />
            </label>
            <br/>
            <label>
               password:
              <input type="text" value={this.state.password} onChange={(e)=> {this.onFeildpsdChange(e)}}  name="passwd" />
            </label>
            <br/>
          <input type="submit" value="Submit" onClick={(e) => this.onSignupSubmit(e)}/>
        </form>
      </div>
    );
  }
}


export default SignupContainer;