import { SelectStatementNode } from "../domain/ast/SqlAst"

interface SqlVisualizerProps {
  ast: SelectStatementNode
}

export function SqlVisualizer({ ast }: SqlVisualizerProps) {
  return (
    <div>
      <h3>Tables</h3>
      <p>Main table: {ast.from.table}</p>
    </div>
  )
}