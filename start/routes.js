'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/auth/login', 'AuthController.login');
  Route.post('/veiculos', 'VeiculoController.store');
  Route.get('/veiculos', 'VeiculoController.index');
  Route.get('/veiculos/:id', 'VeiculoController.show');
  Route.patch('/veiculos/:id', 'VeiculoController.update');
  Route.delete('/veiculos/:id', 'VeiculoController.destroy');
}).prefix('api');


// Rotas para CaminhoesMarca
Route.group(() => {
  Route.get('caminhoes_marca', 'CaminhaoMarcaController.index')
  Route.post('caminhoes_marca', 'CaminhaoMarcaController.store')
  Route.get('caminhoes_marca/:id', 'CaminhaoMarcaController.show')
  Route.put('caminhoes_marca/:id', 'CaminhaoMarcaController.update')
}).prefix('api')

// Rotas para PneusMarca
Route.group(() => {
  Route.get('pneus_marcas', 'PneusMarcaController.index')
  Route.post('pneus_marcas', 'PneusMarcaController.store')
  Route.get('pneus_marcas/:id', 'PneusMarcaController.show')
  Route.put('pneus_marcas/:id', 'PneusMarcaController.update')
}).prefix('api')



Route.on('/').render('welcome')
