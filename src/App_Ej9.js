import React from 'react';
import './App.css';
import logo from './logo.svg';

class App_Ej9 extends React.Component{

    constructor(){//se le pasan propiedades
        super(); //aremos uso de las propiedades 
        this.state = {oculto: false};
    //las propiedades estaticas pasan al metosdo super  al crea el componente  y en el estado isHidden le asignara el contenido de props es decir el valor que le esta pasando el padre
    };


    render(){

        const cabecera = [
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a>
            </header>
            </div>
        ];
        
        if(this.state.oculto) return cabecera;   
        return (
           [cabecera,<p>Este es el estado del componente</p>]
        );
    }

}
  export default App_Ej9;

  //Alternativa
  /*
  
  class App extends Component {
constructor(props){
  super(props);
  this.state={mostrarEstado:true,
              estado:'Este es el estado del componente'};
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
        <p style={{display:this.state.mostrarEstado ? 'block' : 'none'}} >{this.state.estado}</p>
      </div>
    );
  }
}

export default App;
  */