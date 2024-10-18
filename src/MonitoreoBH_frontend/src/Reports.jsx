import { Button, Form } from "react-bootstrap";
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react';

export function Reports() {
    const [reportes, setReport] = useState([]);
    const [resportes, setReport1] = useState({});
    const [show, setShow] = useState(false);


    useEffect(() => {
        obtenerReporte();
    }, []);

    function obtenerReporte() {
        Swal.fire({
            title: "Datos Guardados",
            text: "Se han guardado sus datos, ¿deseas continuar para enviar tu reporte?",
            showDenyButton: true,
            confirmButtonText: "Enviar Reporte",
            denyButtonText: `Cancelar`
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Saved", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Cancelando Envio de Reporte", "", "info");
            }
          });
    }

    function obtenerReportes() {
        Swal.fire({
            title: "Similitud de Reportes Encontrada", 
            text: "Se han guardado sus datos, hay reportes que coinciden con la zona y el tipo de tu reporte, ¿se trata de alguno de los siguientes reportes? Si es asi selecciónalo y presiona “Reportar nuevamente”.",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Reportar nuevamente",
            denyButtonText: `No, enviar reporte`
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Reportando Nuevamente", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Enviando Nuevo Reporte", "", "info");
            }
          });
    }

    Swal.fire({
        title: "Reporte Generado Exitosamente",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Reporte Enviado Exitosamente",
                text: "Enseguida se le comunicara a un agente sobre su situación e ira para ayudarlo.",
                showConfirmButton: false,
                timer: 3700
              });
        }
      });

}