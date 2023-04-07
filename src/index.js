import React from 'react'; /*importamos la librería */
import ReactDOM from 'react-dom'; /*importamos la librería */
import './index.css'; /*Conexion a la hoja de estilos */
import App from './App'; /*Importamos la clase APP */
import reportWebVitals from './reportWebVitals';

/*Creación y renderización de elementos */

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

reportWebVitals();
