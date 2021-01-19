import React, { useReducer } from 'react'
import Events from './Events'
import EventForm from './EventForm'
import AppContext from "../contexts/AppContext"
import reducer from '../reducers'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'Hello, Consumer!'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App