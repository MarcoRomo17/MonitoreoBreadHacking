import { Server } from 'azle';
import express from "express";
import cors from "cors";


export default Server(()=>{
    const app = express();
app.use(cors())
    app.get('/get',(req,res)=>{
        console.log("Si jala el get, osea el servior")
    });



    return app.listen();

   
})
