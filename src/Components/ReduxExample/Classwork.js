import { createStore } from 'redux'


const INCREMENT = {
    type: 'INCREMENT',
    by:5
}

const DECREMENT = {
    type: 'DECREMENT',
    by:2
}

const initialState = {
    count: 0,
    name:'abc',
    isLoading: true
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INCREMENT': {
            return Object.assign({},state, { count: state.count + action.by })
        }
        case 'DECREMENT': {
            return Object.assign({}, state, { count: state.count - action.by })
        }

        default: {
            return state
        }
    }
}


const store = createStore(reducer)

//store is an object
/*
 {
 getState:()=>{},
 subscribe:()=>{},
 dispatch:()=>{},


 */

store.subscribe(() => {
    const newState = store.getState()
    console.log(newState)
})

store.dispatch(INCREMENT)
store.dispatch(DECREMENT)


