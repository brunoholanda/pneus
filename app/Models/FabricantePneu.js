'use strict'

const Model = use('Model')

class FabricantePneu extends Model {
    static get table () {
        return 'fabricante_pneus'
    }

    company () {
        return this.belongsTo('App/Models/Company')
    }

    veiculo () {
        return this.belongsTo('App/Models/Veiculo')
    }
}

module.exports = FabricantePneu
