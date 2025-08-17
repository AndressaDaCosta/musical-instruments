const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'data', 'equipments.json');

const readEquipments = async () => {
  const exists = await fs.pathExists(DATA_FILE);
  if (!exists) await fs.writeJson(DATA_FILE, []);
  return await fs.readJson(DATA_FILE);
};

const writeEquipments = async (data) => {
  await fs.writeJson(DATA_FILE, data, { spaces: 2 });
};

app.post('/equipamentos', async (req, res) => {
  const { nome, tipo, marca, ano, preco, ativo, voltagem, peso_kg } = req.body;

  if (!nome || !tipo) {
    return res.status(400).json({ error: "Campos 'nome' e 'tipo' são obrigatórios." });
  }

  const novoEquipamento = {
    id: Date.now(),
    nome,
    tipo,
    marca,
    ano,
    preco,
    ativo,
    voltagem,
    peso_kg
  };

  const equipamentos = await readEquipments();
  equipamentos.push(novoEquipamento);
  await writeEquipments(equipamentos);

  res.status(201).json({ message: "Equipamento cadastrado com sucesso!", equipamento: novoEquipamento });
});

app.get('/equipamentos', async (req, res) => {
  const equipamentos = await readEquipments();
  res.json(equipamentos);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
