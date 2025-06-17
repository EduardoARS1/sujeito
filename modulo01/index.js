const express = require('express');

// console.log(express); usado para visualizar a importação do express

const server = express();

server.use(express.json());

server.get('/videos', (req,res) => {
  
    // return res.send('Hello World!'); usado para teste e retornar no navegador o texto
    return res.json({ curso: 'Node JS'});
    
});

// com template string

server.get('/template', (req,res) => {
    
    const nome = req.query.nome;

    return res.json({ curso: `Aprendendo ${nome}`});

});

// com route params

server.get('/power/:id',(req,res) => {
    
    const id = req.params.id;

    return res.json({ curso: `Id do curso ${id}`});
});

const cursos = ['Node JS', 'JavaScript', 'PHP', 'TypeScript', 'React Native'];

//CRUD

//Listando um curso
server.get('/curso/:index', (req, res) => {
    
    const { index } = req.params;

    return res.json({curso: cursos[index]});
});

//Listando todos os cursos
server.get('/cursos', (req, res) => {
    
    return res.json(cursos)

});

//Criando um curso
server.post('/cursos', (req, res) => {

    const { name } = req.body; //define o parametro no body para receber o valor

    cursos.push(name); //para inserir o valor do body no array

    return res.json(cursos);

});

//Atualizando um curso
server.put('/curso/:index', (req, res) => {

    const { index } = req.params;

    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);

});

//Deletando um curso
server.delete('/curso/:index', (req, res) =>{

    const { index } = req.params;

    cursos.splice(index, 1);//para remover de cursos apenas 1, pelo id

    return res.json(cursos);

});

server.listen(3000);