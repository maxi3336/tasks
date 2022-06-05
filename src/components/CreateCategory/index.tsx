import { create } from 'features/categories/categoriesSlice'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { CheckIcon, CloseIcon, PlusIcon } from 'ui/Icons'
import Input from 'ui/Input'

interface FormTypes {
  title: string
}

export const CreateCategory = () => {
  const [creating, setCreating] = useState(false)
  const dispatch = useDispatch()
  const { register, setFocus, handleSubmit } = useForm<FormTypes>()

  useEffect(() => {
    if (creating) {
      setFocus('title')
    }
  }, [creating])

  const createHandler = ({ title }: FormTypes) => {
    dispatch(
      create({
        color: '#ff9911',
        title,
        tasksIds: []
      })
    )

    setCreating(false)
  }

  return (
    <AnimatePresence>
      <div className="relative flex items-center mt-4">
        <motion.div
          className="flex items-center gap-6 py-4 px-6 rounded-2xl"
          animate={creating ? 'open' : 'closed'}
          variants={{
            open: {
              x: 'calc(-100% - 5rem)'
            },
            closed: {
              x: 0
            }
          }}
          onClick={() => setCreating(true)}
        >
          <PlusIcon
            style={{ width: '1rem', height: '1rem', color: '#64748b' }}
          />
          <span className="text-sm tracking-wide text-slate-500">
            Create new category
          </span>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(createHandler)}
          animate={creating ? 'open' : 'closed'}
          variants={{
            open: {
              x: 0
            },
            closed: {
              x: 'calc(100% + 5rem)'
            }
          }}
          className="absolute w-full flex items-center justify-between"
        >
          <Input
            {...register('title')}
            placeholder="Category title..."
            style={{ width: '70%' }}
          />
          <CheckIcon
            onClick={() => setCreating(false)}
            style={{ width: '1.3rem', height: '1.3rem' }}
          />
          <CloseIcon
            onClick={() => setCreating(false)}
            style={{ width: '1.3rem', height: '1.3rem' }}
          />
        </motion.form>
      </div>
    </AnimatePresence>
  )
}
