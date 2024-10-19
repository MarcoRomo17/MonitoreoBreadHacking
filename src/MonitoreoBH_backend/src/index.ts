    import { Server } from 'azle';
    import express, {Request, Response} from "express";
    import cors from "cors";


    export default Server(()=>{
        const app = express();
        app.use(express.json());
        app.use(cors())
        app.get('/get',(req,res)=>{
            console.log("Si jala el get, osea el servior")
        });

        app.post('/ii-login', (req, res) => {
            const { principal } = req.body;
        
            // Validación básica
            if (!principal) {
                res.status(400).send('Principal not provided');
                return; // Asegúrate de que no se continúa la ejecución después de enviar una respuesta
            }
        
            // Manejo de autenticación o lógica aquí
            res.status(200).json({ message: 'Login successful', principal });
        });

        return app.listen();

    
    })
