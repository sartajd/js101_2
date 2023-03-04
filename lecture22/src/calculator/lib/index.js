import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "React App"), /*#__PURE__*/React.createElement(Button, null, "Custom button"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));