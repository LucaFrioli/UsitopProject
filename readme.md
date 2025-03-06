# Projeto Usitop:

**Adicione a pasta `js` dentro de `public/assets`**

Adição de arquivo de configuração do projeto, requisitos para funcionar:

-   Extensão ESLint da Microsoft;
-   Extensão Prettier - Code formatter da Prettier;
-   EditorConfig for VS Code da EditorConfig;

Estive documentando, e eis aqui uma explicação básica para nos comunicarmos internamente. Deveríamos pensar também em como organizar a documentação. Por enquanto, deixarei as documentações e contextos aplicáveis das ferramentas que estão sendo utilizadas como dependências tanto do projeto quanto para desenvolvimento:

-   [Express](https://expressjs.com/pt-br/);
-   [Webpack](https://webpack.js.org/concepts/);
-   [Babel](https://babeljs.io/docs/);
-   [EJS](https://ejs.co/#docs);
-   [Core-js](https://github.com/zloirock/core-js);
-   [Regenerator-runtime](https://github.com/facebook/regenerator/tree/main);
-   [Nodemon](https://github.com/remy/nodemon#nodemon);
-   [CSS-loader](https://webpack.js.org/loaders/css-loader/);
-   [Style-loader](https://webpack.js.org/loaders/style-loader/);
-   [Dotenv](https://github.com/motdotla/dotenv);

Não se esqueçam de criar um arquivo na raiz do projeto chamado `.env`. Ele conterá algumas informações. Essa linha deverá ser apagada após configurarmos e nos habituarmos a isso. Ele conterá informações sensíveis, porém importantes para o bom funcionamento das conexões com o database e eventuais sistemas de segurança que viermos a implementar.

# Iniciando dependências do projeto:

Ao fazer o clone do projeto, não se esqueça de rodar o seguinte comando no terminal:

```bash
npm i
```

Ele servirá para instalar as dependências do projeto que foram definidas até o momento atual. Veja também o arquivo `package.json` para compreender melhor o funcionamento dos scripts.

## Rodando o servidor e fazendo a build do `bundle.js`:

Para iniciar o servidor, basta no terminal digitar o comando a seguir:
**OBS: NÃO ESQUEÇAM DE FECHAR O SERVIDOR COM CTRL+C APÓS SUA ABERTURA:**

```bash
npm run start
```

Para iniciar a build do frontend, rode o seguinte comando:
**OBS: NÃO ESQUEÇA DE ENCERRAR A EXECUÇÃO UTILIZANDO CTRL+C APÓS A BUILD SER CONCLUÍDA:**

```bash
npm run dev
```

OBS: não chumbaremos ainda esses scripts, mas provavelmente eles venham a ser os originais para sempre. Por enquanto é isso.

# Metodologia do uso de imports:

Isso é uma sugestão e gostaria de saber o que vocês pensam sobre. No backend, devemos utilizar o sistema de importações padrão do Node.js utilizando `require()`/`module.exports`. Já para o frontend, por motivos de organização mais bruta, utilizar o padrão sugerido pela ECMAScript 6 `export{}`/`import * from 'módulo'`. O que acham?

# Sobre as pastas `models` e `middlewares`:

Por motivo de limpeza e organização inicial, optei por não mandá-las neste commit inicial, principalmente pelo fato de que ainda são pastas e conceitos que estou me aprimorando e não estou 100% habituado. Assim, considero adicioná-las ao longo do desenvolvimento. Porém, se já se sentirem confortáveis para adicionar códigos referentes às duas pastas, o façam, e vamos trocando ideias no Grupo e na aba Issues, adicionando tasks e documentando as interações mais técnicas na aba Issues. O que acham?

# Sobre a pasta public:

Nela ficarão todos os arquivos estáticos que serão usados ao longo do projeto. Devemos decidir qual o melhor modo de utilizar imagens. Vamos deixá-las no frontend ou na public? Estive pensando nisso... Estou pendente em deixá-las na public, porém estarei pesquisando o que isso interfere como custo em relação a requisições HTTP e em relação às implicações de segurança.
