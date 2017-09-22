import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';


const friends = [
  {
    id: 0,
    name: 'Luis',
    age: 45,
    profession: 'dev',
  },
  {
    id: 1,
    name: 'Sam',
    age: 25,
    profession: 'dev',
  },
  {
    id: 2,
    name: 'John',
    age: 23,
    profession: 'dev',
  },
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>My Friends List!</h1>
          <Route exact path="/friends" component={FriendsList} />
          <Route path="/friends/:id" component={FriendDetails} />
          <Route path="/friends" component={FriendDetailsEdit} />
        </div>
      </Router>
    );
  }
}

function FriendsList({ match }) {
  return (
    <div>
      {
        friends.map(
          friend => (
            <div key={friend.id}>
              <span>{friend.name}</span>
              <Link to={`/friends/${friend.id}`}>details</Link>
            </div>
          )
        )
      }
    </div>
  );
}

function FriendDetails({ match }) {
  const friend = friends[match.params.id];
  return (
    <div>
      <h3>Friend Details:</h3>
      <div>name:<span>{friend.name}</span></div>
      <div>age:<span>{friend.age}</span></div>
      <div>profession:<span>{friend.profession}</span></div><br />

      <Link to={`/edit/${friend.id}`}>edit</Link><br />
      <Link to={`/friends`}>back to list</Link><br />
    </div>
  )
}

function FriendDetailsEdit({ match }) {
  const friend = friends[match.params.id];
  return (
    <div>
      <h3>Edit Friend</h3>
      <div>name:<input type="text" placeholder={friend.name} /></div>
      <div>age:<input type="text" placeholder={friend.age} /></div>
      <div>profession:<input type="text" placeholder={friend.profession} /></div>

      <Link to={`/friends`}>cancel</Link>
    </div>
  )
}

const Span = styled.span`
font-weight: bold;
`;

// ReactDOM.render(<App />, document.getElementById('root'));

export default App;
