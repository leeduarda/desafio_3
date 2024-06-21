# Furniro - Desafio 3 | Programas de Bolsas React

## Requisitos Obrigatórios

- Utilize TypeScript para tipagem;
- Utilize Firebase, para lidar com a autenticação do usuário. A autenticação deve ser possível com: e-mail, Facebook e Google. A documentação linkada está detalhada e fornece todas as informações necessárias para aplicar esta funcionalidade;
- React Router para criação das rotas, sendo que é necessário proteger as rotas;
- Crie controles deslizantes para exibição dos móveis na sessão da Home, em formato de Carrossel. Recomendação de biblioteca: Splide. Splide for React docs. Sinta-se à vontade para usar a biblioteca de sua preferência;
- Crie um arquivo JSON e cole-o no Run Mocky para criar uma API para os produtos;
- A página de produtos gerais deve conter paginação como no Figma, o botão de ‘Filter’ deve abrir um pop-up com filtros funcionais;
- Ao clicar no card de um móvel, é necessário redirecionar o usuário para a rota específica que contém suas informações detalhadas (Product Page);
- Na página de produto, o botão de ‘Add To Cart’ deve adicionar o produto no carrinho e o produto pode ser adicionado ou removido quantas vezes o usuário desejar;
- O carrinho deve ser criado com Redux;
- Ao clicar no botão de ‘Check Out’, o usuário PRECISA estar logado para fazer o redirecionamento para a página de Check Out, essa rota específica deve estar protegida;
- Os campos de formulário devem ser todos validados;
- Na página de Check Out, os dados de endereço devem vir da API e preencher todos os campos de endereço automaticamente, exceto o de complemento;
- A aplicação deve estar responsiva;
- Pode fazer o uso de biblioteca externa (estritamente styled-components ou Tailwind) para estilização;
- Testes unitários com pelo menos 70% de cobertura;
- Crie um repositório privado em seu Github e adicione os instrutores como colaboradores do projeto até as 17h30 do dia 10/06;
- Adicione um README ao seu projeto;
- Faça pequenos commits e use Convencionais Commits para manter seu repositório organizado.

## Requisitos Parte 2

- ReactApp rodando em uma instância EC2 (uso geral) com porta aberta para acesso externo (VPC do EC2)
- Todas as imagens devem ser hospedadas em bucket do S3 (uso geral)

## Dev
- [Letícia dos Santos](https://github.com/leeduarda)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/leeduarda/desafio_3.git
```

Entre no diretório do projeto

```bash
  cd desafio_3
```

Instale as dependências

```bash
  npm install
```

Inicie o projeto

```bash
  npm run dev
```

Inicie o servidor

```bash
  npx json-server --watch src/data/products.json
```

