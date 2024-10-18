
//Deberiamos recibir la colonia y el municipio de Marco.jsx

import { Card, Container, Form } from "react-bootstrap"
import { Marco } from "./Marco"
export const ReportDescription=()=>{


    return(
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Agrega la descripcion del reporte de la colonia {}</Card.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label>Colonia que seleccionaste:</Form.Label>
                            <Form.Control>{/*Le agegaremos el valuey tendra el valor de la colonia */}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Describe lo que paso</Form.Label>
                            <Form.Control placeholder="Descripcion de lo ocurrido">
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}