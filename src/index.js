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

/*Ejercicio 4*/
ReactDOM.render(React.createElement('img',{src: require('./photo.jpg'),alt:'Pan',class: 'img_pan'}),document.getElementById('E4-img'));
ReactDOM.render(React.createElement('h1',{align: 'center'},'Receta de Pan, fácil de hacer'),document.getElementById('E4-tituloCuerpo'));

ReactDOM.render(<p>A continuación se indican los ingredientes necesarios para hacer la receta de pan:</p>,document.getElementById('E4-SubtituloCuerpo1'));

var listElement1 = React.createElement('li',{id:'item1',type:'circle'},<b>15 gr</b>,' levadura frezca');
var listElement2 = React.createElement('li',{id:'item2',type:'circle'},<b>1cda</b>,' azúcar');
var listElement3 = React.createElement('li',{id:'item3',type:'circle'},<b>1cda</b>,' sal');
var listElement4 = React.createElement('li',{id:'item4',type:'circle'},<b>3cda</b>,' de aceite de oliva');
var listElement5 = React.createElement('li',{id:'item5',type:'circle'},<b>300 ml</b>,' agua templada (1 taza 1/2)');
var listElement6 = React.createElement('li',{id:'item6',type:'circle'},<b>500 gr</b>,' harina');

//creamos un arreglo de elementos, en este caso los items de una lista
var elements = [listElement1,listElement2,listElement3,listElement4,listElement5,listElement6];

//definimos un elelento de tipo lista ordenada y le adjutamos el arreglo anterior
var recetaDePan = React.createElement('ul','',elements);

//renderizamos el elemento en el contenedor con el id "list"
ReactDOM.render(recetaDePan,document.getElementById('E4-list'));

ReactDOM.render(<p>Ahora que ya tienes los ingredientes medidos y preparados sigue los siguientes pasos para lograr hacer tu pan:</p>,document.getElementById('E4-SubtituloCuerpo-2'));

var listElement7 = React.createElement('li',{id:'item7',type:'1'},'Primero hay que hidratar la levadura. Pon la levadura con un poco de agua, el aceite y el azúcar. Revuelve hasta que este todo disuelto.');
var listElement8 = React.createElement('li',{id:'item8',type:'1'},'Incorporar 5 cdas. De harina y cuando esté todo integrado dejar reposar aprox 10 minutos. Tapado con repasador.');
var listElement9 = React.createElement('li',{id:'item9',type:'1'},'Terminar de incorporar la harina junto con la sal y el agua.');
var listElement10 = React.createElement('li',{id:'item10',type:'1'},'Amasar durante unos 2 minutos aprox. Y dejar reposar unos 30 minutos.');
var listElement11 = React.createElement('li',{id:'item11',type:'1'},'Saca el aire amasando un poco más y forma un bollo que debes colocar en la asadera aceitada.');
var listElement12 = React.createElement('li',{id:'item12',type:'1'},'Aplica unos cortes y espolvorea con harina');
var listElement13 = React.createElement('li',{id:'item13',type:'1'},'Tapa con un recipiente apto de horno y aceitado. Esto es para conservar la humedad.');
var listElement14 = React.createElement('li',{id:'item14',type:'1'},'Por último lleva al horno recien encendido a 200 grados celsius, fuego arriba y abajo, durante 45 minutos aprox.');
//creamos un arreglo de elementos, en este caso los items de una lista
var elements2 = [listElement7,listElement8,listElement9,listElement10,listElement11,listElement12,listElement13,listElement14];

//definimos un elelento de tipo lista ordenada y le adjutamos el arreglo anterior
var recetaDePan2 = React.createElement('ol','',elements2);

//renderizamos el elemento en el contenedor con el id "list"
ReactDOM.render(recetaDePan2,document.getElementById('E4-list-2'));

ReactDOM.render(<p>Ya haz hecho tu primer pan, ahora disfrútalo.</p>,document.getElementById('E4-SubtituloCuerpo-3'));

reportWebVitals();

