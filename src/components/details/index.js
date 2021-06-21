import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from './page';
import findCurrentItem from '../../redux/actions/findCurrentItem';

class Details extends Component {
    componentDidMount() {
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
    }
    render() {
        const {currentItem} = this.props;
        return (
            <Page currentItem={currentItem} goTo={(path) => {this.props.history.push(path)}} />
        );
    }
}

// Metodo de redux para obtener el dato almacenado en el store y pasarlo al componente que hara uso de este
const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem,
    };
}

const mapDispatchToProps = {
    findCurrentItem
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));