class HomeElements {

    linkListaCompras = () => {
        return 'a[data-testid="lista-de-compras"]';
    };
    
    classeJumbotron = () => {
        return 'div[class="jumbotron"]';
    };

    campoPesquisar = () => {
        return '[placeholder="Pesquisar Produtos"]';
    };

    botaoPesquisar = () => {
        return '[data-testid="botaoPesquisar"]';
    };

    listaProdutos = () => {
        return 'div[class="container-fluid"]';
    };

}

export default HomeElements;