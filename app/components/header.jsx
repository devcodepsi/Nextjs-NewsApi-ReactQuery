"use client";
import Link from 'next/link'
import styles from './header.module.css'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {

  const pathname = usePathname()
 
  useEffect(() => {
    const url = `${pathname}`
    console.log(url)
    
  }, [pathname])

  const menu = [
    {id: 1, href: '/', title: 'Home'},
    {id: 2, href: '/category', title: 'Total'},
    {id: 3, href: '/category/it', title: 'It'},
    {id: 4, href: '/category/culture', title: 'Culture'},
    {id: 5, href: '/category/social', title: 'Social'},
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