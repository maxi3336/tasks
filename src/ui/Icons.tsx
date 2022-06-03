import {
  XIcon,
  SearchIcon as Search,
  MenuAlt4Icon
} from '@heroicons/react/outline'
import { ElementType, FC, ComponentProps } from 'react'

const IconWrapper: FC<ComponentProps<'svg'> & { icon: ElementType }> = ({
  icon: Icon,
  className,
  ...props
}) => {
  let classNames = 'w-8 h-8 text-slate-500 cursor-pointer'

  if (className) {
    classNames += ' ' + className
  }

  return <Icon className={classNames} {...props} />
}

export const CloseIcon = (props: ComponentProps<'svg'>) => (
  <IconWrapper icon={XIcon} {...props} />
)

export const SearchIcon = (props: ComponentProps<'svg'>) => (
  <IconWrapper icon={Search} {...props} />
)

export const MenuIcon = (props: ComponentProps<'svg'>) => (
  <IconWrapper icon={MenuAlt4Icon} {...props} />
)
