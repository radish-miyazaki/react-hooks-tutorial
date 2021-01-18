import React, { useState, useReducer } from 'react'
import reducer from '../reducers'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({ type: 'CREATE_EVENT', title, body })

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()

    dispatch({ type: 'DELETE_ALL_EVENTS' })
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="formEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            className="form-control"
            id="formEventBody" />
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
        >
          イベントを作成
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
        >
          全てのイベントを削除
        </button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>内容</th>
          <th></th>
        </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default App