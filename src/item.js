import React from 'react';

class Item extends React.Component{
    render(){
        const{
            type='1'
        }= this.props;
        return(
            <li id={this.props.itemID} type={type}>
                {this.props.children}
            </li>
        )
    }
}

export default Item;