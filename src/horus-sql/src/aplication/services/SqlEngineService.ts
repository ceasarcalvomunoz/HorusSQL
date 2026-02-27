import { SqlParser } from "../../domain/parser/SqlParser"
import { SqlExplainer } from "../../domain/explainer/SqlExplainer"
import { ParsedQuery } from "../../domain/types/SqlTypes"

export class SqlEngineService {
  static execute(sql: string): {
    parsed: ParsedQuery
    explanation: string
  } {
    const parsed = SqlParser.parse(sql)
    const explanation = SqlExplainer.explain(parsed)

    return { parsed, explanation }
  }
}