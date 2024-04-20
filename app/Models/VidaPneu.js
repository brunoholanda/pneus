'use strict'

const Model = use('Model')

class VidaPneu extends Model {
    static get table () {
        return 'vida_pneus'
    }

    company () {
        return this.belongsTo('App/Models/Company')
    }

    veiculo () {
        return this.belongsTo('App/Models/Veiculo')
    }
}

module.exports = VidaPneu
