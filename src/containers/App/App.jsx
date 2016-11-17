import React, { PropTypes } from 'react';

import { VacoAppBar } from 'components';

import '../../styles/mdl/material-design-lite-grid.scss';
import './App.scss';

const App = ({ children }) => (
  <div className="app">
  	<div className="mdl-grid">
  		<div className="mdl-cell mdl-cell--6-col">
  			<h1>Customer Maintenance Dealy</h1>
  		</div>
  		<div className="mdl-cell mdl-cell--6-col">
  			<h1>Right Pane</h1>
  		</div>
  	</div>    
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;