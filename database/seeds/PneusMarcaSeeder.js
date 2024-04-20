'use strict'

/*
|--------------------------------------------------------------------------
| PneusMarcasSeeder
|--------------------------------------------------------------------------
|
| Use this seeder to populate the `pneus_marcas` table with the tire brands.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class PneusMarcasSeeder {
  async run () {
    const marcas = [
      'Borracharia Atual', 'Continental do Brasil', 'Levorin Pneus', 'Maxion Pneus',
      'Mundial Pneus', 'Pirelli Brasil', 'BF Goodrich', 'Bridgestone',
      'Cooper Tire & Rubber Company', 'Dunlop', 'Firestone', 'Goodyear',
      'Hankook', 'Kumho Tire', 'Michelin', 'Toyo Tires', 'Yokohama Rubber Company'
    ]

    await Database.table('pneus_marcas').insert(marcas.map(nome => ({ nome })))
  }
}

module.exports = PneusMarcasSeeder
