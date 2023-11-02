"use client";
import Link from 'next/link'
import styles from './header.module.css'
import { usePathname } from 'next/navigation'

const Header = () => {

  const pathname = usePathname()

  const menu = [
    //{id: 1, href: '/', title: 'Home'},
    {id: 2, href: '/category', title: 'All'},
    {id: 3, href: '/category/business', title: 'Biz'},
    {id: 4, href: '/category/entertainment', title: 'Ent'},
    {id: 5, href: '/category/technology', title: 'Tech'},
  ]

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">Site Name</Link>
      </h1>
      <nav className={styles.nav}>
          {menu.map((item) => (
            <Link key={item.id} href={item.href} className={pathname === item.href ? styles.link+' '+styles.active : styles.link}>{item.title}</Link>
          ))}
      </nav>
    </header>
  )
}

export default Header