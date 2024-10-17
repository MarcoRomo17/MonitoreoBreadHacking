import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, Form, Button, Alert, ListGroup } from "react-bootstrap";
import { handleGetCurrentLocation, reverseGeocode, fetchSuggestions } from "../../MonitoreoBH_backend/src/funciones.js";

export const ReportForm = () => {
  
  const [reportType, setReportType] = useState("");
  const [manualAddress, setManualAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({ lat: null, lon: null });
  const [locationError, setLocationError] = useState(null);
  const [reverseGeocodedAddress, setReverseGeocodedAddress] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");
  // Llamar a la función de ubicación actual
  useEffect(() => {
    if (useCurrentLocation) {
      handleGetCurrentLocation(setCurrentLocation, setLocationError);
    }
  }, [useCurrentLocation]);

  // Llamar a la geocodificación inversa cuando la ubicación actual cambia
  useEffect(() => {
    if (currentLocation.lat && currentLocation.lon) {
      reverseGeocode(currentLocation.lat, currentLocation.lon, setReverseGeocodedAddress);
    }
  }, [currentLocation]);

  // Obtener sugerencias para autocompletar
  useEffect(() => {
    if (manualAddress.length > 2 && !useCurrentLocation) {
      fetchSuggestions(manualAddress, setSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [manualAddress, useCurrentLocation]);

  useEffect(() => {
    const date = new Date().toLocaleString();
    setCurrentDateTime(date);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const location = useCurrentLocation ? reverseGeocodedAddress : manualAddress;

    const reportData = {
      tipoDeReporte: reportType,
      ubicacion: location,
      fechaHora: currentDateTime,
    };

    console.log("Reporte enviado:", reportData);
    // Aquí puedes hacer una petición para enviar los datos del reporte a tu backend
  };

  

  return (
    <div className="bg-dark min-vh-100">
      <Container className="mt-5 bg-dark ">
        <Card>
          <Card.Body>
            <Card.Title>Registrar una Denuncia</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Fecha y Hora del Reporte</Form.Label>
                <Form.Control type="text" value={currentDateTime} readOnly />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tipo de Reporte</Form.Label>
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
                  <option value="delitos_sexuales">Delitos Sexuales</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Usar mi ubicación actual"
                  checked={useCurrentLocation}
                  onChange={() => setUseCurrentLocation(!useCurrentLocation)}
                />
              </Form.Group>

              {!useCurrentLocation && (
                <Form.Group className="mb-3">
                  <Form.Label>Dirección (Manual)</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="Ingresa la dirección manualmente"
                    value={manualAddress}
                    onChange={(e) => setManualAddress(e.target.value) }
                   
                    required={!useCurrentLocation}
                  />
                  {suggestions.length > 0 && (
                    <ListGroup className="mt-2">
                      {suggestions.map((suggestion) => (
                        <ListGroup.Item
                          key={suggestion.place_id}
                          onClick={() => setManualAddress(suggestion.display_name)}
                          style={{ cursor: "pointer" }}
                        >
                          {suggestion.display_name}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </Form.Group>
              )}

              {useCurrentLocation && (
                <Form.Group className="mb-3">
                  <Form.Label>Ubicación Actual</Form.Label>
                  {reverseGeocodedAddress ? (
                    <Alert variant="secondary">{reverseGeocodedAddress}</Alert>
                  ) : (
                    <Alert variant="warning">
                      {locationError ? locationError : "Obteniendo tu ubicación..."}
                    </Alert>
                  )}
                </Form.Group>
              )}

              <Button variant="primary" type="submit">
                Enviar Denuncia
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
