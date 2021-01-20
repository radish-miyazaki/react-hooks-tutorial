import React, { useState, useContext } from "react"
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
  DELETE_OPERATION_LOGS
} from "../actions"
import { timeCurrentISO8601 } from "../utils";
import AppContext from "../contexts/AppContext"

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを生成しました。',
      operatedAt: timeCurrentISO8601()
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除しますか？')
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENTS
      })

      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentISO8601()
      })
    }
  }

  const deleteAllOperationLogs = e => {
    e.preventDefault()
    const result = window.confirm('全ての操作ログを削除しますか？')
    if (result) {
      dispatch({
        type: DELETE_OPERATION_LOGS
      })
    }
  }

  const unCreatable = title === '' || body === ''

  return (
    <>
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
          disabled={unCreatable}
          className="btn btn-primary"
          onClick={addEvent}
        >
          イベントを作成
        </button>
        <button
          disabled={state.events.length === 0}
          className="btn btn-danger"
          onClick={deleteAllEvents}
        >
          全てのイベントを削除
        </button>
        <button
          disabled={state.operationLogs.length === 0}
          className="btn btn-danger"
          onClick={deleteAllOperationLogs}
        >
          全ての操作ログを削除
        </button>
      </form>
    </>
  )
}

export default EventForm