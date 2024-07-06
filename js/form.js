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
        Host : "smtp.elasticemail.com",
        Username : "joaovictorviegas53@gmail.com",
        Password : "D7C7B8F0543058E634161E667E2D8F783675",
        To : 'joaovictorviegas53@gmail.com',
        From : "joaovictorviegas53@gmail.com",
        Subject : assunto.value,
        Body : corpoMensagem
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    enviarEmail()
});
