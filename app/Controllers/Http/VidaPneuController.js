'use strict'

const VidaPneu = use('App/Models/VidaPneu')

class VidaPneuController {

    async index ({ request, response }) {
        const vidaPneus = await VidaPneu.query().with('company').with('veiculo').fetch()
        return response.json(vidaPneus)
    }

    async store ({ request, response }) {
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        const vidaPneu = await VidaPneu.create(data)
        return response.status(201).json(vidaPneu)
    }

    async show ({ params, request, response }) {
        const vidaPneu = await VidaPneu.findOrFail(params.id)
        await vidaPneu.loadMany(['company', 'veiculo'])
        return response.json(vidaPneu)
    }

    async update ({ params, request, response }) {
        const vidaPneu = await VidaPneu.findOrFail(params.id)
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        vidaPneu.merge(data)
        await vidaPneu.save()
        return response.json(vidaPneu)
    }

    async destroy ({ params, request, response }) {
        const vidaPneu = await VidaPneu.findOrFail(params.id)
        await vidaPneu.delete()
        return response.status(204).json(null)
    }
}

module.exports = VidaPneuController
