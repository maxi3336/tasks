import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    create: (state, action?: PayloadAction<Task | TaskState | string>) => {
      if (typeof action?.payload === 'string') {
        state.push({
          id: state.length.toString(),
          completed: false,
          content: action.payload || 'Empty Task',
          color: '#333'
        })

        return
      }

      const newTask: TaskState = action?.payload
        ? {
            id: (action.payload as TaskState).id || uuidv4(),
            content: action.payload.content || 'Empty Task',
            color: action.payload.color || '#333',
            completed: action.payload.completed || false
          }
        : {
            id: state.length.toString(),
            completed: false,
            content: 'Empty Task',
            color: '#333'
          }

      state.push(newTask)
    },
    toggle: (state, action: PayloadAction<string>) => {
      const task = state.find((el) => el.id === action.payload)

      if (!task) {
        return
      }

      state.forEach((el) => {
        if (el.id === task.id) {
          el.completed = !el.completed
        }
      })
    }
  }
})

export const { toggle, create } = tasksSlice.actions

export default tasksSlice.reducer
