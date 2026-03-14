const express = require("express");
const app = express();

// middleware para receber JSON
app.use(express.json());

// "banco de dados" em memória
const filmes = [];

// GET - listar todos os filmes
app.get("/filmes", (req, res) => {
  res.json(filmes);
});

// GET - buscar filme por ID
app.get("/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const filme = filmes.find((f) => f.id === id);

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  res.json(filme);
});

// POST - cadastrar novo filme
app.post("/filmes", (req, res) => {
  const { titulo, diretor, ano } = req.body;

  // impedir filmes duplicados
  const filmeExiste = filmes.find(
    (f) => f.titulo.toLowerCase() === titulo.toLowerCase(),
  );

  if (filmeExiste) {
    return res.status(400).json({
      erro: "Esse filme já foi cadastrado",
    });
  }

  const novoFilme = {
    id: filmes.length + 1,
    titulo,
    diretor,
    ano,
  };

  filmes.push(novoFilme);

  res.status(201).json(novoFilme);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");

  // DELETE - remover filme
  app.delete("/filmes/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = filmes.findIndex((f) => f.id === id);

    if (index === -1) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }

    const filmeRemovido = filmes.splice(index, 1);

    res.json({
      mensagem: "Filme removido com sucesso",
      filme: filmeRemovido,
    });
  });
});
