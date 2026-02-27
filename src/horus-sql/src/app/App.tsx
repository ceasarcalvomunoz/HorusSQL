import { Layout } from "../components/Layout"
import { SqlInput } from "../components/SqlInput"
import { SqlOutput } from "../components/SqlOutput"
import { useSqlEngine } from "../aplication/hooks/useSqlEngine"

export function App() {

  const {
    sql,
    setSql,
    parsed,
    explanation,
    error,
    analyze
  } = useSqlEngine()

  return (
    <Layout>
      <SqlInput
        sql={sql}
        onChange={setSql}
        onAnalyze={analyze}
      />

<SqlOutput
  ast={parsed}
  explanation={explanation}
  error={error}
/>
    </Layout>
  )
}