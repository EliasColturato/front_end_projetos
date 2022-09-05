# Desenvolvedor Front End Junior - Projetos

- Autor: Elias Colturato da Silva Junior
- Desafio:

Proposta:
Implementar uma lojinha de filmes com funcionalidade básica.
Estória:

Um de nossos clientes solicitou a implementação de uma loja de filmes em seu site.
E você será o responsável por essa implementação visual e pela integração com a
API. O cliente forneceu um protótipo básico do layout desejado, cabe a você
implementar da melhor forma as telas solicitadas, queremos ver a sua criatividade
em jogo para transformar esse protótipo em algo funcional e que cause um grande
impacto positivo no cliente.

API: https://developers.themoviedb.org/3

### Requisitos:

- Você deverá utilizar React.js, Javascript ou jQuery;
- Implementar o layout da página inicial e carrinho da loja;
- Integração com a API de filmes TMDb;
- Lista de filmes retornadas da API;
- Carrinho de compras lateral totalmente funcional;
- Mostrar a quantidade de itens do carrinho no botão de abrir o carrinho.

### Requisitos desejáveis:

- Pesquisa de filmes;
- Implementar checkout;
- Prosseguir para o checkout;
- Validar o preenchimento completo do formulário;
- Implementar máscaras nos campos de email, celular, CEP e CPF;
- Ao finalizar a compra, apresentar modal de sucesso.

### Itens que serão avaliados mas não obrigatórios:

- Documentação;
- Testes.

---

O Projeto foi desenvolvido com a biblioteca React.JS juntamente com algumas dependencias, sendo elas:

- [styled-components](https://styled-components.com/docs)
- [ion-icons](https://ionic.io/ionicons/usage)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)

Os requisitos mínimos cumpridos para o projeto foram:

- Boas práticas
- Utilização doReact
- Integração com a API
- Reproduzir o layout
- Carrinho de Compras totalmente funcional
- Mostrar quantidade de itens do carrinho no botão de abrir o carrinho

Os requisistos desejáveis cumpridos para o projeto foram:

- Pesquisa de filmes;
- Implementar checkout
- Prosseguir para o checkout
- Documentação

# Iniciando o Projeto

Clone este repositório em sua máquina utilizando:

$ _git clone https://github.com/EliasColturato/front_end_projetos.git_

Instale as dependencias do projeto com o seguinte comando:

$ _yarn install_
ou
$ _yarn_

Após a instalação das dependenciais inicie o projeto com:

$ _yarn start_

---

# Api Utilizada

A API utilizada foi disponibilizada pelo The Movie Data Base, tendo a seguinte documentação https://developers.themoviedb.org/3

caminho usado para comunicação dentro da aplicação: tps://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=pt-BR&page=1

---

# Construção da aplicação

Diretórios

_Routes.js (Componente de criação de rotas e funcionalidades utilizando react-router-dom)_

_index.js (index que faz a ligação entre o root e a aplicação)_

_index.css (estilo padrão que procede na aplicação)_

- src

  - pages

    _Home.js (Pagina home onde engloga todos components referentes a página inicial)_

    _Search.js (Página de busca dos filmes)_

    _Details.js(Página de detalhes dos filmes)_

    _Cart.js(Página do carrinho com todos os filmes selecionados)_

  - components

    _Average.js (Componente onde é possível retornar a média para cáda filme)_

    _BuyButton.js (Componente de botão para a adição de produtos ao carrinho)_

    _CartCard.js (Componente que mostra todos os filmes selecionados no carrinho de checkout)_

    _Film.js (Componente que recebe a image, nome, nota e valor de cada filme)_

    _FilmShelf.js (Componente pai que organiza a prateleira de filmes)_

    _GoBack.js (Componente com botão que direciona a página inicial)_

    _Header.hs (Componente de cabeçalho composto por logo, barra de pesquisa e menu de compra)_

    \_SideBar.js (Componente da barra lateral que aparece quando o botão no menu é clicado)

---
