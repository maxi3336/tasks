import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
// import { fetchTasks } from './tasksAPI'

export interface Task {
  content: string
  color: string
  completed: boolean
}

export interface TaskState extends Task {
  id: string
}

const initialState: TaskState[] = []

export const getTasksAsync = createAsyncThunk('tasks/fetchTasks', async () => {
  // const response = await fetchTasks()
  // return response.data
  return []
})

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    create: (state, action: { payload: Omit<Task, 'completed'> }) => [
      ...state,
      { id: uuidv4(), completed: false, ...action.payload }
    ],
    toggle: (state, action) =>
      state.map((task) => {
        if (task.id !== action.payload) return task
        return { ...task, completed: !task.completed }
      })
  }
})

export const { toggle, create } = tasksSlice.actions

export default tasksSlice.reducer
