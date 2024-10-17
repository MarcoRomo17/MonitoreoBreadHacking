//import { Form } from "react-bootstrap"
import { EdoAgs } from "../info"
export  const TraerColonia=(Estado)=>{

   const filteredStates =EdoAgs.filter((estadoFiltrado)=> estadoFiltrado.municipio ===Estado)
return filteredStates;
 /*
return(
    <Form.Group>
    <Form.Label>¿En qué colonia estás?</Form.Label>
    <Form.Select>
        {
  filteredStates.map((estadoIterado)=>(
    <option value={estadoIterado.colonias}>{estadoIterado.colonias}</option>

  ))
        }
    </Form.Select>
</Form.Group>

)*/
}