import React, { useState, useContext } from 'react'
import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
} from '../actions'

import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const addEvent = (e) => {
      e.preventDefault()
  
      dispatch({
          type: CREATE_EVENT,
          title,
          body,
      })

      dispatch({
          type: ADD_OPERATION_LOG,
          description: 'イベントを作成しました',
          operatedAt: timeCurrentIso8601()
      })
  
      setTitle('')
      setBody('')
    }
  
    const unCreatable = title === '' || body === ''

    const deleteAllOperaionLogs = e => {
        e.preventDefault()
        if(window.confirm('すべてのログを削除してもよいですか？')){
            dispatch({
                type: DELETE_ALL_OPERATION_LOGS
            })
        }
    }
  
    const deleteAllEvents = e => {
      e.preventDefault()
      if(window.confirm('すべてのイベントを本当に削除してよいですか？')){
        dispatch({ type: DELETE_ALL_EVENTS})
        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'すべてのイベントを削除しました',
            operatedAt: timeCurrentIso8601()
             })
      }
    }
    return (
        <>
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
            <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>すべてのイベントを削除</button>
            <button className="btn btn-danger" onClick={deleteAllOperaionLogs} disabled={state.operationLogs.length === 0}>すべてのログを削除</button>
            </form>
        </>
    )
}

export default EventForm

