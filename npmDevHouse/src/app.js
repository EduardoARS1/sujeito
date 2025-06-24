import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {

    constructor(){
        
        this.server = express();

        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.yxvhjiu.mongodb.net/?retryWrites=true&w=majority&appName=devhouse');

        this.middleware();
        this.routes();
    }

    middleware(){
        this.server.use(express.json());
    };

    routes(){
        this.server.use(routes);
    };

};

export default new App().server;