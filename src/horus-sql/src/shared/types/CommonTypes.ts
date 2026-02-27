export type Nullable<T> = T | null

export interface Result<T> {
  success: boolean
  data?: T
  error?: string
}