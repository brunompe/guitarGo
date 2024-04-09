# GuitarGo

Esse projeto foi desenvolvido como teste técnico para Desenvolvedor Frontend na SpiritShop Ecommerce Solutions.

Antes de iniciar o desenvolvimento, criei um [protótipo](https://www.figma.com/file/yClmG4SYBBONFpp0cdXbyT/GuitarGo?type=design&node-id=0%3A1&mode=design&t=lB1idDUvQFGDKOEG-1) da aplicação.

## Ferramentas

- Vite
- React
- React Router Dom
- Axios
- JSON-Server
- Bootstrap
- Tailwind
- Figma

## Requisitos

### Teste 1

- Desenvolver uma página de listagem de produtos que mostre uma grid de produtos. Cada produto deve ter uma imagem, um título, uma breve descrição, e um botão de "Ver Mais".
- Desenvolver uma página de detalhes do produto que seja acessada ao clicar em "Ver Mais" em um dos produtos da listagem. Esta página deve mostrar a imagem do produto, título, descrição completa, e preço.
- As páginas devem ser responsivas e estilizadas usando Bootstrap.
- Implementar um filtro de busca na página de listagem de produtos que permita aos usuários filtrar produtos por título.
- O JavaScript deve ser usado para adicionar interatividade à página de detalhes, como um slider de imagens do produto (se houver mais de uma imagem).

### Teste 2

- Implementar um sistema de avaliação de produtos na página de detalhes do produto. Os usuários devem poder dar uma nota ao produto (de 1 a 5 estrelas).
- Armazenar as avaliações de forma estática no front-end (não é necessário backend real, pode simular com JavaScript).

## Instalação

Pré-requisitos

- NodeJs v.16 ou superior
- npm

A forma mais simples e rápida de instalar é através do [nvm](https://github.com/nvm-sh/nvm).

Após todos os pré-requisitos instalados, siga o passo-a-passo abaixo.

#### Faça o clone do repositório

```bash
  git clone https://github.com/brunompe/guitarGo.git
```

#### Acesse a pasta do projeto

```bash
  cd guitargo
```

#### Instale as dependências do projeto

```bash
  npm install
```

#### Em um terminal, incie o JSON-Server, para servir os dados da aplicação

```bash
  npm run start:api
```

#### Em outro terminal, inicie a aplicação

```bash
  npm run dev
```

## Autor

- [@brunompe](https://www.github.com/brunompe)

## Contatos

- [LinkedIn](https://www.linkedin.com/in/brunompe/)
- [Email](brunompe@gmail.com)
