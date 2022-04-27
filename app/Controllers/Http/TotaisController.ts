import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class TotaisController {
  public async index({ response }: HttpContextContract) {
    const data = await Database.from('total')

    return response.ok(data[0])
  }
}
