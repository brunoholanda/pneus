'use strict'

const FogoPneu = use('App/Models/FogoPneu')

class FogoPneuController {

    async index ({ request, response }) {
        const fogoPneus = await FogoPneu.query().with('company').with('veiculo').fetch()
        return response.json(fogoPneus)
    }

    async store ({ request, response }) {
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        const fogoPneu = await FogoPneu.create(data)
        return response.status(201).json(fogoPneu)
    }

    async show ({ params, request, response }) {
        const fogoPneu = await FogoPneu.findOrFail(params.id)
        await fogoPneu.loadMany(['company', 'veiculo'])
        return response.json(fogoPneu)
    }

    async update ({ params, request, response }) {
        const fogoPneu = await FogoPneu.findOrFail(params.id)
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        fogoPneu.merge(data)
        await fogoPneu.save()
        return response.json(fogoPneu)
    }

    async destroy ({ params, request, response }) {
        const fogoPneu = await FogoPneu.findOrFail(params.id)
        await fogoPneu.delete()
        return response.status(204).json(null)
    }
}

module.exports = FogoPneuController
