import { create } from 'features/categories/categoriesSlice'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Button from 'ui/Button'
import { CheckIcon, CloseIcon, PlusIcon } from 'ui/Icons'
import Input from 'ui/Input'

interface FormTypes {
  title: string
}

export const CreateCategory = () => {
  const [creating, setCreating] = useState(false)
  const dispatch = useDispatch()
  const { register, setFocus, handleSubmit, reset } = useForm<FormTypes>()

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

    reset()
    setCreating(false)
  }

  return (
    <AnimatePresence>
      <div className="relative flex items-center mt-4">
        <motion.div
          tabIndex={0}
          onKeyPress={() => setCreating(true)}
          className="flex items-center gap-6 py-4 px-6 rounded-2xl"
          animate={creating ? 'open' : 'closed'}
          variants={{
            open: {
              x: 'calc(100% + 15rem)'
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
              x: 'calc(-100% - 15rem)'
            }
          }}
          className="absolute top-0 w-full items-center gap-2"
        >
          <Input
            {...register('title', { required: true })}
            placeholder="Category title..."
            style={{ width: '100%' }}
          />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button style={{ height: '2rem' }}>
              <CheckIcon
                className="text-white"
                style={{ width: '1.3rem', height: '1.3rem', margin: '0 auto' }}
              />
            </Button>
            <Button
              type="button"
              onClick={() => setCreating(false)}
              style={{ height: '2rem', backgroundColor: '#FF5959' }}
            >
              <CloseIcon
                className="text-white"
                style={{ width: '1.3rem', height: '1.3rem', margin: '0 auto' }}
              />
            </Button>
          </div>
        </motion.form>
      </div>
    </AnimatePresence>
  )
}
