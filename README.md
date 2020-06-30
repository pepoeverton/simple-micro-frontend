# Simple Micro Frontend

This project is an example of a micro frontend using Module Feredation

[pt-br](https://github.com/pepoeverton/simple-micro-frontend/blob/master/README.pt-br.md)

## 💪 Motivation

More and more front-end projects get bigger and complex, in 2016 I had a really cool experience with micro frontends, at that time it was not very common and our approach can be said that it was not the best possible but it worked very well. This project intend to be a simple and scalable boilerplate of a micro frontend, in it I used the [Module Federation](https://webpack.js.org/concepts/module-federation), to better understand I recommend accessing the following links:

[What's?](https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5.md)

[Webpack 5 Module Federation - Zack Jackson](https://medium.com/@ScriptedAlchemy/webpack-5-module-federation-stitching-two-simple-bundles-together-fe4e6a069716)

## 🧩 Installation

After cloning the repository, you must run the command below at the root of the project:

```bash
yarn install-all
```

> You need [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/)

## 🏃‍♂️Running

Run the command below to start the applications: `dashboard`, `profile` and `projects`

```bash
yarn start-all
```

or if you prefer you can run the command below for each project: `dashboard`, `profile` and `projects`

```bash
yarn start
```

The ports of each project:

| Project   | Port   |
| --------- | ------ |
| dashboard | `3000` |
| profile   | `3001` |
| projects  | `3002` |

## 🏗 Project structure

The project structure presented is just an example, here I tried to make it as simple and scalable as possible:

```
.
├── dashboard                # Full dashboard using the `profile` and` projects` page.
├── profile                  # Profile containing only the profile page and related components.
├── projects                 # Projects containing only the projects page and related components.
```

Internal structure of each project:

```
.
├── public                   # Public files
├── src                      # Application code source
│ ├── components             # Generic application components
│ ├── styles                 # Generic application styles
│ ├── views                  # Pages used on the router
│ ├── App.js                 # Main application bootstrap with routes
│ ├── bootstrap.js           # Responsible for importing App.js and rendering in the DOM
│ ├── index.js               # Performs async import from bootstrap.js
└── webpack.config.js        # Bundler the all project and also where modules are exported so that projects can be reused

```

## ✏️ License

This project is distributed under the [MIT license](https://github.com/pepoeverton/simple-micro-frontend/blob/master/LICENSE.md).
