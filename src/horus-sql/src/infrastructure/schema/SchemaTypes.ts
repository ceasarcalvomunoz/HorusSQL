export interface TableColumn {
  name: string
  type: string
}

export interface TableSchema {
  name: string
  columns: TableColumn[]
}

export interface DatabaseSchema {
  tables: TableSchema[]
}