import React, { Component } from 'react';
import {Link} from 'react-router'
//styles
import './app.scss';

class App extends Component {
  render() {
    return (
      <div> Menu & Layout
        Menu
        <div>
          <Link to="/">Kalendarz</Link>
          <Link to="/settings">Ustawienia</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
