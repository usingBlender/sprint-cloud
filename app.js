async function carregarMusicas() {
    try {
        // Busca o arquivo com um parâmetro extra para evitar o cache do navegador
        const response = await fetch('./data.json?v=' + new Date().getTime());
        
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const textoRaw = await response.text();
        
        // Verifica se o arquivo não veio totalmente em branco
        if (!textoRaw || textoRaw.trim() === "") {
            throw new Error("O arquivo data.json foi encontrado, mas está totalmente vazio dentro do container.");
        }

        const musicas = JSON.parse(textoRaw);
        
        const tabelaBody = document.getElementById('tabela-musicas');
        tabelaBody.innerHTML = ''; 

        musicas.forEach(musica => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${musica.nome}</td>
                <td>${musica.cantor}</td>
                <td>${musica.categoria}</td>
                <td class="align-right">${musica.ano}</td>
            `;
            tabelaBody.appendChild(linha);
        });
        
        console.log("Dados carregados com sucesso!");
    } catch (error) {
        console.error('Erro detectado no painel:', error.message);
        
        // Exibe um aviso visual na tabela para você saber que o dado não chegou
        const tabelaBody = document.getElementById('tabela-musicas');
        tabelaBody.innerHTML = `<tr><td colspan="4" style="color: red; text-align: center;">Erro ao ler os dados: ${error.message}</td></tr>`;
    }
}

window.onload = carregarMusicas;