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

Route.on('/').render('welcome')
