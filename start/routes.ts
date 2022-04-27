import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('conta', 'ContasController').apiOnly()
Route.resource('total', 'TotaisController').apiOnly()
