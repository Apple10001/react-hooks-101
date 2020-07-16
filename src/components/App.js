import React , { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Event from './Event'

const App = () => {
  const [state, dispatch] = useReducer(reducer,[])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  console.log(state)
  
  const addEvent = (e) => {
    e.preventDefault()

    dispatch({
        type: 'CREATE_EVENT',
        title,
        body,
    })

    setTitle('')
    setBody('')
  }

  const unCreatable = title === '' || body === ''

  const deleteAllEvents = e => {
    e.preventDefault()
    if(window.confirm('すべてのイベントを本当に削除してよいですか？')){
      dispatch({ type: 'DELETE_ALL_EVENTS'})
    }
  }

  return (
    <>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
          </div>

          <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成</button>
          <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>すべてのイベントを削除</button>
        </form>

        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { state.map((event) => (<Event key={event.id} event={event} dispatch={dispatch}/>))}
            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App;
