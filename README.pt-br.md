# Simple Micro Frontend

Este projeto é um exemplo de micro frontend usando Module Feredation

[en-us](https://github.com/pepoeverton/simple-micro-frontend/blob/master/README.md)

## 💪 Motivação

Cada vez mais os projetos front-end ficam maiores e mais complexos, em 2016 eu tive uma experiência muito legal com micro frontends, naquela época pouco se ouvia falar e nossa solução pode se dizer que não foi a melhor possível mas nos atendeu muito bem. Esse projeto tem como objetivo ser um boilerplate simples e escalável de um micro frontend, nele eu utilizei o [Module Federation](https://webpack.js.org/concepts/module-federation), para entender melhor eu recomendo acessar os seguintes links:

[O que é?](https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5.md)

[Webpack 5 Module Federation - Zack Jackson](https://medium.com/@ScriptedAlchemy/webpack-5-module-federation-stitching-two-simple-bundles-together-fe4e6a069716)

## 🧩 Instalação

Após realizar o clone do repositório você deve rodar o comando abaixo na raiz do projeto:

```bash
yarn install-all
```

> Precisa de [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/)

## 🏃‍♂️Rodar o projeto

Execute o comando abaixo para iniciar as aplicações: `dashboard`, `profile` e `projects`

```bash
yarn start-all
```

ou se preferir você pode rodar o comando abaixo para cada projeto: `dashboard`, `profile` e `projects`

```bash
yarn start
```

Segue abaixo as portas de cada projeto:

| Projeto   | Porta  |
| --------- | ------ |
| dashboard | `3000` |
| profile   | `3001` |
| projects  | `3002` |

## 🏗 Estrutura do projeto

A estrutura de projeto apresentada é somente um exemplo, aqui eu tentei deixar da forma mais simples possível e escalável:

```
.
├── dashboard                # Dashboard completo utilizando a página de `profile` e `projects`.
├── profile                  # Profile contendo somente a página de profile e componentes referentes.
├── projects                 # Projects contendo somente a página de projects e componentes referentes.
```

Estrutura interna de cada projeto:

```
.
├── public                   # Contém arquivos públicos
├── src                      # Source da aplicação
│ ├── components             # Componentes genéricos da aplicação
│ ├── styles                 # Estilos genéricos da aplicação
│ ├── views                  # Páginas utilizadas no router
│ ├── App.js                 # Bootstrap principal da aplicação contendo as rotas
│ ├── bootstrap.js           # Responsável por importar o App.js e renderizar no DOM
│ ├── index.js               # Realiza o import async do bootstrap.js
└── webpack.config.js        # Realiza todo o empacotamento do projeto e também onde é exportado os módulos para que os projetos sejam reutilizados

```

## ✏️ Licença

This project is distributed under the [MIT license](https://github.com/pepoeverton/simple-micro-frontend/blob/master/LICENSE.md).
