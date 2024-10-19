import { Card, Container, Table, Form, Button } from "react-bootstrap"
import React, { useState } from 'react';
import { ReportesTotales } from "../../MonitoreoBH_backend/reportesRegistrados"

export const MostrarReporte=()=>{

    const [columnaEditable, setColumnaEditable] = useState('');

      const [filtros, setFiltros] = useState({
        municipio: '',
        colonia: '',
        tipo: '',
        descripcion: '',
        fechaYhora: ''
      });
    
      // Manejar el cambio de valor de los filtros
      const manejarCambioFiltro = (e) => {
        const { name, value } = e.target;
        setFiltros({
          ...filtros,
          [name]: value
        });
      };
    
      // Filtrar los reportes dinámicamente
      const reportesFiltrados = ReportesTotales.filter((reporte) => {
        return Object.keys(filtros).every((campo) => {
          return filtros[campo] === '' || reporte[campo].toLowerCase().includes(filtros[campo].toLowerCase());
        });
      });

    
      // Campos que se utilizarán para generar los inputs y columnas
      const campos = [
        { label: "Municipio", name: "municipio" },
        { label: "Colonia", name: "colonia" },
        { label: "Tipo de reporte", name: "tipo" },
        { label: "Descripción", name: "descripcion" },
        { label: "Fecha en que se realizó", name: "fechaYhora" }
      ];
      
      const manejarClickEncabezado = (campo) => {
        setColumnaEditable(columnaEditable === campo ? '' : campo); // Alterna la visibilidad del input
      };

    return(
        <>
        <Container>
            <Card>
                <Card.Body>
                <Card.Title>Reportes registrados</Card.Title>
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                        {campos.map((campo) => (
                            <th key={campo.name}> 
                            {campo.label}
                            <Button
                              variant="light"
                              size="sm"
                              onClick={() => manejarClickEncabezado(campo.name)}
                              style={{ marginLeft: '10px' }}
                            >
                              🔍
                            </Button>
                                {columnaEditable === campo.name && (
                                <Form.Control
                                    type="text"
                                    placeholder={`Filtrar por ${campo.label.toLowerCase()}`}
                                    name={campo.name}
                                    value={filtros[campo.name]}
                                    onChange={manejarCambioFiltro}
                                    style={{ marginTop: '10px' }} // Espaciado entre el encabezado y el input
                                />
                                )}
                            </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {reportesFiltrados.length > 0 ? (
                            reportesFiltrados.map((reporte, index) => (
                            <tr key={index}>
                                {campos.map((campo) => (
                                <td key={campo.name}>
                                    <div>{reporte[campo.name]}</div>
                                </td>
                                ))}
                            </tr>
                            ))
                        ) : (
                            <tr>
                            <td colSpan={campos.length}>No se encontraron reportes para estos filtros.</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
        
        </>
    )
}