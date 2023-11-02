import styles from './page.module.css'

const LayoutSub = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.contents}>{children}</div>
        <aside className={styles.sidebar}>사이드바</aside>
    </div>
  )
}

export default LayoutSub