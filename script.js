const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", homemDeEnvio)

function homemDeEnvio(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    const sexo = document.querySelector("input[name='sexo']:checked").value;

    console.log("Nome: ", nome);
    console.log("Sobrenome: ", sobrenome);
    console.log("Email: ", email);
    console.log("Mensagem: ", mensagem);
    console.log("Sexo: ", sexo);
}