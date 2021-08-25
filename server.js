
//import das bibliotecas no padrão CommonJS
const express = require('express');
const bodyParser = require('body-parser');

// criamos o app express
const app = express();

// setamos a porta que o aplicativo vai ser hospedado
const port = process.env.PORT || 5000;

// automaticamente seta o aplicativo para parsear requisições application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))

// automaticamente seta o aplicativo para parsear requisições- application/json
app.use(bodyParser.json())


// define uma primeira "rota" , onde vão poder ser pegadas as requisições

app.get('/main', (req, res) => {
  res.send("Hello programando futuro!");
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



const alunosRoutes = require('./src/routes/alunos.routes')

app.use('/api/alunos', alunosRoutes);