export interface JoinClause {
  table: string
  alias?: string
  condition: string
}

export interface ParsedQuery {
  select: string[]
  from: {
    table: string
    alias?: string
  }
  joins: JoinClause[]
  where?: string
}