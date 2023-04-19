import React from 'react'; /*importamos la librería */
import ReactDOM from 'react-dom'; /*importamos la librería */
import './index.css'; /*Conexion a la hoja de estilos */
import '../node_modules/font-awesome/css/font-awesome.min.css'; //Hoja de estilos font-awesome
import reportWebVitals from './reportWebVitals';
import EJ7_form from './form.js';
import EJ8_form from './form_EJ8';
import App_Ej9 from './App_Ej9';
import App_Ej10 from './App_Ej10';
import App_Ej11 from './App_Ej11';


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

    ReactDOM.render(React.createElement('img',{src: require('./assets/photo.jpg'),alt:'Pan',class: 'img_pan'}),document.getElementById('E4-img'));//imagen
    ReactDOM.render(React.createElement('h1',{align: 'center'},'Receta de Pan, fácil de hacer'),document.getElementById('E4-tituloCuerpo'));//titulo de pagina
    ReactDOM.render(<p>A continuación se indican los ingredientes necesarios para hacer la receta de pan:</p>,document.getElementById('E4-SubtituloCuerpo1'));//parrafo descriptivo
    //elementos de la lista no ordenada
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

    ReactDOM.render(<p>Ahora que ya tienes los ingredientes medidos y preparados sigue los siguientes pasos para lograr hacer tu pan:</p>,document.getElementById('E4-SubtituloCuerpo-2'));//parrafo descriptivo
    //elementos de la lista ordenada
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
    ReactDOM.render(<p>Ya haz hecho tu primer pan, ahora disfrútalo.</p>,document.getElementById('E4-SubtituloCuerpo-3'));//parrafo del pie de pagina

        

/*Ejercicio 5 */
    /* En este caso, te solicitamos desarrollar una aplicación con React que cumpla los siguientes requerimientos:
    Que presente información de materias educativas a través de pestañas.Las pestañas no requieren dinamismos. Cada pestaña debe tener el nombre de una materia o asignatura escolar.  Debe tener una pestaña activa. La pestaña activa debe mostrar información acerca de la materia o asignatura. En el contenido de la pestaña activa debe colocarse una imagen que haga referencia a la materia o asignatura. */
    // Elementos de la lista no ordenada
    
    var E5_listElement1 = (<div className='botonMenu' id='fisica' onClick={mostrarFisica}>Fisica</div>);
    var E5_listElement2 = (<div className='botonMenu' id='quimica' onClick={mostrarQuimica}>Química</div>);
    var E5_listElement3 = (<div className='botonMenu' id='biología' onClick={mostrarBiologia}>Biología</div>);
    var E5_listElement4 = (<div className='botonMenu' id='quimica' onClick={mostrarIngles}>Ingles</div>);
    var E5_listElement5 =  (<div className='botonMenu' id='Sociales' onClick={mostrarSociales}>Sociales</div>);
    var E5_listElement6 =  (<div className='botonMenu' id='historia' onClick={mostrarHistoria}>Historia</div>);
    var E5_listElement7 =  (<div className='botonMenu' id='deporte' onClick={mostrarDeporte}>Deporte</div>);
    //lista no ordenada
    var E5_listaNoOrdenada = React.createElement('lu',{id:'E5_lu',color:'white'},[E5_listElement1,E5_listElement2,E5_listElement3,E5_listElement4,E5_listElement5,E5_listElement6,E5_listElement7]);
    //Elemento del Menú
    var E5_menu = React.createElement('nav',"",E5_listaNoOrdenada);
    ReactDOM.render(E5_menu,document.getElementById('E5_menu'));
    
    //elementos del cuerpo de la planilla
    var E5_img = React.createFactory('img');//definimos la variable que va  a ser la fabrica
    var E5_p = React.createFactory('p');//definimos la variable que va  a ser la fabrica
    var E5_imgFisica = E5_img({src: require('./assets/fisica.jpg'),alt:'Fisica'});
    var E5_imgQuimica = E5_img({src: require('./assets/quimica.png'),alt:'Quimica'});
    var E5_imgBiologia = E5_img({src: require('./assets/biologia.jpg'),alt:'Biologia'});
    var E5_imgIngles = E5_img({src: require('./assets/ingles.jpg'),alt:'Ingles'});
    var E5_imgSociales = E5_img({src: require('./assets/sociales.jpg'),alt:'Sociales'});
    var E5_imgHistoria = E5_img({src: require('./assets/historia.jpg'),alt:'Historia'});
    var E5_imgDeporte = E5_img({src: require('./assets/deporte.jpg'),alt:'Deporte'});
    var E5_reseñaFisica = E5_p("",'Ciencia que estudia las propiedades de la materia y de la energía y establece las leyes que explican los fenómenos naturales, excluyendo los que modifican la estructura molecular de los cuerpos.');
    var E5_reseñaQuimica = E5_p("",'La química es la ciencia natural que estudia la composición, estructura y propiedades de la materia ya sea en forma de elementos, especies, compuestos, mezclas u otras sustancias, así como los cambios que estas experimentan durante las reacciones y su relación con la energía química.');
    var E5_reseñaBiologia = E5_p("",'La biología es la ciencia que estudia los seres vivos. Esto incluye su origen y evolución, así como las características de animales, plantas, hongos y microorganismos, sus procesos vitales, su comportamiento y su interacción con el medio ambiente.');
    var E5_reseñaIngles = E5_p("",'El idioma inglés es una lengua germánica occidental perteneciente a la familia de lenguas indoeuropeas, que surgió en los reinos anglosajones de Inglaterra y se extendió hasta el Norte en lo que se convertiría en el sudeste de Escocia, bajo la influencia del Reino de Northumbria.');
    var E5_reseñaSociales = E5_p("",'Rama del saber humano constituida por el conjunto de conocimientos objetivos y verificables sobre una materia determinada que son obtenidos mediante la observación y la experimentación, la explicación de sus principios y causas y la formulación y verificación de hipótesis y se caracteriza, además, por la utilización de una metodología adecuada para el objeto de estudio y la sistematización de los conocimientos.');
    var E5_reseñaHistoria = E5_p("",'Disciplina que estudia y expone, de acuerdo con determinados principios y métodos, los acontecimientos y hechos que pertenecen al tiempo pasado y que constituyen el desarrollo de la humanidad desde sus orígenes hasta el momento presente.');
    var E5_reseñaDeporte = E5_p("",'El deporte es una actividad física que realiza una persona o grupo siguiendo ciertas reglas y dentro de un espacio físico determinado. Está generalmente asociado a las competencias de carácter formal y sirve para mejorar la salud física y mental.');
    ReactDOM.render(React.createElement('h1',{id:'EJ_h1'},'Pestañas con react'),document.getElementById('EJ5_titulo'));
    ReactDOM.render([E5_reseñaFisica,E5_imgFisica],document.getElementById('E5_fisica'));
    ReactDOM.render([E5_reseñaQuimica,E5_imgQuimica],document.getElementById('E5_quimica'));
    ReactDOM.render([E5_reseñaBiologia,E5_imgBiologia],document.getElementById('E5_biologia'));
    ReactDOM.render([E5_reseñaIngles,E5_imgIngles],document.getElementById('E5_ingles'));
    ReactDOM.render([E5_reseñaSociales,E5_imgSociales],document.getElementById('E5_sociales'));
    ReactDOM.render([E5_reseñaHistoria,E5_imgHistoria],document.getElementById('E5_historia'));
    ReactDOM.render([E5_reseñaDeporte,E5_imgDeporte],document.getElementById('E5_deporte'));

    //agregación de estilos de los elementos de la planilla
    document.getElementById('E5_quimica','E5_biologia','E5_ingles','E5_sociales','E5_historia','E5_deporte').style.display= 'none';
    //funciones
   
    function E5_displayNone(nombre){
        var E5_display = ['E5_fisica','E5_quimica','E5_biologia','E5_ingles','E5_sociales','E5_historia','E5_deporte'];
        for(var i = 0;i<E5_display.length;i++){
            if(nombre === E5_display[i]){
                document.getElementById(E5_display[i]).style.display='flex';
            }else{
                document.getElementById(E5_display[i]).style.display='none';
            }
        }
    }

    function mostrarFisica(){ E5_displayNone('E5_fisica') };
    function mostrarQuimica(){E5_displayNone('E5_quimica')};
    function mostrarBiologia(){E5_displayNone('E5_biologia')};
    function mostrarIngles(){E5_displayNone('E5_ingles')};
    function mostrarSociales(){ E5_displayNone('E5_sociales')};
    function mostrarHistoria(){ E5_displayNone('E5_historia')};
    function mostrarDeporte(){ E5_displayNone('E5_deporte')};

/*Ejercicio 6 */
/*La idea es que este formulario cumpla con los siguientes requerimientos:
Desplegar tres campos: Nombre de usuario, Correo electrónico, Contraseña, Desplegar un botón con nombre Regístrate.
Desplegar un título que identifique el formulario. */

/*Recomendaciones:

Utiliza los elementos de React y los anidamientos correspondientes.
Tienes la posibilidad de usar estilos CSS para aplicar estilos a la página.
Además, tienes a tu disposición los estilos Font Awesome. Particularmente, puedes utilizar los íconos para identificar cada campo del formulario. Por ejemplo:
fa fa-user icon, para el ícono del nombre de usuario
fa fa-envelope icon, para el ícono del correo electrónico
fa fa-key icon, para el ícono de la contraseña
Recuerda que es necesario modificar los archivos index.html, index.js e index.css para construir las páginas en el ambiente React que estamos usando. */

var form = React.createElement('form',{action: ''},
    <h2>Formulario de Registro</h2>,
    <div class="input-container">
    <i class="fa fa-user icon"></i>
    <input class="input-field" type="text" placeholder="Nombre de usuario" name="usrnm"/>
    </div>,
    <div class="input-container">
    <i class="fa fa-envelope icon"></i>
    <input class="input-field" type="text" placeholder="Correo Electrónico" name="email"/>
    </div>,
    <div class="input-container">
    <i class="fa fa-key icon"></i>
    <input class="input-field" type="password" placeholder="Contraseña" name="psw"/>
    </div>,
    <button type="submit" class="btn"><strong>Regístrate</strong></button>);

ReactDOM.render(<div class='form'>{form}</div>,document.getElementById('EJ6_form'));


/*Ejercicio 7 */
/*En este caso, te solicitamos desarrollar una aplicación con React que presente un formulario y que cumpla los siguientes requerimientos:

El correo electrónico,La contraseña,Un título para el formulario,.
En cada campo se debe agregar información que le indique al usuario qué información debe colocar
Utilizar iconos para identificar cada campo del formulario */

ReactDOM.render(<EJ7_form/>,document.getElementById('EJ7_form'));

/*Ejercicio 8 */

ReactDOM.render(<EJ8_form/>,document.getElementById('EJ8_form'));

/*Ejercicio 9 */

ReactDOM.render(<App_Ej9/>,document.getElementById('EJ9'));

/*Ejercicio 10 */

ReactDOM.render(<App_Ej10 oculto={true} mensaje='Este es el estado del componente, entregado desde el padre.'/>,document.getElementById('EJ10'));
reportWebVitals();

/*Ejercicio 11 */


const libros = ['Hacking with React',
    'React Native Express',
    'Mastering Modular JavaScript',
    'Practical Modern JavaScript',
    'U&I with React',
    'Developing with Angular',
    'The Road to learn React',
    'React.js for the Visual Learner',
    'Recipes with Angular.js',
    'Exploring ES6',
    'What You Need to Know about JavaScript',
    'Object-Oriented JavaScript – Second Edition',
    'The JavaScript Way',
    'Thinking in JavaScript',
    'What You Need To Know About Node.js',
    'Angular 2 Succinctly']

ReactDOM.render(<App_Ej11 cantidad={10} libros={libros} />, document.getElementById('EJ11'));
reportWebVitals();