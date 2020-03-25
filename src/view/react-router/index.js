import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { MemoryRouter, Prompt } from 'react-router';

const Home = () => <h1>Home</h1>;
const Hello = () => <h1>Hello</h1>;
const About = () => <h1>About</h1>;

class RouterSample extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul id="meau">
            <li >
                <Link to="/home">Home</Link>
            </li>
            <li >
              <NavLink to="/hello" activeClassName="selected">Hello</NavLink>
            </li>
            <li >
              <Link to="/about">About</Link>
            </li>
          </ul>

          <div id="page-container">
            <Route path="/home" component={Home}></Route>
            <Prompt when={true} message="Are you sure?">
              <Route path="/hello" component={Hello}></Route>
            </Prompt>

            <Route path="/about" component={About}></Route>
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