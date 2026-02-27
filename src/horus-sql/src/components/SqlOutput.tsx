import { ParsedQuery } from "../domain/types/SqlTypes"

interface SqlOutputProps {
  ast: ParsedQuery | null
  explanation: string
  error: string | null
}

export function SqlOutput({
  ast,
  explanation,
  error
}: SqlOutputProps) {

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>
  }

  if (!ast) {
    return <div>No analysis yet.</div>
  }

  return (
    <div>
      <h3>Explanation</h3>
      <pre>{explanation}</pre>

      <h3>AST (Debug View)</h3>
      <pre>{JSON.stringify(ast, null, 2)}</pre>
    </div>
  )
}