import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import tasksReducer, { taskState } from 'features/tasks/tasksSlice'

export interface IRootState {
  tasks: taskState[]
}

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
