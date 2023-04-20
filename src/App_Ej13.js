import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import './App.css';
import './index.css'
//En esta ocasión desarrollamos una app que cuenta los segundos transcurridos desde que la pagina se abre y adicionalmente  se genera una barra de progreso  con base en una cantidad de segundos que se supone debemos esperar para que la pagina culmine  de desplegarse.

/*solucion 1 */
/*
class AppEJ13 extends Component {
    constructor(){
        super();
        this.state ={
            milisegundos: 0,
            segundos: 55,
            minutos: 59,
            horas: 23,
            minutoUno: false,
        }
    }

    setMilisegundos(){
        if(this.state.milisegundos < 59){
            this.setState((prevState)=>({//usar el valor del estado previo nos permite manejar los valores del estado  antes que sean cambiados 
                milisegundos: prevState.milisegundos + 10,
            }))
        }else{
            this.setState((prevState)=>({//usar el valor del estado previo nos permite manejar los valores del estado  antes que sean cambiados 
                milisegundos: 1,
            }))
        }
    }

    tick(){//nos va a permitir modificar el estado del contador
        if(this.state.segundos < 59){
            this.setState((prevState)=>({//usar el valor del estado previo nos permite manejar los valores del estado  antes que sean cambiados 
                segundos: prevState.segundos + 1,
            }))
        }else{
            this.setState((prevState)=>({//usar el valor del estado previo nos permite manejar los valores del estado  antes que sean cambiados 
                segundos: 1,
            }))

            if(this.state.minutos < 59){
                this.setState((prevState)=>({//usar el valor del estado previo nos permite manejar los valores del estado  antes que sean cambiados 
                    minutos: prevState.minutos + 1,
                }))
            }else{
                this.setState((prevState)=>({//usar el valor del estado previo nos permite manejar los valores del estado  antes que sean cambiados 
                    minutos: 1,
                }))
                if(this.state.horas < 23){
                    this.setState((prevState)=>({//usar el valor del estado previo nos permite manejar los valores del estado  antes que sean cambiados 
                        horas: prevState.horas + 1,
                    }))
                }else{
                    this.setState((prevState)=>({//usar el valor del estado previo nos permite manejar los valores del estado  antes que sean cambiados 
                        horas: 0,
                    }))
                }
            }
        }

       

   }    
    componentDidMount(){//este metodo se ejecuta exactamente despues que se hace el renderizado  del componente
        this.interval = setInterval(()=> this.setMilisegundos(),100)
        this.interval = setInterval(()=> this.tick(),1000)
        
    }
    render () {
        return(
            <div className='text-center border border-primary m-3 p-3'>
                <h2>Cronómetro</h2>
                <div>
                {this.state.milisegundos}
                </div>
                <div>
                :
                </div>
                <div>
                {this.state.segundos}
                </div>
                <div>
                    :
                </div>
                <div>
                {this.state.minutos}
                </div>
                    <div>
                        :
                    </div>
                    <div>
                    {this.state.horas}
                    </div>
                
            </div>
        );
    }
}
*/
/*solución 2 */
class AppEJ13 extends Component {
  constructor(){
    super();
    this.state={
      contadorH:0,
      contadorM:0,
      contadorS:0,
      contadorm:0
    };
    this.interval = setInterval(this.contar,10)
  }

  contar = () => {

    this.setState((prevState) => {
      var tempContm = prevState.contadorm+1
      var tempContS = prevState.contadorS
      var tempContM = prevState.contadorM
      var tempContH = prevState.contadorH
      if (tempContm === 100) {
        tempContm = 0
        tempContS = tempContS + 1
      }
      if (tempContS === 60){
        tempContS=0
        tempContM = tempContM+1
      }
      if (tempContM === 60){
        tempContM=0
        tempContH=tempContH+1
      }
      return {
        contadorm: tempContm,
        contadorS: tempContS,
        contadorM: tempContM,
        contadorH: tempContH
      }
    })
  }

  render() {
    return (
      <div className='container border rounded m-5' style={{width:'450px'}} >
        <div className='row' >
          <div className='col-sm-12 text-center h3' >
            <strong>Cronómetro</strong>
          </div>
        </div>
        <div className='row h1 text-center m-0 p-0 border rounded my-3' >
          <div className='col-sm-2' id='horas'>
          {this.state.contadorH}
          </div>
          <div className='col-sm-1' >
            :
          </div>
          <div className='col-sm-2'>
          {this.state.contadorM}
          </div>
          <div className='col-sm-1' >
            :
          </div>
          <div className='col-sm-2'>
          {this.state.contadorS}
          </div>
          <div className='col-sm-1' >
            :
          </div>
          <div className='col-sm-2' >
           {this.state.contadorm}
          </div>
        </div>
      </div>
    );
  }
}






export default AppEJ13;

/*
A continuación, te solicitamos desarrollar una aplicación con React que despliegue un cronómetro con la siguiente información:

el tiempo transcurrido desde que se inicia la página
milisegundos contados de 10 en 10
segundos de 0 a 59
minutos de 0 a 59
horas de 0 a 24

*/

