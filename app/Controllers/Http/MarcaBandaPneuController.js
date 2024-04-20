'use strict'

const MarcaBandaPneu = use('App/Models/MarcaBandaPneu')

class MarcaBandaPneuController {

    async index ({ request, response }) {
        const marcaBandaPneus = await MarcaBandaPneu.query().with('company').with('veiculo').fetch()
        return response.json(marcaBandaPneus)
    }

    async store ({ request, response }) {
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        const marcaBandaPneu = await MarcaBandaPneu.create(data)
        return response.status(201).json(marcaBandaPneu)
    }

    async show ({ params, request, response }) {
        const marcaBandaPneu = await MarcaBandaPneu.findOrFail(params.id)
        await marcaBandaPneu.loadMany(['company', 'veiculo'])
        return response.json(marcaBandaPneu)
    }

    async update ({ params, request, response }) {
        const marcaBandaPneu = await MarcaBandaPneu.findOrFail(params.id)
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        marcaBandaPneu.merge(data)
        await marcaBandaPneu.save()
        return response.json(marcaBandaPneu)
    }

    async destroy ({ params, request, response }) {
        const marcaBandaPneu = await MarcaBandaPneu.findOrFail(params.id)
        await marcaBandaPneu.delete()
        return response.status(204).json(null)
    }
}

module.exports = MarcaBandaPneuController
