import React, {Component, component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import './App.css';

class AppL6 extends Component {

constructor(props){
    super(props);
    this.state = {
        hecho:false,
        usuario:'',
        errorMensaje: ''
    }
}

registro = () => {
    this.setState({
        hecho: true,
        usuario: this.usuario.value
    })
}

nuevoRegistro = () => {
    this.setState({
        hecho: false,
        usuario: ''
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
                    <input id='usuario'  className="form-control" type="text" placeholder="correo Electrónico"
                     ref={input => this.usuario = input}/>   
                </div>
                <div className="input-group pb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-key fa-fw"></i></span>
                    </div>
                    <input id='clave' className="form-control"
                    type="password" placeholder="contraseña"
                    ref={input => this.clave = input}/>
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

export default AppL6;