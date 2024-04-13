'use strict'

const Veiculo = use('App/Models/Veiculo');

class VeiculoController {
  async store({ request, auth, response }) {
    const data = request.only(['placa', 'motorista', 'qt_eixos', 'qt_diferenciais', 'qt_pneus', 'medida_aro', 'tipo_veiculo', 'marca', 'modelo', 'hodometro'])
    const companyId = auth.user.company_id;
    const veiculo = await Veiculo.create({ ...data, company_id: companyId });
    return response.created({
      message: 'Veículo cadastrado com sucesso!',
      data: veiculo
    });
  }

  async index({ response }) {
    try {
      const veiculos = await Veiculo.all();
      return response.json(veiculos);
    } catch (err) {
      return response.status(500).json({ message: 'Ocorreu um erro ao buscar os veículos', error: err });
    }
  }

  async show({ params, response }) {
    try {
      const veiculo = await Veiculo.find(params.id);
      if (!veiculo) {
        return response.status(404).json({ message: 'Veículo não encontrado' });
      }
      return response.json(veiculo);
    } catch (err) {
      return response.status(500).json({ message: 'Ocorreu um erro ao buscar o veículo', error: err });
    }
  }

  async update({ params, request, response }) {
    try {
      const veiculo = await Veiculo.find(params.id);
      if (!veiculo) {
        return response.status(404).json({ message: 'Veículo não encontrado' });
      }
      const data = request.only(['placa', 'motorista', 'qt_eixos', 'qt_diferenciais', 'qt_pneus', 'medida_aro', 'tipo_veiculo', 'marca', 'modelo', 'hodometro']);
      veiculo.merge(data);
      await veiculo.save();
      return response.json({
        message: 'Veículo atualizado com sucesso!',
        data: veiculo
      });
    } catch (err) {
      return response.status(500).json({ message: 'Ocorreu um erro ao atualizar o veículo', error: err });
    }
  }

  async destroy({ params, response }) {
    try {
      const veiculo = await Veiculo.find(params.id);
      if (!veiculo) {
        return response.status(404).json({ message: 'Veículo não encontrado' });
      }
      await veiculo.delete();
      return response.json({ message: 'Veículo deletado com sucesso!' });
    } catch (err) {
      return response.status(500).json({ message: 'Ocorreu um erro ao deletar o veículo', error: err });
    }
  }
}

module.exports = VeiculoController
