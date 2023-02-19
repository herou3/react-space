import Link from 'next/link'
import { Fragment } from 'react'
import cl from 'classnames'

import styles from './style.module.scss'

interface NavigationProps {}

const links = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    active: true
  },
  {
    id: 2,
    title: 'Factions', 
    link: '/',
    active: false
  },
  {
    id: 3,
    title: 'Roadmap',
    link: '/',
    active: false
  }
]
 
export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <nav className={styles.navigation}>
      {links.map((link, id) => {
        return (
          <Fragment key={link.id}>
            <Link 
              href={link.link}
              className={cl(styles.navigationLink, link.active && styles.navigationLinkActive)}
            >
              {link.title}
            </Link>
            {id < links.length-1 && ( 
              <span className={styles.navigationStar} />
            )}
          </Fragment>
        )
      })}
    </nav>
  )
}
