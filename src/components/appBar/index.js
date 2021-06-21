import React, {Component} from 'react';
import Page from './page';
import {connect} from 'react-redux';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';

class appBar extends Component {
    constructor(props) {
        super(props);

        // estado inicial del texto a mostrar
        this.state = {
            text: '',
        }

        // bind de los metodos
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    // metodo a ejecutar cuando se ingrese un texto en el input
    onChangeText(text) {
        this.setState({ text });
        this.props.findSuggestions(text);
    }

    onChangeSelection(text) {
        this.setState({ text });
        this.props.findResults(text);
    }

    render() {
        const {text} = this.state;
        const {suggestions} = this.props;

        // props que se envian dentro del componente de page
        return (
            <Page text={text} suggestions={suggestions} onChangeText={this.onChangeText}  onChangeSelection={this.onChangeSelection} />
        );
    }
}

// Metodo de redux que contiene que retorna los datos almacenados en el estado que el componente necesita
const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    };
}

// Metodo redux que realize el envio de un dato al estado
// Esta es la primera forma para compleja de hace uso del mapdispatchtoprops
// const mapDispatchToProps = (dispatch) => {
//     return {
//         findSuggestions: text => dispatch(findSuggestions(text))
//     }
// }

// Metodo redux que realize el envio de un dato al estado
// Esta es la segunda forma mas sencilla de hacer uso del mapdispatchtoprops
const mapDispatchToProps = {
    findSuggestions,
    findResults,
}

export default connect(mapStateToProps, mapDispatchToProps)(appBar);