import { MockSchema } from "../schema/MockSchema"
import { DatabaseSchema } from "../schema/SchemaTypes"

export class SchemaProvider {

  static getSchema(): DatabaseSchema {
    return MockSchema
  }

  static getTable(name: string) {
    const schema = this.getSchema()
    return schema.tables.find(t => t.name === name)
  }
}