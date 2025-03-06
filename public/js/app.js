// Adiciona um ouvinte de evento para submissão do formulário de login
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

    // Obtém os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Envia uma requisição POST para a rota /login
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }) // Envia os dados do formulário como JSON
    });

    const result = await response.json(); // Obtém a resposta em formato JSON
    if (result.success) {
        alert('Login successful'); // Exibe uma mensagem de sucesso
    } else {
        alert('Login failed'); // Exibe uma mensagem de falha
    }
});