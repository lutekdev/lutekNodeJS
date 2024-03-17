const Client = require("../../models/client");

const findModel = async (res) => {
  return res.status(200).json(await Client.find());
};

const getFindById = async (id) => {
  return await Client.findById(id);
};

const createModel = (req, res) => {
  const json = new Client({
    _id: req.body._id,
    nome: req.body.nome,
    fone: req.body.fone,
  });

  try {
    const jsonSave = json.save();
    res.status(200).send("✎ Novo Cliente, cadastrado com sucesso!");
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const deleteAll = async (res) => {
  const all_clientes = await Client.find();

  try {
    if (all_clientes.length == 0) {
      return res.status(400).send("✘ Nenhum cliente encontrado!");
    }

    await Client.deleteMany({});

    res.status(200).send("✓ Todos os clientes foram excluídos!");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteById = async (res, id) => {
  try {
    if ((await getFindById(id)) === null) {
      return res.status(400).send("✘ Nenhum Cliente encontrado!");
    }

    await Client.deleteOne({ _id: id });
    res.status(200).send("✓ Cliente excluído!");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  findModel,
  createModel,
  getFindById,
  deleteAll,
  deleteById,
};
