import styles from './styles.module.css'

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section >
        <p className={styles.dashboard}>Paragraph to check styles RED</p>
        {children}
      </section>
    )
  }