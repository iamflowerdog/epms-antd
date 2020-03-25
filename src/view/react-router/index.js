import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { MemoryRouter, Prompt } from 'react-router';

const Category = ({ match }) => <h1>Sub Category {match.params.subId}</h1>;


const SubCategory = ({ match }) => (
  <div>
    <h1>Category {match.params.id}</h1>

    <ul id="meau">
      <li >
        <Link to={`/category/${match.params.id}/sub/1`}>sub category1</Link>
      </li>
      <li >
        <Link to={`/category/${match.params.id}/sub/2`}>sub category2</Link>
      </li>
      <li >
        <Link to={`/category/${match.params.id}/sub/3`}>sub category3</Link>
      </li>
    </ul>

    <div>
      <div id="page-container">
        <Route path="/category/:id/sub/:subId" component={Category}></Route>
      </div>
    </div>

  </div>
)

class RouterSample extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul id="meau">
            <li >
              <Link to="/category/1">category1</Link>
            </li>
            <li >
              <Link to="/category/2">category2</Link>
            </li>
            <li >
              <Link to="/category/3">category3</Link>
            </li>
          </ul>

          <div id="page-container">
            <Route path="/category/:id" component={SubCategory}></Route>
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