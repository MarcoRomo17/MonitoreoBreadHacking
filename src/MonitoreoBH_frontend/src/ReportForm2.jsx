import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Form, Button, Alert, ListGroup, Modal } from "react-bootstrap";
import { handleGetCurrentLocation, reverseGeocode, fetchSuggestions } from "../../MonitoreoBH_backend/src/funciones.js";
import { existingReports } from "../../MonitoreoBH_backend/Rp.js";
import { TC } from "../../MonitoreoBH_backend/src/TC.js";
import { Autobusqueda } from "../../MonitoreoBH_backend/src/Autobusqueda.js";


// Componente que maneja el formulario de reportes
export const ReportForm2 = () => {
  // Estados para manejar los valores del formulario y la lógica del componente
  const [reportType, setReportType] = useState(""); // Tipo de reporte seleccionado
  const [manualAddress, setManualAddress] = useState(""); // Dirección ingresada manualmente
  const [suggestions, setSuggestions] = useState([]); // Sugerencias para autocompletar la dirección
  const [useCurrentLocation, setUseCurrentLocation] = useState(false); // Si se usa la ubicación actual o no
  const [currentLocation, setCurrentLocation] = useState({ lat: null, lon: null }); // Coordenadas de la ubicación actual
  const [locationError, setLocationError] = useState(null); // Errores de geolocalización
  const [reverseGeocodedAddress, setReverseGeocodedAddress] = useState(""); // Dirección obtenida de las coordenadas actuales
  const [currentDateTime, setCurrentDateTime] = useState(""); // Fecha y hora actual
  const [edo, setedo] = useState('');
  const [Colonia, setColonia] = useState('');
  const [ColonyArray, setColonyArray] = useState();


  /*<form action="" className="select"></form>*/

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


  // Estado para manejar la visibilidad del modal de reportes similares
  const [showModal, setShowModal] = useState(false);
  const [similarReports, setSimilarReports] = useState([]); // Estado para los reportes similares

  const handleClose = () => setShowModal(false); // Función para cerrar el modal
  

  // useEffect para obtener sugerencias solo si se está ingresando una dirección manual
  useEffect(() => {
    if (manualAddress.length > 2 && !useCurrentLocation) {
      fetchSuggestions(manualAddress);
    } else {
      setSuggestions([]); // Limpiar sugerencias si no hay dirección o se usa la ubicación actual
    }
  }, [manualAddress, useCurrentLocation]);

  // useEffect para obtener la ubicación actual si la opción está habilitada
  useEffect(() => {
    if (useCurrentLocation) {
      handleGetCurrentLocation();
    }
  }, [useCurrentLocation]);

  // useEffect para hacer la geocodificación inversa y buscar reportes similares cuando cambie la ubicación
  useEffect(() => {
    if (currentLocation.lat && currentLocation.lon) {
      reverseGeocode(currentLocation.lat, currentLocation.lon);
      checkForSimilarReports(currentLocation); // Verificar reportes similares
    }
  }, [currentLocation]);

  // useEffect para obtener la fecha y hora actuales cuando se carga el componente
  useEffect(() => { 
    const date = new Date().toLocaleString();
    setCurrentDateTime(date); // Guardar la fecha y hora actual
  }, []);

  // Función para verificar si ya hay reportes en ubicaciones cercanas
  const checkForSimilarReports = (currentLocation) => {
    const threshold = 0.01; // Umbral de similitud en latitud/longitud
    const foundReports = existingReports.filter(report => {
      return Math.abs(report.lat - currentLocation.lat) < threshold &&
             Math.abs(report.lon - currentLocation.lon) < threshold;
    });
  
    if (foundReports.length > 0) {
      setSimilarReports(foundReports); // Almacenar los reportes similares
      setShowModal(true); // Mostrar el modal si se encuentran reportes similares
    } else {
      setSimilarReports([]); // Limpiar si no hay reportes similares
    }
  };

  // Función para manejar la selección de una sugerencia de dirección
  const handleSuggestionClick = (suggestion) => {
    setManualAddress(suggestion.display_name); // Guardar la dirección seleccionada
    setSuggestions([]); // Limpiar las sugerencias
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    const location = useCurrentLocation ? reverseGeocodedAddress : manualAddress; // Obtener la ubicación

    const reportData = {
      tipoDeReporte: reportType,
      ubicacion: location,
    };

    console.log("Reporte enviado:", reportData); // Mostrar los datos del reporte en consola
    // Aquí puedes hacer una petición para enviar los datos del reporte a tu backend
  };
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>¡Ya hay un Reporte cerca de tu localización!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>Reportes Similares:</h5>
            {similarReports.length > 0 ? (
              <div>
                {similarReports.map(report => (
                  <Card key={report.id} className="mb-3">
                    <Card.Body>
                      <Card.Title>{report.reportType}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{report.dateTime}</Card.Subtitle>
                      <Card.Text>
                        {report.description}
                      </Card.Text>
                      <Card.Text>
                        Dirección: {report.address}
                      </Card.Text>
                      <Button variant="primary" href='/Detalles'>
                        Complementar Reporte
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            ) : (
              <p>No hay reportes similares encontrados.</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Crear nuevo reporte
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="bg-dark min-vh-100">
        <Container className="mt-5 bg-dark ">
          <Card style={{backgroundColor:"#4e4d4d"}}>
            <Card.Body>
              <Card.Title style={{color:"white"}}>Registrar una Denuncia</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                <Form.Label style={{color:"white"}}>Fecha y Hora del Reporte</Form.Label>
                <Form.Control
                  type="text"
                  value={currentDateTime}
                  readOnly
                />
              </Form.Group>

                {/* Selección del tipo de reporte */}
                <Form.Group className="mb-3">
                  <Form.Label style={{color:"white"}}>Tipo de Reporte</Form.Label>
                  <Form.Select
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="pelea_callejera">Pelea Callejera</option>
                    <option value="accidente_vehicular">Accidente Vehicular</option>
                    <option value="violencia_domestica">Violencia Doméstica</option>
                    <option value="robo_vehiculos">Robo a Vehículos</option>
                    <option value="personas_desaparecidas">Personas Desaparecidas</option>
                    <option value="lesiones">Lesiones</option>
                    <option value="delitos_sexuales">Intento de violacion</option>
                  </Form.Select>
                </Form.Group>

                {/* Opción para ingresar manualmente la dirección o usar ubicación actual */}
                <Form.Group className="mb-3">
                  <Form.Check style={{color:"white"}}
                    type="checkbox"
                    label="Usar mi ubicación actual"
                    checked={useCurrentLocation}
                    onChange={() => setCurrentLocation({ lat: 21.899815, lon: -102.248093 })}
                  />
                </Form.Group>
              

                {/* Campo para ingresar la dirección manual */}
                {!useCurrentLocation && (
                 <Form>
                 <Form.Label style={{color:"white"}}>Selecciona tu municipio</Form.Label>
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
                 <Form.Label style={{color:"white"}}>Selecciona tu colonia</Form.Label>
                 <Form.Control onMouseOver={pruebaDatos}>{/*De momento, solo sirve para llamar a la funcion que escribe en consola 
                 el array de las colonias del municipio seleccionado */}
 
                 </Form.Control>
                 <Form.Control  value={Colonia} onChange={recogerColonia}>
                 </Form.Control>
 
                 <ListGroup>
                 {ColonyArray?.map((colonia, index) => (
             <ListGroupItem key={index} onClick={() => recogerLista(colonia)}>
               {colonia}
             </ListGroupItem>
           ))}
                 </ListGroup>
             </Form>
                )}

                <Button variant="primary" type="submit">
                  Enviar Reporte
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};