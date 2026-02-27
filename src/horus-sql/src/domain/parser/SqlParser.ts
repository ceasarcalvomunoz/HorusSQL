import { ParsedQuery, JoinClause } from "../types/SqlTypes"

export class SqlParser {

  static parse(sql: string): ParsedQuery {

    const normalized = sql
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim()

    const selectMatch = normalized.match(/select (.+?) from/i)
    const fromMatch = normalized.match(/from (.+?)( join| where|$)/i)
    const joinMatches = [...normalized.matchAll(/join (.+?) on (.+?)( join| where|$)/gi)]
    const whereMatch = normalized.match(/where (.+)$/i)

    if (!selectMatch || !fromMatch) {
      throw new Error("Invalid SQL")
    }

    const select = selectMatch[1]
      .split(",")
      .map(col => col.trim())

    const fromParts = fromMatch[1].trim().split(" ")

    const joins: JoinClause[] = joinMatches.map(match => {
      const tableParts = match[1].trim().split(" ")
      return {
        table: tableParts[0],
        alias: tableParts[1],
        condition: match[2].trim()
      }
    })

    return {
      select,
      from: {
        table: fromParts[0],
        alias: fromParts[1]
      },
      joins,
      where: whereMatch ? whereMatch[1].trim() : undefined
    }
  }
}