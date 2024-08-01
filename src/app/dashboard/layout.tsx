import styles from './styles.module.css'

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className={styles.dashboard}>
        {children}
      </section>
    )
  }