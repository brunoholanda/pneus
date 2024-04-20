'use strict'

/*
|--------------------------------------------------------------------------
| CaminhoesMarcaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class CaminhoesMarcaSeeder {
  async run () {
    const marcas = [
      'Agrale', 'Avia', 'Maxion', 'MWM', 'Ashok Leyland', 'Autocar',
      'BelAZ', 'Beneteau', 'Berliet', 'Caterpillar', 'Chevrolet', 'CNHTC',
      'Commer', 'Cummins', 'DAF', 'Dayun', 'Dongfeng', 'Faw', 'Ford',
      'Freightliner', 'Fuso', 'GMC', 'Great Wall', 'Hino', 'Hovo',
      'International', 'Isuzu', 'JAC', 'Iveco', 'JMC', 'Kamaz', 'Komatsu',
      'KIA', 'Koenigsegg', 'Lama', 'Leyland', 'Liebherr', 'Mack', 'MAN',
      'Mazda', 'Mercedes-Benz', 'Mitsubishi', 'Modern', 'NAC', 'Nissan',
      'Opel', 'PACCAR', 'Peterbilt', 'Peugeot', 'RAM', 'Renault', 'Scania',
      'SEAT', 'Shacman', 'Sinotruk', 'Sisu', 'Steyr', 'Tatra', 'Terberg',
      'Toyota', 'UD Trucks', 'Volkswagen', 'Volvo', 'Western Star'
    ]

    await Database.table('caminhoes_marca').insert(marcas.map(nome => ({ nome })))
  }
}

module.exports = CaminhoesMarcaSeeder
