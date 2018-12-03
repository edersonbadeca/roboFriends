import React , { Component } from 'react';


class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HasError = false;
    }
  }
}


export default ErrorBoundry;
