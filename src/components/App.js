import React , { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Events from './Events'
import EventForm from './EventForm'

const App = () => {
  const [state, dispatch] = useReducer(reducer,[])

  return (
    <>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
      </div>
    </>
  )
}

export default App;
