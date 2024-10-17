import { useState } from "react";
import {  Card, Container, Form } from "react-bootstrap";
import { TC } from "../../MonitoreoBH_backend/src/TC.js";

export const Marco =()=>{
const [edo, setedo] = useState('');

const recogerEstado=(e)=>{//Recoge el estado seleccionado en el Form.Select
e.preventDefault();
const edoTemporal = e.target.value
setedo(edoTemporal);
console.log(edoTemporal)

}

const pruebaDatos=(e)=>{//llama a la funcion de backend TC, mandandole como parametro el estado seleccionado anteriormente
    e.preventDefault();
const datosAConsola=TC(edo)
console.log(datosAConsola);
}

    return(
    
    <Container>
        <Card>
            <Form>
                <Form.Label>Selecciona tu estado</Form.Label>
                <Form.Select name="SE" onChange={recogerEstado}>
                <option value="">Seleccione una opción</option>
                <option value="Aguascalientes">Aguascalientes</option>
                <option value="Asientos">Asientos</option>
                <option value="Calvillo">Calvillo</option>
                <option value="Cosío">Cosío</option>
                <option value="El Llano">El Llano</option>
                <option value="Jesús María">Jesús María</option>
                <option value="Pabellón de Arteaga">Pabellón de Arteaga</option>
                <option value="Rincón de Romos">Rincón de Romos</option>
                <option value="San Francisco de los Romo">San Francisco de los Romo</option>
                <option value="San José de Gracia">San José de Gracia</option>
                <option value="Tepezala">Tepezala</option>
                </Form.Select>
                <Form.Control onMouseOver={pruebaDatos}>{/*De momento, solo sirve para llamar a la funcion que escribe en consola 
                el array de las colonias del municipio seleccionado */}

                </Form.Control>
            </Form>
            

        </Card>
    </Container>
    );
}