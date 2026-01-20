# NestJS + TypeORM + PostgreSQL (Users API)

## Descrição

Este projeto é uma API REST desenvolvida com NestJS, utilizando TypeORM como ORM e PostgreSQL como banco de dados.

### Tecnologias Utilizadas

- Node.js
- NestJS
- TypeORM
- PostgreSQL
- Docker
- Docker Compose
- TypeScript
- class-validator


### Arquitetura

- DTO (Data Transfer Object): Define o formato dos dados recebidos.
- Domain: Camada de domínio com validações usando class-validator.
- Entity: Representação da tabela no banco de dados.
- Service: Contém as regras de negócio.
- Controller: Define as rotas HTTP.

### Banco de Dados

O banco de dados utilizado é o PostgreSQL, executado via Docker Compose.

### Configurações padrão
- Host: localhost
- Porta: 5432
- Usuário: postgres
- Senha: 1234
- Database: nesttypeorm

## Configuração do Ambiente

### Clonar o repositório
```
git clone <url-do-repositorio>
```

### Instalar dependências
```
npm install
```

### Subir o banco de dados
```
docker-compose up -d
```

### Variáveis de ambiente 
Crie um arquivo .env na raiz do projeto:
```
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=nesttypeorm
DB_USERNAME=postgres
DB_PASSWORD=1234
```

### Executando o Projeto
```
npm run start:dev

Aplicação disponível em: http://localhost:3000
```
