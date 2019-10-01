import React from 'react';

import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  } //constructor

  componentDidMount() {
    axios
      .get('https://api.github.com/users/vannasok')
      .then(res => {
        console.log(res.data);
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log('error', err);
      });
  } //did mount

  fetchFollow = e => {
    e.preventDefault();
    axios
      .get('https://api.github.com/users/vannasok/followers')
      .then(res => {
        console.log('following :', res.data);
      })
      .catch(err => {
        console.log('Error :', err);
      });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Github Users Card</h1>
        </div>
        <div className='user-card'>
          <div className='user-photo'>
            <img src={this.state.user.avatar_url} alt='' />
          </div>
          <div className='user-info'>
            <p>
              Username: <b>{this.state.user.name}</b>
            </p>
            <p>
              Email: {this.state.user.email ? this.state.user.email : 'null'}
            </p>
            <p>Bio: {this.state.user.bio ? this.state.user.bio : 'null'}</p>
            <p>
              Location:{' '}
              {this.state.user.location ? this.state.user.location : 'null'}
            </p>
            <a href={this.state.user.html_url}>Github Profile</a>
          </div>
        </div>
        <div>
          <button onClick={this.fetchFollow}>See Followings</button>
        </div>
      </div> //app
    ); //return
  } //render
} // close app

export default App;
