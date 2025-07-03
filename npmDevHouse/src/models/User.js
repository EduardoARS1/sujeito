import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: String,
});

export default model('User', UserSchema);

//inicia criando um model, depois um controllers e depois adiciona em routes.