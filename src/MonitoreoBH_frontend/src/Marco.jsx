import { useState } from "react";
import { Button, Card, Container, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { TC } from "../../MonitoreoBH_backend/src/TC.js";
import { Autobusqueda } from "../../MonitoreoBH_backend/src/Autobusqueda.js";
import { guardarReportes } from "../../MonitoreoBH_backend/reportesRegistrados.js";

export const Marco = () => {
  const [edo, setedo] = useState('');
  const [Colonia, setColonia] = useState('');
  const [ColonyArray, setColonyArray] = useState([]);
  const [filteredColonies, setFilteredColonies] = useState([]);
  const [tipoIncidencia, settipoIncidencia] = useState('');
  const [descripcion, setdescripcion] = useState('');
  const [fecha, setfecha] = useState('');

  const recogerMunicipio = (e) => {
    e.preventDefault();
    const edoTemporal = e.target.value;
    setedo(edoTemporal);
    console.log(edoTemporal, 'de recogerMunicipio');
  };

  const pruebaDatos = (e) => {
    e.preventDefault();
    const aryColonia = TC(edo);
    console.log(aryColonia, 'Soy aryColonia');
    setColonyArray(aryColonia);
  };

  const recogerColonia = (e) => {
    e.preventDefault();
    const coloniaTemporal = e.target.value;
    console.log(coloniaTemporal);
    setColonia(coloniaTemporal);
  };

  const recogerLista = (colonia) => {
    console.log(colonia, 'De recoger lista');
    setColonia(colonia);
  };

  const recogerIncidencia = (e) => {
    e.preventDefault();
    const incidenciaTemporal = e.target.value;
    settipoIncidencia(incidenciaTemporal);
    console.log(incidenciaTemporal, 'de recogerIncidencia');
  };

  const recogerDescripcion = (e) => {
    e.preventDefault();
    const descripcionTemporal = e.target.value;
    setdescripcion(descripcionTemporal);
    console.log(descripcionTemporal, 'de recogerDescripcion');
  };
  const obtenerTiempoYfecha=(e)=>{
    e.preventDefault();
    const date = new Date().toLocaleString();
setfecha(date)
  }

  const handleColonySearch = (e) => {
    const query = e.target.value.toLowerCase();
    setColonia(query); // Actualiza el input de colonia con lo que el usuario escribe

    // Filtrar las colonias usando la función Autobusqueda
    if (query.length > 0) {
      const filtered = Autobusqueda(ColonyArray, Colonia); // Pasamos ColonyArray y el texto de búsqueda
      setFilteredColonies(filtered);
      console.log(filtered, 'desde handleColonySearch')
    } else {
      setFilteredColonies([]);
    }
  };


  return (
    <Container className="m-0 p-0"fluid>
      <Card className="bg-dark min-vh-100" style={{width:"100%", height:"100%"}}>
        <Form>
          <Form.Label style={{color:"white"}}>Selecciona el municipio</Form.Label>
          <Form.Select name="SE" onChange={recogerMunicipio}>{/**Form del municipio */}
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
          <Form.Label style={{color:"white"}}>Ingresa la colonia</Form.Label>
          <Form.Control value={Colonia} onChange={handleColonySearch} onMouseOver={pruebaDatos} placeholder="Ingresa la colonia"/>{/**Form de la colonia, en el cual se tiene autocompletado */}

          <ListGroup>{/**Aqui es donde se van generando las sugerencias y se les tiene que dar click para que se guarden */}
            {filteredColonies.map((colonia, index) => (
              <ListGroupItem key={index} onClick={() => recogerLista(colonia)}>
                {colonia}
              </ListGroupItem>
            ))}
          </ListGroup>
          <Form.Label style={{color:"white"}}>¿Qué tipo de incidencia hubo?</Form.Label>
          <Form.Select onChange={recogerIncidencia}> 
          <option value="">Seleccione una opción</option>
            <option value="Robo">Robo</option>
            <option value="Accidente">Accidente</option>
            <option value="Homicidio">Homicidio</option>
            <option value="Estafa">Extorsion</option>
            <option value="etc.">Intento de violacion</option>
          </Form.Select>

        <Form.Label style={{color:"white"}}>Ingresa la descripcion del caso</Form.Label>
        <Form.Control onChange={recogerDescripcion} placeholder="Ingresa una descripción del reporte"></Form.Control>

        </Form>
        <Button style={{background: 'linear-gradient(to right, blue, red)'}} className="mt-6" onMouseOver={obtenerTiempoYfecha} onClick={() => guardarReportes(edo,Colonia,tipoIncidencia,descripcion,fecha)}>Registrar reporte</Button>
      </Card>
    </Container>
  );
};