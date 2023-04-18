import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*props son definiciones estaticas de contenido que no  pueden ser modificados  */
/*state nos mantiene propiedades que si  pueden ser modificadas devido a que estamos pasando  desde el padre la definicion de isHidden que observamos en el documento index.js, nosotros en lugar de usar states podemos  usar props, con esto estamos  tomando el valor que viene  desde el padre para presentar u ocultar nuestro contenido .*/
/*es importante ser cuidadoso al hacer uso de state y props */
/*en muchas ocasiones es muy util desde la creacion del componente  pasar un parametro  inicial  y luego ese parametro puede ser modificado,  esa modificación se hace  con otros metodos que veremos mas adelante */
class App3 extends Component {

    constructor(props){//se le pasan propiedades
        /*super: funcion quew permite la creación de los nuevos objetos  de la clase component que es de donde está eredando nuestra app  */
        super(props); //aremos uso de las propiedades 
        this.state = {esOculto: props.EsOculto};//definimos atributo o propiedad para el estado y le indicamos que al crear la clase  el constructor va a tomar las propidedades  que le pasamos
    //las propiedades estaticas pasan al metosdo super  al crea el componente  y en el estado isHidden le asignara el contenido de props es decir el valor que le esta pasando el padre
    };

    ocultarHeader = () => //funcion que oculta el nodo html
    {
        /*setState: forma correcta de asignar valores al estado  */
        this.setState({
            esOculto: true
        })
    }

    mostrarHeader = () =>
    {
        this.setState({
            esOculto: false
        })
    }

    render(){
         
        if(this.state.esOculto)
        return (
            <div>
                <button type="button" onClick={this.mostrarHeader}>Mostrar Header</button>
            </div>
        );
        return (
            <div>
                <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Edit <code>src/App.js</code> and save to reload.</h1>
                    </header>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                
                </div>
                <div>
                    <button type="button" onClick={this.ocultarHeader}>Ocultar header</button>
                </div>
            </div>
          );
    }
  
 
}

export default App3;
