import { DatabaseSchema } from "./SchemaTypes"

export const MockSchema: DatabaseSchema = {
  tables: [
    {
      name: "users",
      columns: [
        { name: "id", type: "number" },
        { name: "name", type: "string" },
        { name: "email", type: "string" }
      ]
    },
    {
      name: "orders",
      columns: [
        { name: "id", type: "number" },
        { name: "user_id", type: "number" },
        { name: "total", type: "number" }
      ]
    }
  ]
}