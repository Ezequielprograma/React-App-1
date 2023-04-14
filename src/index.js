import React from 'react'; /*importamos la librería */
import ReactDOM from 'react-dom'; /*importamos la librería */
import './index.css'; /*Conexion a la hoja de estilos */
import App from './App'; /*Importamos la clase APP */
import reportWebVitals from './reportWebVitals';
import Hola from './Hola.js';
import Item from './item.js';
import Lista from './lista.js';

/*LECCION 1: Creación y renderización de elementos */

/*Forma 1 */
  ReactDOM.render(<App/>,document.getElementById('root'));

/*Forma 2 */
  ReactDOM.render(<div>Nuevo Nodo Html</div>,document.getElementById("html"));

/*Forma 3 */
  const element = (<div> Son las {new Date().toLocaleTimeString()}</div>);
  ReactDOM.render(element,document.getElementById("time"));

/*Forma 4 */
  const element1 = React.createElement('p',{align: 'center'},'Nuevo Parrafo');
  ReactDOM.render(element1,document.getElementById('parrafo'));



/*LECCION 2: Elementos Anidados */

//creamos elementos por separado
//var listElement1 = React.createElement('li',{id:'item1',type:'circle'},'Uno');
//var listElement2 = React.createElement('li',{id:'item2',type:'disc'},'Dos');
//var listElement3 = React.createElement('li',{id:'item3',type:'square'},'Tres');
//var listElement4 = React.createElement('li',{id:'item4',type:'1'},'Cuatro');
//var listElement5 = React.createElement('li',{id:'item5',type:'a'},'Cinco');
//var listElement6 = React.createElement('li',{id:'item6',type:'A'},'Seis');

//creamos un arreglo de elementos, en este caso los items de una lista
//var elements = [listElement1,listElement2,listElement3,listElement4,listElement5,listElement6];

//definimos un elelento de tipo lista ordenada y le adjutamos el arreglo anterior
//var listOfElements = React.createElement('ul','',elements);

//renderizamos el elemento en el contenedor con el id "list"
//ReactDOM.render(listOfElements,document.getElementById('list'));


/*LECCION 3: Fabrica de elementos */


//otra forma de crear elementos anidados o listas es con el metodo createFactory 
//var createListElement = React.createFactory('li');//definimos la variable que va  a ser la fabrica

//creamos cada uno de los elementos que van a conformar la lista utilizando como tipo de elemento la fabrica previamente creada
//var listElement1 = createListElement({id:'item1',type:'circle'},'Uno');
//var listElement2 = createListElement({id:'item2',type:'disc'},'Dos');
//var listElement3 = createListElement({id:'item3',type:'square'},'Tres');
//var listElement4 = createListElement({id:'item4',type:'1'},'Cuatro');
//var listElement5 = createListElement({id:'item5',type:'a'},'Cinco');
//var listElement6 = createListElement({id:'item6',type:'A'},'Seis');

//creamos un elemento donde agrupamos las variables previamente definidas
//var elements = [listElement1,listElement2,listElement3,listElement4,listElement5,listElement6];

//creamos una variable que contendra la lista de elementos asociados 
//var listOfElements = React.createElement('lu',{id:'lista'},elements);

//renderizamos la variable lista en a pagina
//ReactDOM.render(listOfElements,document.getElementById('list2'));


/*LECCIÓN 4: Componentes en React */

//Con el uso de los elementos podemos crear paginas estaticas completas, pero en su mayoria de las paginas son interactivas y requieren que el usuario interactue con  sus componentes y/o funcionalidades, haciendo que las paginas reaccionen  a los eventos que el usuario generan.
// Para react tienen que haber cambios de estados, por lo cual, el componente de la pagina  debe pasar  de un estado a otro, partiendo de un estado inicial  a otro estado.
// ahora bien, los elementos no tienen la capacidad de  cambiar de estados, el unico  proposito de los elementos es  construir y renderizar nodos  del DOM virtual, entonces ¿como hacer para agregar estados virtuales a los elementos  sin estados ?. si no podemos agregar estados a nuestros elementos, podriamos encapsularlos  en algo que nos permita manejar  estados.
//Pensemos en una maquina de  estados simple que representa  una interfaz de usuario, cada acción de usuario, desencadena un cambio de estado  en esa maquina de estado, cada es estado es representado por un elemento  react diferente. En React esta maquina de estado se llama componente.
//Para crear y utilizar el componente React debemos utilizar la siguiente definición:
    /*
    class ReactClass extends Component{ //declaramos una clase denominada ReactClass que extiende o ereda de la clase component
        render() {
            return(
                <h1 className='header'>React component</h1>
            )
        }
    }
    const ReactComponent = ReactDOM.render( //adicionalmente creamos una constante  ReactComponent que  renderiza la clase ReactClass en el documento que tiene como id react-application
        <ReactClass/>,document.getElementById ('react-application')
    );
    ReactDOM.render(ReactComponent,document.getElementById('react-application'));
    */
//la clase component encapsula los estados del componente y describe como debe ser renderizado.
//un componente debe tener como minimo  elmentodo render(), este metodo puede retornar vacio, falso o  un elemento React.
//A su vez los componentes Reacxt se pueden componer y formar una jerarquia
//La mayoria de los componentes son sin estados, estos reciben los estados de sus componente spadre utilizando this.props y se piuede renderizar dependiendo de los datos que eredan de sus padres. Se puede pasar datos al metodo render() del componente via this.props o this.state.
//this.props almacena datos de solo lectura.App pasados por el padre, lo cual quiere decir que pertenecen al padre y no pueden ser cambiados por sus hijos.
//Por otra parte this.states  almacena datos  que son privados para el componente, son datos mutables , es decir que pueden ser modificados por el componente hijo. El componente se volverá a renderizar cuando el estado se actualice.
//Un cambio de estado de un componente  en React se realiza usando setState(nextState,callback), esta funcion utiliza dos parametros, los cuales son:
    //nextstate: representa el siguiente estado  del componente, tambien podria ser una funcion como esta: (prevState, props)=> newState esta funcion toma dos  parametros, los cuales son el estado anterior y propiedades  para retornar un objeto  que representa  un nuevo estado.
    //callback: por otra parte la funcion callback es rara vez usada  porque  React mantiene   la interfaz de usuario actualizada porque invoca la funcion  Render cada vez que actualiza  el estado del componente incluido cualquier hijo del componente  que tambien se vuelven a renderizar.
 //this.serState()    cuando invicamos a la funcion this.setState y le pasamos los datos  que representan el siguiente estado, React fucionara ese proximo estado con el  actual, durante la fusion  Reacxt  sobreescribira el estado actual con el siguiente estado.

//Ejemplo de un componente 
//Forma 1 de usar  y renderizar la clase Hola
ReactDOM.render(<Hola name='NextU...'/>,document.getElementById('L4-hola'))//Renderizamos la clase Hola a la cual a su vez le pasamos la propiedad name
//Forma 2 de usar y renderizar la clase Holas
var hola = React.createElement(Hola,{name: 'NextU, ahora estas usando createElements',align:'Right'},'');
ReactDOM.render(hola,document.getElementById('L4-hola2'));

/*LECCIÓN 4: Componentes anidados en React */

//Forma 1: componentes anidados
var item1 = <Item itemID='1'>Uno</Item>;
var item2 = <Item itemID='2'>Dos</Item>;
var item3 = <Item itemID='3'>Tres</Item>;
var item4 = <Item itemID='4'>Cuatro</Item>;
var item5 = <Item itemID='5'>Cinco</Item>;
var item6 = <Item itemID='6'>Seis</Item>;

var lista = <Lista>{[item1,item2,item3,item4,item5,item6]}</Lista>;
ReactDOM.render(lista,document.getElementById('L4-lista'));
//Forma 2: componentes anidados

var items = [];
var itemsValues= ['Uno','Dos','Tres','Cuatro','Cinco','Seis'];
itemsValues.forEach((item,id)=>{
    items[id]=<Item itemID={id}>{item}</Item>
})

var lista2 = <Lista>{items}</Lista>
ReactDOM.render(lista2,document.getElementById('L4-lista2'));
reportWebVitals();