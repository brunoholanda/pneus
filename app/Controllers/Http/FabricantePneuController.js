'use strict'

const FabricantePneu = use('App/Models/FabricantePneu')

class FabricantePneuController {

    async index ({ request, response }) {
        const fabricantePneus = await FabricantePneu.query().with('company').with('veiculo').fetch()
        return response.json(fabricantePneus)
    }

    async store ({ request, response }) {
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        const fabricantePneu = await FabricantePneu.create(data)
        return response.status(201).json(fabricantePneu)
    }

    async show ({ params, request, response }) {
        const fabricantePneu = await FabricantePneu.findOrFail(params.id)
        await fabricantePneu.loadMany(['company', 'veiculo'])
        return response.json(fabricantePneu)
    }

    async update ({ params, request, response }) {
        const fabricantePneu = await FabricantePneu.findOrFail(params.id)
        const data = request.only([
            '1du', '1eu', '2de', '2di', '2ei', '2ee', '3de', '3di', '3ei', '3ee',
            '4de', '4di', '4ei', '4ee', '5de', '5di', '5ei', '5ee', '6de', '6di', '6ei', '6ee',
            '7de', '7di', '7ei', '7ee', 'steep', 'company_id', 'veiculo_id'
        ])

        fabricantePneu.merge(data)
        await fabricantePneu.save()
        return response.json(fabricantePneu)
    }

    async destroy ({ params, request, response }) {
        const fabricantePneu = await FabricantePneu.findOrFail(params.id)
        await fabricantePneu.delete()
        return response.status(204).json(null)
    }
}

module.exports = FabricantePneuController
