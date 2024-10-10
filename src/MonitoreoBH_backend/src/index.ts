import { Server } from 'azle';
import express from "express";

export default Server(()=>{
    const app = express();

    app.get('/get',(req,res)=>{
        console.log("Si jala el get, osea el servior")
    });



    return app.listen();

   
})
