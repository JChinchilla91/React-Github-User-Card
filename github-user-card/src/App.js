import React from 'react';
import UserCard from './Components/UserCard';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      avatar_url: '',
      login: '',
      name: '',
      location: '',
      followers: [],
      error: ''
    }
}

  componentDidMount() {
    fetch('https://api.github.com/users/jchinchilla91')
    .then(res => res.json())
    .then(user => {
      console.log('Look', user.followers)
      this.setState({
         avatar_url: user.avatar_url,
         login: user.login,
         name: user.name,
         location: user.location,
        })
    })
    .catch(err => {
      console.error('You messed up', err);
      this.setState({ error: err });
    });// End of first fetch
    fetch('https://api.github.com/users/jchinchilla91/followers')
    .then(res => res.json())
    .then(followers => {
      console.log('inside second call', followers)
      followers.map((follower =>
        this.setState({
          ...this.state,
          followers: {avatar_url: follower.avatar_url, login: follower.login, name: follower.name, location: follower.location}
        })
        ))
    })
  };



  render(){
    return (
      <div className="App">
        <UserCard
         avatar={this.state.avatar_url}
         login={this.state.login} 
         name={this.state.name}
         location={this.state.location}
         followers={this.state.followers}
         />
      </div>
    )
  };
}

export default App;
