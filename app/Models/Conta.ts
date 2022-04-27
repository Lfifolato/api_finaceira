import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Conta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @column()
  public valor: number

  @column()
  public tipo: string

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy')
    },
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy')
    },
  })
  public updatedAt: DateTime
}
