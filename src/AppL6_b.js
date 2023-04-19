import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import './App.css';


//En esta ocasión desarrollamos una app que cuenta los segundos transcurridos desde que la pagina se abre y adicionalmente  se genera una barra de progreso  con base en una cantidad de segundos que se supone debemos esperar para que la pagina culmine  de desplegarse.
class AppL6_b extends Component {

    constructor(props){
        super();
        this.state = {
            contador:0,
            tiempo: props.tiempo,
            avance: 0,
            fa_spin:'fa_spin'
        }
}
/*funcion que genera el conteo de los segundos */
tick(){//nos va a permitir modificar el estado del contador
    this.setState((prevState)=>({//usar el valor del estado previo nos permite manejar los valores del estado  antes que sean cambiados 
        contador: prevState.contador + 1,
        avance: ((prevState.contador + 1)/prevState.tiempo)*100
    }))
    if(this.state.avance>=100)
    {
        this.setState({
            fa_spin:''
        })
        clearInterval(this.interval)
    }
}

componentDidMount(){//este metodo se ejecuta exactamente despues que se hace el renderizado  del componente
    this.interval = setInterval(()=> this.tick(),1000)//definimos un atributo interval de este componente  y le vamos a asignar setInterval lo cual hace posible invocar una funcion cada sierto tiempo
//luego que se renderize la pagina se invoca la función tick cada 1000 milisegundos.
//de esta forma hacemos que se vaya modificando el contador de 1 en 1  cada segundo
}

render () {
        return(
            <div className='border border-primary m-3 p-3'>
                <p className='font-weight-light'>Segundos a esperar: {this.state.tiempo}</p>
                <p className='font-weight-light'>Segundos transcurridos: {this.state.contador}</p>
                
                <div className='progress m-3'>
                    <p className='pr-2'><i className={'fa fa-safari size' + this.state.fa_spin}></i></p>
                    <div className='progress-bar' role='progressbar'
                    aria-valuenow="25" aria-valuemin="0" aria-valuemax= "100"
                    style={{width: this.state.avance + '%'}}>{this.state.avance.toFixed(2)}%</div>
                </div>

            </div>
        );
    }
}

export default AppL6_b;

//metodo componentDidMount se aplica en el momento denominado montaje del siclo de vida de un componente React.

//darle movimiento al spiner: className={'fa fa-safari size' + this.state.fa_spin} : con esto le estamos diciendo al className  que cuando se renderize utilice ademas de lo que ya tiene  definido como  estilo,(el estilo fa_spin), por defecto cuando se renderize la pagina  el spiner tiene movimiento.