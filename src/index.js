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
ReactDOM.render(<p>Este es un parrafo cualquiera, disfrutalo.</p>,document.getElementById('E2-parrafoCuerpo'));
//Agregar a la página un enlace que permita acceder al sitio web de NextU. El sitio web de NextU debe desplegarse en otra pestaña o una nueva ventana del navegador, cuando se acceda a través del enlace. */
const E2_enlace = React.createElement('a',{href:'http://www.nextu.com',target: '_blank'},'nextU');
ReactDOM.render( E2_enlace,document.getElementById('E2-enlace'));

/*Ejercicio 3 */
//En lo que sigue, te solicitamos crear un formulario usando elementos de React y que, además, despliegue un título y los siguientes campos:
// Nombre Completo,Correo Electrónico,Asunto,Mensaje
// No es necesario agregar un botón, ni enviar datos. Solo se requiere la creación del formulario y su despliegue en una página Web.
//Recuerda hacer uso de los tipos correctos en cada elemento del formulario (Ejm: input, email, text, textarea). También puedes hacer uso de estilos CSS para aplicar estilos a formulario.

const E3_formulario = (

<form action="#">
            <fieldset>
                <legend>Datos del cliente</legend>
                <p>
                    <label for="nombre">Nombre completo:</label>
                    <input type="text" name="nombre" placeholder="Ej:lu&iacute;s" required/>
                </p>
                <p>
                    <label for="email">Correo electronico:</label>
                    <input type="email" id="email" placeholder="Ej: lu&iacute;s@gmail.com" size="50px" required/>
                </p>
                <p>
                    <label for="asunto">Asunto</label>
                    <input type="text" id="asunto" placeholder="Ej:trabajo/etc." size="50px" required/>
                </p>
                <p>
                    <label for="comentario">Mensaje</label><br />
                    <textarea name="mensaje" cols="30" rows="10"></textarea>
                </p>
            </fieldset>
        </form>
);
ReactDOM.render(E3_formulario,document.getElementById('E3-formulario'));
reportWebVitals();

