import React from 'react'; /*importamos la librería */
import ReactDOM from 'react-dom'; /*importamos la librería */
import './index.css'; /*Conexion a la hoja de estilos */
import App from './App'; /*Importamos la clase APP */
import reportWebVitals from './reportWebVitals';

/*LECCION 1: Creación y renderización de elementos */

/*Forma 1 */
  ReactDOM.render(<App/>,document.getElementById('root'));

/*Forma 2 */
  ReactDOM.render(<div>Nuevo Nodo Html</div>,document.getElementById("html"));

/*Forma 3 */
  const element = (<div> Son las {new Date().toLocaleTimeString()}</div>);
  ReactDOM.render(element,document.getElementById("time"));

/*Forma 4 */
  const element1 = React.createElement('p',{align: 'center'},'Nuevo Parrafo');
  ReactDOM.render(element1,document.getElementById('parrafo'));



/*LECCION 2: Elementos Anidados */

//creamos elementos por separado
var listElement1 = React.createElement('li',{id:'item1',type:'circle'},'Uno');
var listElement2 = React.createElement('li',{id:'item2',type:'disc'},'Dos');
var listElement3 = React.createElement('li',{id:'item3',type:'square'},'Tres');
var listElement4 = React.createElement('li',{id:'item4',type:'1'},'Cuatro');
var listElement5 = React.createElement('li',{id:'item5',type:'a'},'Cinco');
var listElement6 = React.createElement('li',{id:'item6',type:'A'},'Seis');

//creamos un arreglo de elementos, en este caso los items de una lista
var elements = [listElement1,listElement2,listElement3,listElement4,listElement5,listElement6];

//definimos un elelento de tipo lista ordenada y le adjutamos el arreglo anterior
var list0Elements = React.createElement('ul','',elements);

//renderizamos el elemento en el contenedor con el id "list"
ReactDOM.render(list0Elements,document.getElementById('list'));

reportWebVitals();