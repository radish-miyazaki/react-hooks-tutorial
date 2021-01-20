import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
  DELETE_OPERATION_LOGS
} from "../actions"

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
    case DELETE_ALL_OPERATION_LOGS:
      const operationLog ={
        description: action.description,
        operatedAt: action.operatedAt
      }
      return [operationLog, ...state] // 一番先頭// に追加する

    case DELETE_OPERATION_LOGS:
      return []

    default:
      return state
  }
}

export default operationLogs