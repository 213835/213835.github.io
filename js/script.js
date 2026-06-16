// 1. CONTROLO DO MENU LATERAL
const btnMenu = document.getElementById('btn-menu');
const navbar = document.querySelector('.navbar');
const body = document.body;

if (btnMenu) {
    btnMenu.addEventListener('click', function() {
        navbar.classList.toggle('fechada');
        body.classList.toggle('menu-fechado');
    });
}

/* ==========================================================================
   MODO NOTURNO COM MEMÓRIA CORRIGIDO
   ========================================================================== */

// 1. Assim que a página carrega, verifica se o utilizador já tinha ativado o dark mode antes
if (localStorage.getItem('modo-escuro') === 'ativado') {
    document.body.classList.add('dark-mode');
}

const btnDarkMode = document.getElementById('btn-dark-mode');

if (btnDarkMode) {
    // 2. Garante que o ícone (Sol ou Lua) começa correto com base na memória
    if (document.body.classList.contains('dark-mode')) {
        btnDarkMode.textContent = 'light_mode'; // Começa como Sol se estiver escuro
    } else {
        btnDarkMode.textContent = 'dark_mode';  // Começa como Lua se estiver claro
    }
    
    // 3. O clique do botão agora liga/desliga e guarda na memória
    btnDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            btnDarkMode.textContent = 'light_mode'; 
            localStorage.setItem('modo-escuro', 'ativado'); // Grava na memória do PC
        } else {
            btnDarkMode.textContent = 'dark_mode'; 
            localStorage.setItem('modo-escuro', 'desativado'); // Atualiza a memória
        }
    });
}

/* ==========================================================================
   CONTROLO DE TAMANHO DA FONTE (ACESSIBILIDADE)
   ========================================================================== */

// 1. Variáveis para os botões e para o tamanho inicial
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

let tamanhoAtual = 100; // Começa em 100% (tamanho padrão do navegador)
const limiteMaximo = 140; // Não deixa crescer mais que 140% para não estragar o layout
const limiteMinimo = 80;  // Não deixa diminuir menos que 80%

// 2. Função para Aumentar a Fonte
if (btnAumentar) {
    btnAumentar.addEventListener('click', function() {
        if (tamanhoAtual < limiteMaximo) {
            tamanhoAtual += 10; // Aumenta de 10 em 10%
            document.body.style.fontSize = tamanhoAtual + '%';
        }
    });
}

// 3. Função para Diminuir a Fonte
if (btnDiminuir) {
    btnDiminuir.addEventListener('click', function() {
        if (tamanhoAtual > limiteMinimo) {
            tamanhoAtual -= 10; // Diminui de 10 em 10%
            document.body.style.fontSize = tamanhoAtual + '%';
        }
    });
}
/* ==========================================================================
   VALIDAÇÃO DO FORMULÁRIO DE CONTATO
   ========================================================================== */
const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', function(event) {
        // 1. Impede que o formulário recarregue a página imediatamente
        event.preventDefault();

        // 2. Captura os valores digitados e remove espaços em branco nas pontas (.trim())
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // 3. Verifica se o Nome está vazio
        if (nome === '') {
            alert('Por favor, preencha o seu nome!');
            document.getElementById('nome').focus(); // Coloca o cursor no campo
            return; // Pára a execução aqui
        }

        // 4. Verifica se o E-mail está vazio ou se é inválido (não tem @ ou .)
        if (email === '' || !email.includes('@') || !email.includes('.')) {
            alert('Por favor, insira um endereço de e-mail válido!');
            document.getElementById('email').focus();
            return;
        }

        // 5. Verifica se a Mensagem está vazia
        if (mensagem === '') {
            alert('Por favor, escreva uma mensagem antes de enviar!');
            document.getElementById('mensagem').focus();
            return;
        }

        // 6. Se tudo estiver correto (passou por todas as validações)
        alert('Formulário validado com sucesso! Obrigado pela mensagem, ' + nome + '.');
        
        // Limpa todos os campos do formulário após o envio
        formContato.reset(); 
    });
}