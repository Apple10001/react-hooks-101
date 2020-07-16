import React from 'react'

const Event = ({event, dispatch}) => {
    const handleClickDeleteButton = () => {
        const result = window.confirm(`イベント(id=${event.id})を本当に削除しても良いですか？`)
        if(result){
            dispatch({
                type: 'DELETE_EVENT',
                id: event.id
            })
        }
      }
      
      return (
        <tr>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
          <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>
            削除
          </button></td>
        </tr>
      )
} 

export default Event
