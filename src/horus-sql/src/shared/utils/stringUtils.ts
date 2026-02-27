export function normalizeSql(sql: string): string {
  return sql
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function removeTrailingSemicolon(sql: string): string {
  return sql.endsWith(";")
    ? sql.slice(0, -1)
    : sql
}

export function toLowerSafe(value: string): string {
  return value.toLowerCase()
}