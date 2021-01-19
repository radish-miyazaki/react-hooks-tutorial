import React from "react";
const Event = ({ event, dispatch }) => {
  const id = event.id
  const handleClickDeleteBtn = () => {
    const result = window.confirm(`イベント(id=${id})を削除しますか？`)
    if (result) dispatch({ type: 'DELETE_EVENT', id })
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteBtn}>
          削除
        </button>
      </td>
    </tr>
  )
}
export default Event