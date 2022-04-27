import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contas extends BaseSchema {
  protected tableName = 'contas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao').notNullable()
      table.float('valor', 8, 2).notNullable()
      table.string('tipo').comment('E - Entra || S - Saida').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
