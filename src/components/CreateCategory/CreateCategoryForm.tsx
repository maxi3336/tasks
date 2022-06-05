import { create } from 'features/categories/categoriesSlice'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Button from 'ui/Button'
import Input from 'ui/Input'

interface FormTypes {
  title: string
}

export const CreateCategoryForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const { register, handleSubmit } = useForm<FormTypes>()
  const dispatch = useDispatch()

  const submitHandler = ({ title }: FormTypes) => {
    dispatch(
      create({
        color: '#ff9911',
        title,
        tasksIds: []
      })
    )

    onSubmit()
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-4"
    >
      <Input
        {...register('title', { required: true })}
        autoFocus
        placeholder="Category title goes here..."
      />
      <Button>Create Category</Button>
    </form>
  )
}
