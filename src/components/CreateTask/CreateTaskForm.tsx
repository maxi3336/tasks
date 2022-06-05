import { create } from 'features/tasks/tasksSlice'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Button from 'ui/Button'
import Input from 'ui/Input'

interface FormTypes {
  content: string
}

export const CreateTaskForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const { register, handleSubmit, reset } = useForm<FormTypes>()
  const dispatch = useDispatch()

  const submitHandler = ({ content }: FormTypes) => {
    dispatch(
      create({
        color: '#ff9911',
        content,
        completed: false
      })
    )

    reset()
    onSubmit()
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-4"
    >
      <Input
        {...register('content', { required: true })}
        autoFocus
        placeholder="Task content goes here..."
      />
      <Button>Create Task</Button>
    </form>
  )
}
