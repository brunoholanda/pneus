'use strict'

const CaminhaoMarca = use('App/Models/CaminhaoMarca')

class CaminhaoMarcaController {
  async index ({ response }) {
    const marcas = await CaminhaoMarca.all()
    return response.json(marcas)
  }

  async store ({ request, response }) {
    const data = request.only(['nome'])
    const marca = await CaminhaoMarca.create(data)
    return response.status(201).json(marca)
  }

  async show ({ params, response }) {
    const marca = await CaminhaoMarca.find(params.id)
    return response.json(marca)
  }

  async update ({ params, request, response }) {
    const data = request.only(['nome'])
    const marca = await CaminhaoMarca.find(params.id)
    marca.merge(data)
    await marca.save()
    return response.json(marca)
  }
}

module.exports = CaminhaoMarcaController
