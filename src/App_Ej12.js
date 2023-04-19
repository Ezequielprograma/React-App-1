import React, {Component, component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import './App.css';

class AppEJ12 extends Component {

constructor(props){
    super(props);
    this.state = {
        hecho:false,
        nombreCompleto:'',
        usuario:'',
        correo:'',
        contra:'',
        contra2:'',
        errorMensaje: ''
    }
}

registro = () => {
    this.setState({
        hecho: true,
        nombreCompleto: this.nombreCompleto.value,
        usuario: this.usuario.value,
        contra: this.contra.value,
        contra2: this.contra2.value,
        correo: this.correo.value,
    })
}

nuevoRegistro = () => {
    this.setState({
        hecho: false,
        nombreCompleto: '',
        usuario: '',
        contra: '',
        contra2: '',
        correo: '',
    })

}


render(){

    if(this.state.hecho)
    return(
        <div>
            <h3>Registro Satisfactorio.</h3>
            <p>Muchas gracias por registrarse</p>
            <p>Tu nombre de usuario es: <b>{this.state.usuario}</b></p>
            <div className='btn-group pb-3'>
                    <a className="btn btn-secondary" onClick={this.nuevoRegistro}>
                        <i className="fa fa-user fa-fw"></i>Nuevo Registro</a>
                </div>
        </div>
    )


    return (
        <div className=' border rounded login m-5 container login'>
            <h2>Registro</h2>

            <form>
                <div className="input-group pb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-envelope-o fa-fw"></i>
                        </span>
                    </div>
                    <input id='usuario'  className="form-control" type="text" placeholder="Nombre Completo"
                     ref={input => this.nombreCompleto = input}/>   
                </div>

                <div className="input-group pb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-envelope-o fa-fw"></i>
                        </span>
                    </div>
                    <input id='usuario'  className="form-control" type="text" placeholder="correo Electrónico"
                     ref={input => this.correo = input}/>   
                </div>

                <div className="input-group pb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-envelope-o fa-fw"></i>
                        </span>
                    </div>
                    <input id='usuario'  className="form-control" type="text" placeholder="Usuario"
                     ref={input => this.usuario = input}/>   
                </div>

                <div className="input-group pb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-key fa-fw"></i></span>
                    </div>
                    <input id='clave' className="form-control"
                    type="password" placeholder="contraseña"
                    ref={input => this.contra = input}/>
                </div>
                <div className="input-group pb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-key fa-fw"></i></span>
                    </div>
                    <input id='clave' className="form-control"
                    type="password" placeholder="Confirmación de Contraseña"
                    ref={input => this.contra2 = input}/>
                </div>
                <div className='btn-group pb-3'>
                    <a className="btn btn-secondary" onClick={this.registro}>
                        <i className="fa fa-user fa-fw"></i>Registrar</a>
                </div>
            </form>

        </div>

    )
}
}

export default AppEJ12;

/*
En esta ocasión, te solicitamos desarrollar una aplicación con React que despliegue un formulario de registro de usuario. El formulario debe recibir, al menos, los siguientes campos:

Nombre Completo del Usuario
Correo Electrónico
Nombre de usuario
Contraseña y Confirmación de contraseña
Adicionalmente, requerimos que el formulario tenga un botón con el nombre Registrar. Al darle clic al botón, genera una nueva página con un mensaje. Este mensaje indica que el usuario fue registrado de forma exitosa, incluyendo al menos el nombre completo del usuario.

Recomendaciones:
Hacer uso de los estilos de Bootstrap y Font-awesome para darle formato al formulario.
Incorporar, en cada campo del formulario, un ícono de font-awesome que ayude a identificar visualmente cuál es el contenido del campo del formulario.
Recuerda que los estilos de bootstrap y font-awesome se instalan usando:

*/