# TypeScript Template

Este é um template básico para iniciar projetos usando TypeScript. Ele fornece uma estrutura inicial para criar aplicativos e bibliotecas usando TypeScript, juntamente com algumas configurações e dependências pré-configuradas.

## Recursos

- Estrutura inicial para projetos TypeScript.
- Configuração do compilador TypeScript com opções recomendadas.
- Configuração do ambiente de desenvolvimento para TypeScript.
- Exemplo básico de aplicativo TypeScript.

## Dependências

Antes de usar este template, verifique se você tem as seguintes dependências instaladas:

- [typescript](https://www.typescriptlang.org/): É um SuperSet para Javascript que permite detectar erros precocemente em seu editor.
- [@types/node](https://www.npmjs.com/package/@types/node): Definição de tipos para Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Carrega variáveis de ambiente de arquivos `.env` para o `process.env`.
- [rimraf](https://www.npmjs.com/package/rimraf): Remove recursivamente arquivos e diretórios utilizando o node.
- [tsx](https://www.npmjs.com/package/tsx): Executa arquivos typescript sem a necessidade de transpilar previamente.

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas em sua máquina:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Como usar

### Clonando diretamente em seu computador

1. Clone este repositório em sua máquina local usando o seguinte comando:

    ```shell
    git clone https://github.com/mckatoo/typescript-template.git
    ```

2. Navegue até o diretório clonado:

    ```shell
    cd typescript-template
    ```

3. Instale as dependências do projeto usando o npm:

    ```shell
    npm install
    ```

4. Agora você pode começar a desenvolver seu projeto TypeScript. Os arquivos de origem do TypeScript estão localizados no diretório src. Você pode começar a escrever seu código nesses arquivos.

5. Para compilar seu projeto TypeScript, execute o seguinte comando:

   ```shell
   npm run build
   ```

    Isso irá compilar o código TypeScript e gerar os arquivos JavaScript no diretório dist.

6. Após a compilação, você pode executar o projeto usando o seguinte comando:

    ```shell
    npm start
    ```

   Isso irá executar o arquivo JavaScript principal (main.js) no diretório dist.

### Criando seu repositório

1. Click [![https://img.shields.io/badge/-AQUI-blue](https://img.shields.io/badge/-AQUI-blue)](https://github.com/mckatoo/typescript-backend-template/generate) para iniciar seu repositório a partir deste template.

2. Clone o repositório recém criado em sua máquina local usando o seguinte comando:

    ```shell
    git clone https://github.com/suaconta/seurepocriado.git
    ```

3. Continue a partir do [passo 2](#clonando-diretamente-em-seu-computador) do item anterior.

## Atualização do Workflow

Este repositório contém um fluxo de trabalho pré configurado.
Siga as instruções de como atualizar descritas neste [guia](.github/workflows/UPDATE.md).

## Contribuindo

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma nova issue ou enviar uma pull request. Teremos prazer em revisar e mesclar suas contribuições!

## Licença

Este projeto está licenciado sob a [MIT Licence](https://mit-license.org).
Certifique-se de revisar o arquivo README.md após copiá-lo para o seu repositório para verificar se todas as informações estão corretas e se adaptam às necessidades do seu projeto.
