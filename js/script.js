
const btnMenu = document.getElementById('btn-menu');
const navbar = document.querySelector('.navbar');
const body = document.body;

if (btnMenu) {
    btnMenu.addEventListener('click', function() {
        navbar.classList.toggle('fechada');
        body.classList.toggle('menu-fechado');
    });
}




if (localStorage.getItem('modo-escuro') === 'ativado') {
    document.body.classList.add('dark-mode');
}

const btnDarkMode = document.getElementById('btn-dark-mode');

if (btnDarkMode) {
    
    if (document.body.classList.contains('dark-mode')) {
        btnDarkMode.textContent = 'light_mode'; 
    } else {
        btnDarkMode.textContent = 'dark_mode';  
    }
    
    
    btnDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            btnDarkMode.textContent = 'light_mode'; 
            localStorage.setItem('modo-escuro', 'ativado'); 
        } else {
            btnDarkMode.textContent = 'dark_mode'; 
            localStorage.setItem('modo-escuro', 'desativado'); 
        }
    });
}




const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

let tamanhoAtual = 100; 
const limiteMaximo = 140; 
const limiteMinimo = 80;  


if (btnAumentar) {
    btnAumentar.addEventListener('click', function() {
        if (tamanhoAtual < limiteMaximo) {
            tamanhoAtual += 10; 
            document.body.style.fontSize = tamanhoAtual + '%';
        }
    });
}


if (btnDiminuir) {
    btnDiminuir.addEventListener('click', function() {
        if (tamanhoAtual > limiteMinimo) {
            tamanhoAtual -= 10; 
            document.body.style.fontSize = tamanhoAtual + '%';
        }
    });
}

const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', function(event) {
        
        event.preventDefault();

        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        
        if (nome === '') {
            alert('Por favor, preencha o seu nome!');
            document.getElementById('nome').focus(); 
            return; 
        }

        
        if (email === '' || !email.includes('@') || !email.includes('.')) {
            alert('Por favor, insira um endereço de e-mail válido!');
            document.getElementById('email').focus();
            return;
        }

        
        if (mensagem === '') {
            alert('Por favor, escreva uma mensagem antes de enviar!');
            document.getElementById('mensagem').focus();
            return;
        }

        
        alert('Formulário validado com sucesso! Obrigado pela mensagem, ' + nome + '.');
        
        
        formContato.reset(); 
    });
}