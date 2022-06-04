import reducer, { CategoryState, create } from './categoriesSlice'

test('should return the initial state', () => {
  expect(
    reducer(undefined, {
      type: undefined
    })
  ).toEqual([])
})

test('should handle a category being added to an empty list', () => {
  const previousState: CategoryState[] = []

  const newTask: CategoryState = {
    id: '1',
    tasksIds: [],
    color: '#333',
    title: 'Run test'
  }

  const equalState: CategoryState[] = [
    {
      id: '1',
      tasksIds: [],
      color: '#333',
      title: 'Run test'
    }
  ]

  expect(reducer(previousState, create(newTask))).toEqual(equalState)
})
