# API de Pedidos

Esta é minha primeira API desenvolvida simulando gerenciamento de pedidos. Ela permite criar, atualizar, obter e excluir pedidos, bem como atualizar o status de um pedido.

## Instalação

Certifique-se de ter o Node.js instalado em sua máquina.

1. Faça o download ou clone este repositório.
2. Navegue até o diretório raiz do projeto no seu terminal.
3. Execute o seguinte comando para instalar as dependências necessárias:

```shell
npm install
```

## Uso

1. Inicie o servidor executando o seguinte comando:

```shell
npm start
```

O servidor será iniciado na porta 3000 e você verá a mensagem "🌎 Server started on port 3000 🚀" no console.

2. Use um cliente HTTP, como cURL ou Postman, para interagir com a API.

## Endpoints

### Listar todos os pedidos

```
GET /order
```

Este endpoint retorna uma lista de todos os pedidos.

### Cadastrar um novo pedido

```
POST /order
```

Este endpoint permite cadastrar um novo pedido. Envie os seguintes dados no corpo da solicitação:

```json
{
  "order": "Descrição do pedido",
  "clientName": "Nome do cliente",
  "price": 10.99
}
```

### Atualizar um pedido

```
PUT /order/:id
```

Este endpoint permite atualizar um pedido existente. Substitua `:id` pelo ID do pedido que você deseja atualizar. Envie os seguintes dados no corpo da solicitação:

```json
{
  "order": "Nova descrição do pedido",
  "clientName": "Novo nome do cliente",
  "price": 15.99
}
```

### Excluir um pedido

```
DELETE /order/:id
```

Este endpoint exclui um pedido existente. Substitua `:id` pelo ID do pedido que você deseja excluir.

### Obter um pedido específico

```
GET /order/:id
```

Este endpoint retorna um pedido específico. Substitua `:id` pelo ID do pedido que você deseja obter.

### Atualizar o status de um pedido

```
PATCH /order/:id
```

Este endpoint permite atualizar o status de um pedido existente para "Pronto". Substitua `:id` pelo ID do pedido que você deseja atualizar.

## Middleware

A API também possui um middleware para fazer o log do método e URL de cada requisição. Ele é executado antes de cada rota e exibe no console uma mensagem com o método da requisição e a URL solicitada.

## Notas

- Todos os pedidos são armazenados em memória durante a execução da API. Quando o servidor é reiniciado, os pedidos são redefinidos.
- O ID de cada pedido é gerado automaticamente usando a biblioteca uuid.

## Contribuição

Espero que essa API seja útil para você de alguma forma! 🚀

Feito com ♥ por Anderson Leite :wave: [Entre em contato!](https://www.linkedin.com/in/andersondiasleite/)
