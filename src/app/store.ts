import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import tasksReducer, { TaskState } from 'features/tasks/tasksSlice'
import categoriesReducer, {
  CategoryState
} from 'features/categories/categoriesSlice'

export interface IRootState {
  tasks: TaskState[]
  categories: CategoryState[]
}

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer
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
