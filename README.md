# 🚧 README em construção 🚧

# Sobre o Projeto 

- Neste projeto foi desenvolvido uma API e um banco de dados para produção de contéudos de um blog.
- Usando a ORM sequelize para fazer o CRUD das postagem.

<a href="./img/xxxxxxxxxx.png">
  <img src="./img/xxxxxxxxxx.png" width="30%"></img>
</a>
<a href="./img/xxxxxxxxxx.png">
  <img src="./img/xxxxxxxxxx.png" width="30%"></img>
</a>
<a href="./img/xxxxxxxxxx.png">
  <img src="./img/xxxxxxxxxx.png" width="30%"></img>
</a>

# Tecnologias e ferramentas usadas 🛠

![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A)
![Docker](https://img.shields.io/badge/-Docker-003f8c?style=flat-square&logo=docker&logoColor=fff)
![Express](https://img.shields.io/badge/-Express-339999?style=flat-square&logo=express)
![Joi](https://img.shields.io/badge/-Joi-0080ff?style=flat-square&logo=joi)
![MySQL](https://img.shields.io/badge/-MySQL-EAA221?style=flat-square&logo=mysql&logoColor=1e4c68)
![Sequelize](https://img.shields.io/badge/-Sequelize-02afef?style=flat-square&logo=sequelize&logoColor=ffffff)
![JWToken](https://img.shields.io/badge/-JWToken-000?style=flat-square&logo=jsonwebtokens&logoColor=d63aff)
![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=000)

# Desafios

- Configuração initial do **sequelize** definindo todos arquivos iniciais necessários, começando pelas migrations que criam as tabelas no banco de dados, seguinde dos models, que são usados quando vamos usar alguma funcionalidade do sequelize e os seeders(ja criados pela trybe), para "alimentar" o banco com informação e a association que define a relação entre uma tabela e outra quando há alguma, de forma a facilitar a coleta mesclada de informação entre tabelas quando necessário.
- Usando JWT para autenticar o usuário que está acessando aquela determinada rota por meio de middleware, checando se o usuário é valido e tem permissão para aquele dado.


# Conclusão

- O uso de ORM é complicado no inicio da aplicação muitas vezes por falta de experiência com a ferramenta, e dependendo da dimensão da aplicação cai aquela pergunta, se realmente era necessário o uso dela, mas fica claro o quão útil e prático ela pode ser na hora de apagar e reiniciar as informação do banco e consulta-las, talvez não da forma mais performática, e caso seja necessário a mudança de um banco, mudando apenas uma palavra na configuração do sequelize, poderiamos mudar de **mysql** para **postgres** instantaneamente sem nenhum trabalho adicional.

# Iniciando o Projeto Blogs API.

Importante: seguir a ordem apresentada a baixo, para o funcionamento.

<details>
  <summary>
    <strong>
      ⚠️ Configurações mínimas para execução do projeto
    </strong>
  </summary>

   - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2
 - API Client ([Thunder Client](https://www.thunderclient.com/), [Insomnia](https://insomnia.rest/), [POSTMAN](https://www.postman.com/), ou algum outro de sua preferência)

</details>

<details>
  <summary>
    <strong>
      ⚙️ Variáveis de ambiente
    </strong>
  </summary>

Deve-se criar um arquivo .env na raiz do projeto com o seguinte conteúdo:
```
#### SERVER VARS
NODE_ENV=development
API_PORT=3000

#### DATABASE VARS
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=root
MYSQL_PASSWORD=password

#### SECRECT VARS
JWT_SECRET=suaSenhaSecreta
```
</details>

<details>
  <summary>
    <strong>
      ⚠️ Inicie o docker-compose
    </strong>
  </summary>

Para iniciar o docker compose, você deve estar dentro da pasta raiz do projeto usar o comando: `docker-compose up -d`

Verifique se os container está funcionando e rodando com o comando `docker ps`. Devem aparecer dois container com o nome de *blogs_api* e *blogs_api_db*.

</details>

<details>
  <summary>
    <strong>
      🗂 Acessando as Rotas
    </strong>
  </summary>

As rodas desenvolvidas no projeto são;

# /products
### GET - `localhost:3000/products/search`
- Rota responsável por realizar uma consultas por qualquer palavra inclusa em um nome de produto, usando o sinal de `?q=NomeDesejado` após search.

<details>
  <summary>
    Exemplo:
  </summary>

  ⚠️ Pode ser usado o URL em seu navegador, um API Client ou acessando a rota `localhost:3000/docs` em seu navegador.

  <a href="./img/swagger_searchProductName.png">
    <img src="./img/swagger_searchProductName.png" width="60%"></img>
  </a>

</details>

#
### GET - `localhost:3000/xxx/x`
- Rota responsável por realizar uma consulta por um produto especifico com base em seu *id*.
<details>
  <summary>
    Exemplo:
  </summary>

  ⚠️ Pode ser usado o URL em seu navegador, um API Client ou acessando a rota `localhost:3000/docs` em seu navegador.

  <a href="./img/swagger_getProductId.png">
    <img src="./img/swagger_getProductId.png" width="60%"></img>
  </a>

</details>

</details>
