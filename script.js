//No arquivo script.js capture os quatro elementos criados,
// e use a propriedade .innerText para adicionar conteúdo 
// textual aos elementos 'h1' e 'a', e a propriedade .innerHTML 
// para adicionar três itens simples na lista não ordenada, 
// e três itens com links para outros sites na lista ordenada. 


// Capturando os elementos HTML pelo ID
const tituloElement = document.getElementById("titulo");
const listaOrdenadaElement = document.getElementById("lista-ordenada");

// Adicionando conteúdo aos elementos h1 e a
tituloElement.innerText = "Título da Página";
document.querySelector("a").innerText = "Visite o site da ProzEducação";

// Adicionando itens na lista não ordenada (ul) usando innerHTML
const ulElement = document.querySelector("ul");
ulElement.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens na lista ordenada (ol) com links usando innerHTML
listaOrdenadaElement.innerHTML = `
    <li><a href="https://exemplo.com">Item 1</a></li>
    <li><a href="https://outroexemplo.com">Item 2</a></li>
    <li><a href="https://maisumexemplo.com">Item 3</a></li>
`;
