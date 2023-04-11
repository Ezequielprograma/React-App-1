import React from 'react'; /*importamos la librería */
import ReactDOM from 'react-dom'; /*importamos la librería */
import './index.css'; /*Conexion a la hoja de estilos */

import reportWebVitals from './reportWebVitals';

/*Ejercicio 1 */
const element = (<div> To get stared, edit {<code>src/App.js</code>} and save {<b>reload.</b>}</div>);

ReactDOM.render(element,document.getElementById('E1-elemento'));

/*Ejercicio 2 */


//Modificar el título de la página (Título desplegado en la venta del navegador) usando el método render(), es decir a través de código de React.
ReactDOM.render("Bienvenido",document.getElementById('E2-tituloPagina'));
//Agregar a la página un título (h1), este título corresponde al texto que identifica la página y que se debe colocar como parte del cuerpo de la página web.
ReactDOM.render(<h1>Titulo pagina</h1>,document.getElementById('E2-tituloCuerpo'));
//Agregar a la página un párrafo con cualquier texto.
ReactDOM.render(<p>Este es un parrafo cualquiera, disfrutalo.</p>,document.getElementById('E2-tituloCuerpo'));
//Agregar a la página un enlace que permita acceder al sitio web de NextU. El sitio web de NextU debe desplegarse en otra pestaña o una nueva ventana del navegador, cuando se acceda a través del enlace. */
ReactDOM.render( <a href="http://www.nextu.com" >Next u</a>,{target:"_blank"},document.getElementById('E2-enlace'));


reportWebVitals();

