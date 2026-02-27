import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>HorusSQL</h1>
        <p>SQL Interpretation Engine</p>
      </header>

      <main style={styles.main}>
        {children}
      </main>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    padding: "2rem"
  },
  header: {
    marginBottom: "2rem"
  },
  main: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem"
  }
}