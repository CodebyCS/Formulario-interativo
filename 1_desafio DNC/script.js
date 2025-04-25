let caminho = []

function resposta1(resposta) {
    caminho.push(resposta)
    document.getElementById('pergunta1').style.display = 'none'

    let pergunta2 = document.getElementById('pergunta2')
    pergunta2.innerHTML = "<p class='msg'>2. Você prefere trabalhar com:</p>"
    if (resposta === 'logica') {
        pergunta2.innerHTML += `
            <button onclick="resposta2('banco')">Banco de dados</button>
            <button onclick="resposta2('api')">APIs</button>
            <button onclick="resposta2('seguranca')">Segurança de sistemas</button>
        `
    } else if (resposta === 'interface') {
        pergunta2.innerHTML += `
          <button onclick="resposta2('cores')">Cores e Design</button>
          <button onclick="resposta2('interacoes')">Animações e interações</button>
          <button onclick="resposta2('layout')">Responsividade</button>
        `
    } else {
        pergunta2.innerHTML += `
          <button onclick="resposta2('agile')">Metodologias Ágeis</button>
          <button onclick="resposta2('decisoes')">Tomada de decisões</button>
          <button onclick="resposta2('tecnico')">Liderança técnica</button>
        `
    }

    pergunta2.classList.add('mostrar')
}

function resposta2(resposta) {
    caminho.push(resposta)
    document.getElementById('pergunta2').style.display = 'none'

    let pergunta3 = document.getElementById('pergunta3')
    pergunta3.innerHTML = "<p class='msg'>3. Como você gosta de aprender?</p>"
    pergunta3.innerHTML += `
        <button onclick="resposta3('video')">Vídeo aulas</button>
        <button onclick="resposta3('leitura')">Lendo documentações</button>
        <button onclick="resposta3('pratica')">Praticando projetos</button>
    `
    pergunta3.classList.add('mostrar')
}

function resposta3 (resposta) {
    caminho.push(resposta)
    document.getElementById('pergunta3').style.display = 'none'

    let pergunta4 = document.getElementById('pergunta4')
    pergunta4.innerHTML = "<p class='msg'>4. Qual dessas áreas você se imagina atuando?</p>"
    pergunta4.innerHTML += `
    <button onclick="respostaFinal('dados')">Análise de dados</button>
    <button onclick="respostaFinal('web')">Criação de sites</button>
    <button onclick="respostaFinal('gestao')">Gestão de times</button>
  `
    pergunta4.classList.add('mostrar')
}

function respostaFinal(resposta) {
    caminho.push(resposta)
    document.getElementById('pergunta4').style.display = 'none'

    let profissao = ''

    if (caminho[0] === 'logica') {
        profissao = 'Desenvolvedor Back End'
    } else if (caminho[0] === 'interface'){
        profissao = 'Desenvolvedor Front End'
    } else if (caminho[0] === 'liderar') {
        profissao = 'Tech Lead'
    }

    document.getElementById('resultado').innerHTML = `<p class='msg'>Com base nas suas respostas, você tem perfil para ser:</p><br> <div id='profiDiv' class="shadow p-3 mb-5"><p class='msg' id='profi'>${profissao}</p></div>`
}