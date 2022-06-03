import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
// import { fetchTasks } from './tasksAPI'

export interface taskType {
  content: string
  color: string
  completed: boolean
}

export interface taskState extends taskType {
  id: string
}

const initialState: taskState[] = []

export const getTasksAsync = createAsyncThunk('tasks/fetchTasks', async () => {
  // const response = await fetchTasks()
  // return response.data
  return []
})

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    create: (state, action) => [...state, { id: uuidv4(), ...action.payload }],
    toggle: (state, action) =>
      state.map((task) => {
        if (task.id !== action.payload) return task
        return { ...task, completed: !task.completed }
      })
  }
})

export const { toggle, create } = tasksSlice.actions

export default tasksSlice.reducer
