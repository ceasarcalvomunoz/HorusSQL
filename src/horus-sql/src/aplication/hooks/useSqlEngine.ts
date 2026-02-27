import { useState } from "react"
import { SqlParser } from "../../domain/parser/SqlParser"
import { SqlExplainer } from "../../domain/explainer/SqlExplainer"
import { ParsedQuery } from "../../domain/types/SqlTypes"

export function useSqlEngine() {
  const [sql, setSql] = useState("")
  const [parsed, setParsed] = useState<ParsedQuery | null>(null)
  const [explanation, setExplanation] = useState("")
  const [error, setError] = useState<string | null>(null)

  function analyze() {
    try {
      setError(null)

      const parsedResult = SqlParser.parse(sql)
      const explanationResult = SqlExplainer.explain(parsedResult)

      setParsed(parsedResult)
      setExplanation(explanationResult)

    } catch (err) {
      setError("Invalid SQL query")
      setParsed(null)
      setExplanation("")
    }
  }

  return {
    sql,
    setSql,
    parsed,
    explanation,
    error,
    analyze
  }
}