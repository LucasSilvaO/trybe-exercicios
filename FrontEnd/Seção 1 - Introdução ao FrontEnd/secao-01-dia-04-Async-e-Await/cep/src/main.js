const inputCep = document.getElementById('cep');
const btn = document.getElementById('btnConfirma');
const endereco = document.getElementById('endereco');

btn.addEventListener('click', async () => {   
    const response = await fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`);
    const data = await response.json();
    endereco.innerText = ` Bairro: ${data.bairro}
                           Localidade: ${data.localidade}
                           UF: ${data.uf}     `
})
