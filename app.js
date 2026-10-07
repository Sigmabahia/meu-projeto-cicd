const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ status: 'sucesso', mensagem: 'Pipeline CI/CD funcionando!' });
});

module.exports = app;

if (require.main === module) {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
