import React, { useReducer, useEffect } from 'react'
import Events from './Events'
import EventForm from './EventForm'
import Logs from "./Logs"
import reducer from '../reducers'
import AppContext from "../contexts/AppContext"
import 'bootstrap/dist/css/bootstrap.min.css'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)

  // localStorageから呼び出す
  const initialState = appState ? JSON.parse(appState) : { events: [], operationLogs: [] }

  const [state, dispatch] = useReducer(reducer, initialState)

  // useEffectでstateを監視し、localStorageへ保存する
  useEffect(() => {
    const str = JSON.stringify(state)
    localStorage.setItem(APP_KEY, str)
  }, [state])

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