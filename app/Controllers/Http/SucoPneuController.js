'use strict'

const SucoPneu = use('App/Models/SucoPneu')

class SucoPneuController {

    async index ({ request, response }) {
        const sucoPneus = await SucoPneu.query().with('company').with('veiculo').fetch()
        return response.json(sucoPneus)
    }

    async store ({ request, response }) {
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        const sucoPneu = await SucoPneu.create(data)
        return response.status(201).json(sucoPneu)
    }

    async show ({ params, request, response }) {
        const sucoPneu = await SucoPneu.findOrFail(params.id)
        await sucoPneu.loadMany(['company', 'veiculo'])
        return response.json(sucoPneu)
    }

    async update ({ params, request, response }) {
        const sucoPneu = await SucoPneu.findOrFail(params.id)
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        sucoPneu.merge(data)
        await sucoPneu.save()
        return response.json(sucoPneu)
    }

    async destroy ({ params, request, response }) {
        const sucoPneu = await SucoPneu.findOrFail(params.id)
        await sucoPneu.delete()
        return response.status(204).json(null)
    }
}

module.exports = SucoPneuController
