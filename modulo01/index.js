const express = require('express');

// console.log(express); usado para visualizar a importação do express

const server = express();

server.get('/videos', (req,res) => {
  
    // return res.send('Hello World!'); usado para teste e retornar no navegador o texto
    return res.json({ curso: 'Node JS'});
    
})

server.listen(3000);