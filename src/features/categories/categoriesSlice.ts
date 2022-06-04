import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
// import { fetchTasks } from './tasksAPI'

export interface Category {
  title: string
  tasksIds: string[]
  color: string
}

export interface CategoryState extends Category {
  id: string
}

const initialState: CategoryState[] = []

export const getCategoriessAsync = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    // const response = await fetchCategores()
    // return response.data
    return []
  }
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Category>) => {
      state.push({ id: uuidv4(), ...action.payload })
    }
  }
})

export const { create } = categoriesSlice.actions

export default categoriesSlice.reducer
