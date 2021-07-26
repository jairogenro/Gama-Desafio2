const form = document.getElementById('form')

 form.addEventListener('submit', (e) => {
    e.preventDefault();
    let clientname = document.getElementById('clientname').value;
    let email = document.getElementById('email').value;
    let data = {
        clientname,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);
    console.log(clientname, email);

    let content = document.getElementById('content')

    let carregando = `<p>Cadastrando...</p>`

    let pronto = `<p>Cadastro efetuado com sucesso!</p>`

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto
    }, 2000)
})