/**
 * Created by Administrator on 2016/10/26.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = function(){
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({type:'INCREMENT'})}
            onDecrement={() => store.dispatch({type:'DESREMENT'})}
        />,
        rootEl
    )
}

render();
store.suscribe(render);
