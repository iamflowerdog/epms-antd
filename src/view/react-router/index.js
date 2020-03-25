import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { MemoryRouter, Prompt } from 'react-router';

const Home = ({ match }) => <h1>Home {match.params.id}</h1>;
const Hello = () => <h1>Hello</h1>;
const About = () => <h1>About</h1>;

class RouterSample extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul id="meau">
            <li >
                <Link to="/home/1">Home1</Link>
            </li>
            <li >
              <Link to="/home/2">Home2</Link>
            </li>
            <li >
              <Link to="/home/3">Home3</Link>
            </li>
          </ul>

          <div id="page-container">
            <Route path="/home/:id" component={Home}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <RouterSample/>,
  document.getElementById('root')
)