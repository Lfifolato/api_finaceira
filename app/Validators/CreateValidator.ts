import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    descricao: schema.string({ trim: true }),
    valor: schema.number(),
    tipo: schema.string({ trim: true }),
  })

  public messages = {}
}
