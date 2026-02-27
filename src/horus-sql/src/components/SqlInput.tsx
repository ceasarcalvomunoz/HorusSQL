interface SqlInputProps {
  sql: string
  onChange: (value: string) => void
  onAnalyze: () => void
}

export function SqlInput({
  sql,
  onChange,
  onAnalyze
}: SqlInputProps) {
  return (
    <div>
      <textarea
        value={sql}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your SQL query here..."
        rows={6}
        style={{ width: "100%" }}
      />

      <button onClick={onAnalyze} style={{ marginTop: "1rem" }}>
        Analyze
      </button>
    </div>
  )
}