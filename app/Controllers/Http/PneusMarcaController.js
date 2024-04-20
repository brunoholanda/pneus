'use strict'

const PneusMarca = use('App/Models/PneusMarca')

class PneusMarcaController {
  async index ({ response }) {
    const marcas = await PneusMarca.all()
    return response.json(marcas)
  }

  async store ({ request, response }) {
    const data = request.only(['nome'])
    const marca = await PneusMarca.create(data)
    return response.status(201).json(marca)
  }

  async show ({ params, response }) {
    const marca = await PneusMarca.find(params.id)
    return response.json(marca)
  }

  async update ({ params, request, response }) {
    const data = request.only(['nome'])
    const marca = await PneusMarca.find(params.id)
    marca.merge(data)
    await marca.save()
    return response.json(marca)
  }

}

module.exports = PneusMarcaController
