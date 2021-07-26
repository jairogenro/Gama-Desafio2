const form = document.getElementById('form')

 form.addEventListener('submit', (e) => {
    e.preventDefault();
    let productname = document.getElementById('productname').value;
    let price = document.getElementById('price').value;
    let data = {
        productname,
        price,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);
    console.log(productname, price);

    let content = document.getElementById('content')

    let carregando = `<p>Cadastrando...</p>`

    let pronto = `<p>Cadastro efetuado com sucesso!</p>`

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto
    }, 2000)
 })