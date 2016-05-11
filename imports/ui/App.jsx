import React, { PropTypes } from 'react';
import NavBar from './shared/NavBar.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {
  getChildContext() {
    return {
     muiTheme: getMuiTheme()
    };
  }
  render () {
    return (
      <div>
        <NavBar />
        { this.props.children }
      </div>
    )
  }
}

App.childContextTypes = {
 muiTheme: React.PropTypes.object.isRequired,
};

export default App;
