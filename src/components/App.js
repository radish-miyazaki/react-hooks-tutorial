import React, { useReducer } from 'react'
import Events from './Events'
import EventForm from './EventForm'
import Logs from "./Logs"
import reducer from '../reducers'
import AppContext from "../contexts/AppContext"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const initialState = { events: [], operationLogs: [] }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <Logs />
      </div>
    </AppContext.Provider>
  )
}

export default App