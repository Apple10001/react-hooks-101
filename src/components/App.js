import React , { useReducer, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Events from './Events'
import EventForm from './EventForm'
import OperationLogs from './OperationLogs'

import AppContext from '../contexts/AppContext'

const APP_KEY = 'MyApp'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)

  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  },[state])

  return (
    <>
      <AppContext.Provider value={{state, dispatch}}>
        <div className="container-fluid">
          <EventForm/>
          <Events/>
          <OperationLogs/>
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App;
