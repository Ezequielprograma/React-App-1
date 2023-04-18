import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App_Ej10 extends Component {
constructor(props){
  super(props);
  this.state = {oculto: props.oculto,
                mensaje:props.mensaje
              }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{display:!this.state.oculto ? 'block' : 'none'}} >
        {this.state.mensaje}
        </p>
       
      </div>
    );
  }
}

export default App_Ej10;