import React, { useState, useContext } from "react"
import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../actions"
import AppContext from "../contexts/AppContext"

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({ type: CREATE_EVENT, title, body })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除しますか？')
    if (result) dispatch({ type: DELETE_ALL_EVENTS })
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
      </form>
    </>
  )
}

export default EventForm