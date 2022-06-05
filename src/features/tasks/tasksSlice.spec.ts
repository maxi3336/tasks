import reducer, { create, remove, toggle, edit, TaskState } from './tasksSlice'

test('should return the initial state', () => {
  expect(
    reducer(undefined, {
      type: undefined
    })
  ).toEqual([])
})

test('should handle a todo being added to an empty list', () => {
  const prevState: TaskState[] = []

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

  expect(reducer(prevState, create(newTask))).toEqual(equalState)
})

test('should handle a todo being added to an existing list', () => {
  const prevState: TaskState[] = [
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

  expect(reducer(prevState, create('Use Redux'))).toEqual(equalState)
})

test("should toggle 'completed' field of a task", () => {
  const prevState: TaskState[] = [
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

  expect(reducer(prevState, toggle('555'))).toEqual(equalState)
})

test('should remove a task with single task state', () => {
  const prevState: TaskState[] = [
    {
      content: 'Remove task',
      color: '#333',
      completed: false,
      id: '123'
    }
  ]

  const equalState: TaskState[] = []

  expect(reducer(prevState, remove('123'))).toEqual(equalState)
})

test('should remove a task with multiple tasks state', () => {
  const prevState: TaskState[] = [
    {
      content: 'Task Content',
      color: '#333',
      completed: false,
      id: '0'
    },
    {
      content: 'Remove this one',
      color: '#333',
      completed: false,
      id: '1'
    },
    {
      content: 'Task Content',
      color: '#333',
      completed: false,
      id: '2'
    }
  ]

  const equalState: TaskState[] = [
    {
      content: 'Task Content',
      color: '#333',
      completed: false,
      id: '0'
    },
    {
      content: 'Task Content',
      color: '#333',
      completed: false,
      id: '2'
    }
  ]

  expect(reducer(prevState, remove('1'))).toEqual(equalState)
})

test('should remove some tasks', () => {
  const prevState: TaskState[] = [
    {
      content: 'Task Content',
      color: '#333',
      completed: false,
      id: '0'
    },
    {
      content: 'Remove this one',
      color: '#333',
      completed: false,
      id: '1'
    },
    {
      content: 'Task Content',
      color: '#333',
      completed: false,
      id: '2'
    }
  ]

  const equalState: TaskState[] = [
    {
      content: 'Task Content',
      color: '#333',
      completed: false,
      id: '0'
    }
  ]

  expect(reducer(prevState, remove(['1', '2']))).toEqual(equalState)
})

test('should edit task', () => {
  const prevState: TaskState[] = [
    {
      id: '0',
      content: 'Task Content Prev',
      completed: false,
      color: '#333'
    }
  ]

  const equalState: TaskState[] = [
    {
      id: '0',
      content: 'Task Content Edited',
      completed: true,
      color: '#123'
    }
  ]

  expect(
    reducer(
      prevState,
      edit({
        id: '0',
        content: 'Task Content Edited',
        completed: true,
        color: '#123'
      })
    )
  ).toEqual(equalState)
})
