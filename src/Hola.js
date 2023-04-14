// LECCIÓN 4: Props en los componentes
import React from 'react' //importamos la libreria React para poder crear el componente

class Hola extends React.Component{ 
    render(){
        const {
            align='center'
        }= this.props;
        return (
            <div align={align}>
            Hola {this.props.name} !!!
            </div>
        )
        
    }
};
export default Hola;