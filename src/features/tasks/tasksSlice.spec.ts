import reducer, { create, toggle, TaskState } from './tasksSlice'

test('should return the initial state', () => {
  expect(
    reducer(undefined, {
      type: undefined
    })
  ).toEqual([])
})

test('should handle a todo being added to an empty list', () => {
  const previousState: TaskState[] = []

  const newTask: TaskState = {
    id: '1',
    color: '#333',
    content: 'Run the tests',
    completed: false
  }

  const equalState: TaskState[] = [
    {
      id: '1',
      color: '#333',
      content: 'Run the tests',
      completed: false
    }
  ]

  expect(reducer(previousState, create(newTask))).toEqual(equalState)
})

test('should handle a todo being added to an existing list', () => {
  const previousState: TaskState[] = [
    {
      content: 'Run the tests',
      color: '#333',
      completed: false,
      id: '0'
    }
  ]

  const equalState: TaskState[] = [
    {
      content: 'Run the tests',
      color: '#333',
      completed: false,
      id: '0'
    },
    {
      content: 'Use Redux',
      color: '#333',
      completed: false,
      id: '1'
    }
  ]

  expect(reducer(previousState, create('Use Redux'))).toEqual(equalState)
})

test("should toggle 'completed' field of a task", () => {
  const previousState: TaskState[] = [
    {
      content: 'Toggle status',
      color: '#333',
      completed: false,
      id: '555'
    }
  ]

  const equalState: TaskState[] = [
    {
      content: 'Toggle status',
      color: '#333',
      completed: true,
      id: '555'
    }
  ]

  expect(reducer(previousState, toggle('555'))).toEqual(equalState)
})
