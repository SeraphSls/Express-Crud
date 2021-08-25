# expressCrud
API - CRUD rest com express basico 


## Arquitetura utilizada na contrução

Foi utilizado NodeJs, express, docker.


## Importação do projeto

Para a importação do projeto, utilize um terminal de sua preferencia e o VsCode =)

```
git clone 'url' 
```

feito isso , navegue até o diretorio pelo terminal onde foi realizado o download do projeto, em seguida , digite o seguinte :

```
code ..
```

Esse comando vai abrir o VsCode já com a view do projeto


## Execução do projeto

Para executar o projeto , vá até a aba 'terminal' -> new terminal do VsCode.

No terminal que será aberto , assumindo que já tenha o NodeJs instalado em sua maquina, digite :


```
npm install 
```

Este comando vai baixar todas as dependencias necessarias mapeadas no package.json para a execução do projeto =)



## Execução do container
 
Na estrutura da aplicação foi disponibilizada um arquivo "docker-compose.xml"  utilizado para subir um container via Docker.

Tendo o docker instalado , vá até o diretorio do arquivo e execute o seguinte comando :

```
docker-compose up 
```

Após isso , a imagem com o MYSql estara disponivel na porta 3306, com acesso já configurado na aplicação.

## Acessando a aplicação

Após estes passos realizados vá até o terminal aberto e digite o seguinte: 


```
npm start 
```

e se tudo der certo , a aplicação vai estar hospedada em **localhost:5000/**

