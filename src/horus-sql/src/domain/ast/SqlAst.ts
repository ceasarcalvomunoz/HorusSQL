// ==============================
// Base Node
// ==============================

export interface SqlNode {
  type: string
}

// ==============================
// Root Node
// ==============================

export interface SelectStatementNode extends SqlNode {
  type: "SelectStatement"
  select: SelectClauseNode
  from: FromClauseNode
  joins: JoinClauseNode[]
  where?: WhereClauseNode
}

// ==============================
// SELECT
// ==============================

export interface SelectClauseNode extends SqlNode {
  type: "SelectClause"
  columns: ColumnNode[]
}

export interface ColumnNode extends SqlNode {
  type: "Column"
  name: string
  alias?: string
}

// ==============================
// FROM
// ==============================

export interface FromClauseNode extends SqlNode {
  type: "FromClause"
  table: string
  alias?: string
}

// ==============================
// JOIN
// ==============================

export interface JoinClauseNode extends SqlNode {
  type: "JoinClause"
  joinType: JoinType
  table: string
  alias?: string
  condition: string
}

export type JoinType =
  | "INNER"
  | "LEFT"
  | "RIGHT"
  | "FULL"
  | "CROSS"

// ==============================
// WHERE
// ==============================

export interface WhereClauseNode extends SqlNode {
  type: "WhereClause"
  condition: string
}

// ==============================
// Future Extensions (Prepared)
// ==============================

export interface GroupByClauseNode extends SqlNode {
  type: "GroupByClause"
  columns: string[]
}

export interface OrderByClauseNode extends SqlNode {
  type: "OrderByClause"
  columns: OrderByColumnNode[]
}

export interface OrderByColumnNode extends SqlNode {
  type: "OrderByColumn"
  name: string
  direction: "ASC" | "DESC"
}