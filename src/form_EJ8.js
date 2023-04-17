import React from 'react' //importamos la libreria React para poder crear el componente
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

/*El formulario debe solicitar como mínimo:

Primer Nombre,Apellido,Correo Electrónico,Contraseña,Dirección,Ciudad,Código Postal
El usuario debe poder indicar que está de acuerdo con el registro de sus datos personales
Cada campo debe tener un nombre, un texto interno y una imagen que le permita al usuario identificar qué información se debe colocar en cada campo */


class EJ8_form extends React.Component {
    render() {
  
        return (
            <div class='border rounded login m-5 container'>
      <h2>Ingreso</h2>
      <form class="container-fluid">
            <div class="row">
                    <div class= "col-6" > 
                        <label>Primer Nombre</label>
                        <div class=" input-group pb-3">
                            
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-user icon  fa-fw"></i></span>
                            </div>

                            <input class="form-control" type="text" placeholder="Primer Nombre"required/>
                        
                        </div>
                    </div>    
                <div class="col-6">
                    <label>Apellido</label>
                    <div class="input-group pb-3">

                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user icon  fa-fw"></i></span>
                        </div>

                        <input class="form-control" type="text" placeholder="Apellido" required/>
                    
                    </div>
                </div>
                    
            </div>
                    
            <div class="row">
                    <div class="col-6"> 
                        <label>Correo Electronico</label>
                        <div class=" input-group pb-3">
                            
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-envelope icon"></i></span>
                            </div>

                            <input class="form-control" type="text" placeholder="Correo Electrónico" required/>
                        
                        </div>
                    </div> 

                <div class="col-6">
                    <label>Contraseña</label>
                    <div class="input-group pb-3">

                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-key icon fa-fw"></i></span>
                        </div>

                        <input class="form-control" type="password" placeholder="Contraseña" required/>
                    
                    </div>
                </div>
                    
            </div>
                     
            <div class="row">
                    <div class="col"> 
                        <label>Dirección</label>
                        <div class=" input-group pb-3">
                            
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-home icon fa-fw"></i></span>
                            </div>

                            <input class="form-control" type="text" placeholder="Dirección" required/>
                        
                        </div>
                    </div> 

            </div>

            <div class="row">
                    <div class="col-6"> 
                        <label>Ciudad</label>
                        <div class=" input-group pb-3">
                            <input class="form-control" type="text" required/>
                        </div>
                    </div> 

                <div class="col-3">
                    <label>Codigo Postal</label>
                    <div class="input-group pb-3">

                        <input class="form-control" type="text" required/>
                    
                    </div>
                </div>
                    
            </div>

            <div class="row">
                    <p>
                        <input  type="checkbox" required/>
                        <label for="accept">Estoy de acuerdo con el registro de mis datos personales </label>
                  </p>
                
            </div>
           <div class="col-3">
            
           </div>
           <button type="submit" class="col-3 btn btn-primary">Guardar</button>
           
      </form>
      </div>
        );
    }
  };
  export default EJ8_form;
  
  