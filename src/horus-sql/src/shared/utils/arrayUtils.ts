export function compact<T>(array: (T | undefined | null | false)[]): T[] {
  return array.filter(Boolean) as T[]
}

export function unique<T>(array: T[]): T[] {
  return [...new Set(array)]
}