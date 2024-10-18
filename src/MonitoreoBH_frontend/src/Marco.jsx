import { useState } from "react";
import {  Card, Container, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { TC } from "../../MonitoreoBH_backend/src/TC.js";
import { Autobusqueda } from "../../MonitoreoBH_backend/src/Autobusqueda.js";

export const Marco =()=>{
const [edo, setedo] = useState('');
const [Colonia, setColonia] = useState('');
const [ColonyArray, setColonyArray] = useState();


const recogerMunicipio=(e)=>{//Recoge el estado seleccionado en el Form.Select
e.preventDefault();
const edoTemporal = e.target.value
setedo(edoTemporal);
console.log(edoTemporal)

}

const pruebaDatos=(e)=>{//llama a la funcion de backend TC, mandandole como parametro el estado seleccionado anteriormente
e.preventDefault();
const aryColonia=TC(edo)
console.log(aryColonia,'Soy aryColonia');
setColonyArray(Autobusqueda(aryColonia))

}

const recogerColonia=(e)=>{//manda el arreglo de las colonias
    e.preventDefault();
    const coloniaTemporal=e.target.value
    console.log(coloniaTemporal)
   setColonia(coloniaTemporal)
}

const recogerLista=(colonia)=>{
 const objDeLaLista=colonia
    console.log(objDeLaLista)
    setColonia(colonia)
}

    return(
    
    <Container>
        <Card>
            <Form>
                <Form.Label>Selecciona tu estado</Form.Label>
                <Form.Select name="SE" onChange={recogerMunicipio}>
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
                <Form.Control  value={Colonia} onChange={recogerColonia}>
                </Form.Control>

                <ListGroup>
                {ColonyArray?.map((colonia, index) => (
            <ListGroup.Item key={index} onClick={() => recogerLista(colonia)}>
              {colonia}
            </ListGroup.Item>
          ))}
                </ListGroup>
            </Form>
            

        </Card>
    </Container>
    );
}