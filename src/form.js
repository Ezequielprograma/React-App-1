import React from 'react' //importamos la libreria React para poder crear el componente
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

class EJ7_form extends React.Component {
    render() {

        return (
            <div class='border rounded login m-5 container'>
      <h2>Ingreso</h2>
      <form>
        <div class="input-group pb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-envelope-o fa-fw"></i></span>
          </div>
          <input class="form-control" type="text" placeholder="Correo Electrónico"/>
        </div>
        <div class="input-group pb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-key fa-fw"></i></span>
          </div>
          <input class="form-control" type="password" placeholder="Contraseña"/>
        </div>
      </form>
      </div>
        );
    }
};

export default EJ7_form;

/*
Recomendaciones:

Utiliza los componentes de React
Tienes la posibilidad de usar estilos CSS para aplicar estilos a la página
Además, tienes a tu disposición los estilos Font Awesome y Boostrap Particularmente, puedes utilizar los íconos para identificar cada campo del formulario. Por ejemplo:
//fa fa-envelope (font awesome) icon, para el ícono del correo electrónico
//fa fa-key icon (font awesome), para el ícono de la contraseña
//input-group (boostrap), para agrupar ícono y campo
input-group-prepend, para agregar un ícono al campo, como parte del mismo campo
input-group-text, para el campo de texto
form-control, para darle formato al campo
Recuerda que es necesario modificar los archivos index.html, index.js e index.css para construir las páginas en el ambiente React que estamos usando.
*/
