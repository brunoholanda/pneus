'use strict'

const DotPneu = use('App/Models/DotPneu')

class DotPneuController {

    async index ({ request, response }) {
        const dotPneus = await DotPneu.query().with('company').with('veiculo').fetch()
        return response.json(dotPneus)
    }

    async store ({ request, response }) {
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        const dotPneu = await DotPneu.create(data)
        return response.status(201).json(dotPneu)
    }

    async show ({ params, request, response }) {
        const dotPneu = await DotPneu.findOrFail(params.id)
        await dotPneu.loadMany(['company', 'veiculo'])
        return response.json(dotPneu)
    }

    async update ({ params, request, response }) {
        const dotPneu = await DotPneu.findOrFail(params.id)
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        dotPneu.merge(data)
        await dotPneu.save()
        return response.json(dotPneu)
    }

    async destroy ({ params, request, response }) {
        const dotPneu = await DotPneu.findOrFail(params.id)
        await dotPneu.delete()
        return response.status(204).json(null)
    }
}

module.exports = DotPneuController
