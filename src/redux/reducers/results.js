import items from '../../data/items';
import {type as findResultsType} from '../actions/findResults';

const defaultState = [];

function reducer(state = defaultState, {type, payload}) {
    switch (type) {
        case findResultsType: {
            const regex = new RegExp(`^${payload}`, 'i');
            return items.filter(n => regex.test(n.title));
        }
        default:
            return state;
    }
}

export default reducer;