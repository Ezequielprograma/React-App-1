import React from 'react';

export default class Lista extends React.Component{
    render(){
        return(
            <lu>
                {this.props.children}
            </lu>
        )
    }
}