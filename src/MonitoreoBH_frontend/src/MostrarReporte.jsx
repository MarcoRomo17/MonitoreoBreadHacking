import { Card, Container, Table } from "react-bootstrap"
import { ReportesTotales } from "../../MonitoreoBH_backend/reportesRegistrados"

export const MostrarReporte=()=>{

    console.log(ReportesTotales)

    return(
        <>
        <Container>
            <Card>
                <Card.Body>
                <Card.Title>Reportes registrados</Card.Title>
                <Table>
                    <thead>
                        <tr>
                            <th>Municipio</th>
                            <th>Colonia</th>
                            <th>Tipo de reporte</th>
                            <th>Descripcion</th>
                            <th>Fecha en que se realizó</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ReportesTotales.map((reporte)=>(
                                <tr>
                                <td>{reporte.municipio}</td>
                                <td>{reporte.colonia}</td>
                                <td>{reporte.tipo}</td>
                                <td>{reporte.descripcion}</td>
                                <td>{reporte.fechaYhora}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                </Card.Body>
            </Card>
        </Container>
        
        </>
    )
}