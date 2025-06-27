
//metodos: index, show, store, update, destroy
/*
index: listar todos
show: listar um só
store: armazenar
update: atualizar
destroy: deletar
*/
import User from '../models/User';

class SessionController {

    async store(req, res){

        const { email } = req.body;

        //verifica se o email ja existe no banco
        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user)
    };
};

export default new SessionController();