import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Conta from 'App/Models/Conta'
import CreateValidator from 'App/Validators/CreateValidator'

export default class ContasController {
  public async index({ response }: HttpContextContract) {
    const data = await Conta.all()

    return response.ok(data)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateValidator)

    await Conta.create(data)

    return response.ok({ mensagem: 'Conta cadastrada com sucesso!' })
  }

  public async destroy({ response, params }: HttpContextContract) {
    const id = params.id
    const conta = await Conta.findOrFail(id)

    await conta.delete()

    response.ok({ mensagem: 'Conta Deletada com sucesso!' })
  }
}
