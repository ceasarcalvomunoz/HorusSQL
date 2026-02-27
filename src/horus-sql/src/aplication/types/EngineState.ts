import { ParsedQuery } from "../../domain/types/SqlTypes"

export interface EngineState {
  sql: string
  parsed: ParsedQuery | null
  explanation: string
  error: string | null
}