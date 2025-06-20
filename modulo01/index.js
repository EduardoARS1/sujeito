const express = require('express');

// console.log(express); usado para visualizar a importação do express

const server = express();

server.use(express.json());

//Middlewares

//Exibe as rotas quando acessadas
server.use((req, res, next)=> {
    console.log(`ROTA ACESSADA: ${req.url}`)

    return next();
});

//função de middleware para verificar se a propriedade é passada, se não retorna erro
function checkBody (req, res, next) {

    if(!req.body.name) {
        return res.status(400).json({ message: "Propriedade 'name' é obrigatória"})
    };

    return next();
};

function checkIndexCurso(req, res, next) {
    const curso = cursos[req.params.index];

    if(!curso){
        return res.status(400).json({ message: "Esse curso não existe"})
    };

    req.curso = curso;

    return next();
};

// Tentei criar um middleware para uma rota onde o ID é obrigatório, mas não faz sentido, pois se não passar o ID a consulta já quebra a não ser que eu criasse uma outra rota, sem o ID e nela retornasse um erro, mas não faria sentido
// function checkPowerId(req, res, next){

//     if(!req.params.id){
//         return res.status(400).json({ message: "Esse curso na rota power não existe"})
//     };

//     return next();
// };

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
server.get('/curso/:index', checkIndexCurso,(req, res) => {
    
    // const { index } = req.params;
    // return res.json({curso: cursos[index]});
    return res.json({curso: req.curso});
    
});

//Listando todos os cursos
server.get('/cursos', (req, res) => {
    
    return res.json(cursos)

});

//Criando um curso
server.post('/cursos', checkBody, (req, res) => {

    const { name } = req.body; //define o parametro no body para receber o valor

    cursos.push(name); //para inserir o valor do body no array

    return res.json(cursos);

});

//Atualizando um curso
server.put('/curso/:index', checkBody, checkIndexCurso,(req, res) => {

    const { index } = req.params;

    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);

});

//Deletando um curso
server.delete('/curso/:index', checkIndexCurso,(req, res) =>{

    const { index } = req.params;

    cursos.splice(index, 1);//para remover de cursos apenas 1, pelo id

    return res.json(cursos);

});

server.listen(3000);