# Projeto Usi Top:

**Obs: pesquisar minificador ou plugin para css, pesquisar e calcular usos de mongodb ou mysql/mariadb, financeiramente e ou tecnicamente, considerando curva de aprendizado e deadline do projeto.**

Adição de arquivo de configuração do projeto, requisitos para funcionar :
- Extensão ESlint da microsoft;
- Extensão Prettier - Code formatter da Prettier;
- EditorConfig for VS Code da EditorConfig;

Estive documentando, e e qui está uma explicação básica para nos comunicarmos internamente, deveriamos pensar tambem em como organizar a documentação, por momento deixarei as documentações e contextos aplicaveis das ferramentas que estão sendo utilizadas como dependencias tanto do projeto quanto para desenvolvimento :

-   [express](https://expressjs.com/pt-br/);
-   [webpack](https://webpack.js.org/concepts/);
-   [babel](https://babeljs.io/docs/);
-   [ejs](https://ejs.co/#docs);
-   [core-js](https://github.com/zloirock/core-js);
-   [regenerator-runtime](https://github.com/facebook/regenerator/tree/main);
-   [nodemon](https://github.com/remy/nodemon#nodemon);
-   [css-loader](https://webpack.js.org/loaders/css-loader/);
-   [style-loader](https://webpack.js.org/loaders/style-loader/);
-   [dotenv](https://github.com/motdotla/dotenv);

Não se esquçam de criar um arquivo na raiz do projeto chamado `.env`, ele conterá algumas informações, essa linha deverá ser apagada após configurarmos e nos habituarmos a isso, ele conterá informações sensíveis porem importantes para o bom funcionamento das conexões com o database, e eventuais sistemas de segurança que viremos a implementar.

# Iniciando dependencias do projeto :

Ao fazer o clone do projeto não esqueça de rodar o seguinte comando no terminal :

```bash
npm i
```

Ele servirá para instalar as dependencias do projeto que froam definidas até o momento atual, veja também o arquivo `package.json`, pra compreender melhor o funcionamento dos scripts.

## Rodando o servidor e fazendo a build do `bundle.js` :

Para iniciar o servidor basta no termina digitar o comando a seguir :
**OBS : NÃO ESQUEÇAM DE FECHAR O SERVIDOR COM CTRL+C APÓS SUA ABERTURA :**

```bash
npm run satart
```

Para iniciar a build do frontend rode o seguinte comando :
**OBS : NÃO ESQUEÇA DE ENCERRAR A EXECUÇÃO UTILIZANDO CTRL+C APÓS A BUILD SER CONCLUIDA :**

```bash
npm run dev
```

OBS : não chumbaremos ainda esses scripts, mas proval=velmente eles venham a ser os originais para sempre, por momento é isso;

# Metodologia do uso de imports :

Isso é uma sugestão e gostaria de saber o que vcs pensam sobre, no backend devemos utilizar o sistema de importações padrão do Node.js utilizando `require()`/`module.exports`,já para front end por motivos de organização mais bruta utilizar o padrão sugerido pela ecmaScript6 `export{}`/`import * from 'modulo'`, o que acham ?

# Sobre as pastas `models` e `middlewares` :

Por motivo de limpeza e organização inicial optei por não manda-las neste comit inicial, principalmente pelo fato que ainda são pastas e conceitos que estou me aprimorando e não estou 100% habituado, assim considero adiciona-las ao longo do desenvolvimento, porém se já se sentirem confortaveis para adicionar código referentes as duas pastas o façam, e vamos trocando ideias no Grupo e na aba Issues, adicionando tasks e documentando as interações mais técnicas na aba Issues o que acham?

# Sobre a pasta public :

Nela ficarão todosos arquivos estáticos que serão usados aolongo do projeto, devemos decidir qual o melhor modo de utilizar imagens, vamos deixa-las no frontend ou na public ? estive pensando isso... sou pendente em deix-lasna public, porém estarei pesquisando oq isso interfere como custo em relação arequisições http e em relação as inplicações de segurança.
