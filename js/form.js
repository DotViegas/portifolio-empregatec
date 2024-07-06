//Selecionando o Form
const form = document.querySelector('form');
//Variáveis Corpo da mensagem
const nomeCompleto = document.querySelector('#nomeContato');
const email = document.querySelector('#emailContato');
const numero = document.querySelector('#numeroContato');
const assunto = document.querySelector('#assuntoContato');
const mensagem = document.querySelector('#mensagemContato');

function enviarEmail() {
    //Juntando todas as variaveis do corpo da mensagem
    const corpoMensagem = ` -Nome: ${nomeCompleto.value}<br> -Email: ${email.value}<br> -Número: ${numero.value}<br> -Assunto: ${assunto.value}<br> -Mensagem: ${mensagem.value}`

    //Código smtpJS
    Email.send({
        SecureToken : "0dcdacc2-c1af-43c0-8ddf-1a07b512ad07",
        To: 'joaovictorviegas53@gmail.com',
        From: "joaovictorviegas53@gmail.com",
        Subject: assunto.value,
        Body: corpoMensagem
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Enviado!",
                    text: "A sua mensagem foi enviada com sucesso!",
                    icon: "success"
                });
            }
        }
    );
}

function checarInputs() {
    const itens = document.querySelectorAll('.item');

    for (const item of itens) {
        if (item.value == '') {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        //evento e-mail
        if (itens[1].value != '') {
            checarEmail()
        }

        itens[1].addEventListener('keyup', () => {
            checarEmail();
        });

        item.addEventListener('keyup', () => {
            if (item.value != '') {
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            } else {
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        })
    }
}


//Nessa parte ele verifica se o Email está no formato adequado como: "123@email.com"
function checarEmail() {
    const emailEscopo = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const erroTextoEmail = document.querySelector('.error-txt.email');

    if (!email.value.match(emailEscopo)) {
        email.classList.add('error');
        email.parentElement.classList.add('error');

        if (email.value != '') {
            erroTextoEmail.innerText = 'Insira um Endereço de E-mail válido';
        } else {
            erroTextoEmail.innerText = 'O E-mail não pode ficar em branco';
        }
    } else {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checarInputs();

    if(!nomeCompleto.classList.contains('error') && !email.classList.contains('error') && !numero.classList.contains('error') && !assunto.classList.contains('error') && !mensagem.classList.contains('error')){
        enviarEmail();

        form.reset();
        return false;
    }
});
