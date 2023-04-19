import React, { Component } from 'react';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
/*
class App_Ej11 extends Component {
constructor(props){
  super(props);
  this.state = {
    lista: [
        <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>{props.li1}</li>,
        <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>{props.li2}</li>,
        <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>{props.li3}</li>,
        <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>{props.li4}</li>,
        <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>{props.li5}</li>,
        <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>{props.li6}</li>,
        <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>{props.li7}</li>,
        <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>{props.li8}</li>,
        <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>{props.li9}</li>,
        <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>{props.li10}</li>,
    ]
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
        
        <div >
            <h1>Lista de Libros</h1>
            <lu>
            {this.state.lista}
        </lu>
        </div>

     
       
      </div>
    );
  }
}

export default App_Ej11;
*/
/*
Despliegue en pantalla una lista con una viñeta (bullet point) de Font-awesome.
La lista estará conformada por, al menos, 10 títulos de libros con estilos de Bootstrap.
La cantidad de elementos de la lista y los nombres de los títulos de los libros deben ser pasados a un componente a través de props.

Recomendaciones:

Una opción sería generar la lista de elementos haciendo uso del método render de forma automática cuando se renderiza el componente. Adicionalmente, tienes la posibilidad de usar un arreglo (array) para generar toda la lista de elementos.
En el return del método render solo debes colocar un hijo en el nodo HTML que utilices para mostrar la lista. El componente debe recibir la cantidad de elementos a listar desde el padre a través de las props.
*/



class App_Ej11 extends Component {
    render() {
      const arrayList = (cantidad) => {
        const arr=[]
        for (let index = 0; index < cantidad; index++) {
          arr.push(
            <li type='none' >
              <span className='fa fa-check pr-2'></span>
              {'Título del libro: '+' '+this.props.libros[index]}
            </li>)
        }
        return arr;
      };
  
      return (
        <div>
        <div className="App mt-2">
          <h2>Lista de libros</h2>
        </div>
          <ul className='text-primary'>
            {arrayList(this.props.cantidad)}
          </ul>
        </div>
      );
    }
  }
  
  export default App_Ej11;

