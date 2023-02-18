import Link from 'next/link'
import { ReactNode } from 'react'
import cl from 'classnames'

import styles from './style.module.scss'

interface TitleProps {
  size?: 'Medium' | 'Large',
  children: ReactNode,
}


export const Title: React.FC<TitleProps> = ({
  size ='Medium',
  children,
}) => {
  console.log(children);
  return (
    <h2 className={cl(styles.title, styles[`title${size}`])}>
      {children}
    </h2>
  )
}

/*
React.createElement(
    element,
    [config],
    [...children]
  )
  */