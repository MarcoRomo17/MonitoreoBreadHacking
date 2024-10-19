import { modificarArreglo } from "./reportesRegistrados";
export const guardarReportes=(M,C,LL,T,D,FH)=>{
    const objProvicional={
        municipio: M,
        colonia:C,
        calle:LL,
        tipo:T ,
        descripcion:D,
        fechaYhora:FH
    }//se crea un objeto provisional en el que se iran guardando los datos que se traigan de la funcion
    //const objArr=ReportesTotales//Objeto en el que se guardan TODOS los reportes
    //objArr.push(objProvicional);//Le introducimos el objeto provisional al 'nuevo'
   // console.log(objArr)
    modificarArreglo(objProvicional);

}