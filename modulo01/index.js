const express = require('express');

// console.log(express); usado para visualizar a importação do express

const server = express();

server.get('/videos', (req,res) => {
  
    // return res.send('Hello World!'); usado para teste e retornar no navegador o texto
    return res.json({ curso: 'Node JS'});
    
})

// com template string

server.get('/template', (req,res) => {
    const nome = req.query.nome;

    return res.json({ curso: `Aprendendo ${nome}`});

})

// com route params

server.get('/power/:id',(req,res) => {
    const id = req.params.id;

    return res.json({ curso: `Id do curso ${id}`});
})

server.listen(3000);