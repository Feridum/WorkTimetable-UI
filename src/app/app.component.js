import React, { Component } from 'react';

import Menu from './routes/Shared/menu.component'
import Footer from './routes/Shared/footer.component'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Menu />
        <div className="row">
          <div className="col-lg-12">
            <div className="box body">
              {this.props.children}
            </div>
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}

export default App;
