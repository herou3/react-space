import Link from 'next/link'
import cl from 'classnames'

import styles from './style.module.scss'


interface SocialNetworksProps {}

const socialNetworks = [
  {
    id: 1,
    title: 'DisCord',
    className: 'DisCord',
    link: 'https://facebook.com'
  },
  {
    id: 2,
    title: 'Twitter',
    className: 'Twitter',
    link: 'https://twitter.com'
  },
  {
    id: 3,
    title: 'AntDisign',
    className: 'AntDisign',
    link: 'https://antdisign.com'
  },
  
]

export const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
  return (
    <ul
      className={styles.socialNetworks}
    >
      {socialNetworks.map((socialNetwork) => (
            <li
              key={socialNetwork.id}
              className={styles.socialNetworksItem}
            >
            <a 
              href={socialNetwork.link}
              target='_blank'
              rel='noreferrer'
              className={cl(
                styles.socialNetworksLink,
                styles[`socialNetworks${socialNetwork.className}`])}
            >
              {socialNetwork.title}
            </a>
            </li>
      ))}
    </ul>
  ) 
}