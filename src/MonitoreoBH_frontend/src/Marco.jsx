import { useState } from "react";
import { Card, Container, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { TC } from "../../MonitoreoBH_backend/src/TC.js";
import { Autobusqueda } from "../../MonitoreoBH_backend/src/Autobusqueda.js";

export const Marco = () => {
  const [edo, setedo] = useState('');
  const [Colonia, setColonia] = useState('');
  const [ColonyArray, setColonyArray] = useState([]);
  const [filteredColonies, setFilteredColonies] = useState([]);

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
          <Form.Control value={Colonia} onChange={handleColonySearch} onMouseOver={pruebaDatos}/>

          <ListGroup>
            {filteredColonies.map((colonia, index) => (
              <ListGroupItem key={index} onClick={() => recogerLista(colonia)}>
                {colonia}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Form>
      </Card>
    </Container>
  );
};
