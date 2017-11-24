import {createStore} from 'redux'

const initialState= {
    count:0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INCREMENT': {
            return Object.assign({},state, { count: state.count + action.by })
        }
        case 'DECREMENT': {
            return Object.assign({}, state, { count: state.count - action.by})
        }

        default: {
            return state
        }
    }
}
const Store = createStore(reducer);





export default Store;

