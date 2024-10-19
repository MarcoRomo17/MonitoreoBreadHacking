import { ReportesTotales } from "./reportesRegistrados";
export const sugerenceFunction=()=>{

    const contadorDeColonias= ReportesTotales.reduce((contador, reporte)=>{//contamos cuantas veces aparece una colonia
        //recorriendolo con .reduce, el cual es su trabajo. 
        const colonia = reporte.colonia;
        contador[colonia]=(contador[colonia] || 0)+1
        return contador;

    },{})

    const reportesPorColonia = ReportesTotales.filter(reporte => contadorDeColonias[reporte.colonia] >= 3);

    return reportesPorColonia; //es un arreglo el cual manda los reportes donde se repiten 3 veces la colonia


}