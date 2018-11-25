import React, {Component} from 'react';

class Sort extends Component {
  render() {
    return(
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
          <ul className="dropdown-menu">
            <li><a href="">Action</a></li>
            <li><a href="">Another action</a></li>
            <li><a href="">Something else here</a></li>
            <li><a href="">Separated link</a></li>
          </ul>
        </li>
      </ul> 
    );
  }
}

export default Sort;