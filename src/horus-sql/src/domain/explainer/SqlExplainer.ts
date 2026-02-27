import { ParsedQuery } from "../types/SqlTypes"

export class SqlExplainer {

  static explain(query: ParsedQuery): string {

    const selectPart = `This query selects ${query.select.join(", ")}`
    const fromPart = `from the ${query.from.table} table`

    const joinPart = query.joins.length > 0
      ? query.joins.map(j =>
          `joined with ${j.table} on ${j.condition}`
        ).join(", ")
      : ""

    const wherePart = query.where
      ? `where ${query.where}`
      : ""

    return [selectPart, fromPart, joinPart, wherePart]
      .filter(Boolean)
      .join("\n")
  }
}