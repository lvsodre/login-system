// Importa os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // Cria uma instância do Express
const port = 3000; // Define a porta do servidor

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());
app.use(express.static('public')); // Serve arquivos estáticos a partir do diretório 'public'

// Rota para lidar com a submissão do formulário de login
app.post('/login', (req, res) => {
    const { username, password } = req.body; // Obtém os dados do corpo da requisição

    // Simples verificação de login (substituir por lógica real)
    if (username === 'admin' && password === 'password') {
        res.json({ success: true }); // Resposta de sucesso
    } else {
        res.json({ success: false }); // Resposta de falha
    }
});

// Inicia o servidor e escuta na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});