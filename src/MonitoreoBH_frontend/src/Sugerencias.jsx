//Se supone aqui se deberian agrupar los registros
import { ReportesTotales } from "../../MonitoreoBH_backend/src/reportesRegistrados"
import { Card, Container, Table } from "react-bootstrap"
import { sugerenceFunction } from "../../MonitoreoBH_backend/src/sugerenceFunction"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const arrFt = sugerenceFunction()
export const Sugerencias=()=>{

    return(
        <>
        <Container>
        { 
            
         arrFt.map((reporte)=>{
                <Card>{console.log('entro al card')}
                {console.log(arrFt)}
                    <Card.Body>
                        <Card.Title>Reportes de la colonia {reporte.colonia}</Card.Title>
                        <Table>
                        <thead>{console.log('entro a la tabla')}
                        <tr>
                        <th>Municipio</th>
                        <th>Colonia</th>
                        <th>Calle</th>
                        <th>Tipo de incidencia</th>
                        <th>Descripción</th>
                        <th>Fecha y hora</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{reporte.municipio}</td>
                                <td>{reporte.colonia}</td>
                                <td>{reporte.calle}</td>
                                <td>{reporte.tipo}</td>
                                <td>{reporte.descripcion}</td>
                                <td>{reporte.fechaYhora}</td>
                            </tr>
                        </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            })
        }
        </Container>
        </>
    )
}