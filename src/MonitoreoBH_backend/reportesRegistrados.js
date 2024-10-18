//aqui se guardara el arreglo que tendra 
/*
            Municipio
            Colonia
            tipo
            descripcion
            fecha y hora
             */

export const ReportesTotales = [
    {
        municipio: '',
        colonia:'',
        tipo:'',
        descripcion:'',
        fechaYhora:''
    }
]

export const guardarReportes=(M,C,T,D,FH)=>{
    const objProvicional={
        municipio: M,
        colonia:C,
        tipo:T ,
        descripcion:D,
        fechaYhora:FH
    }
    ReportesTotales.push(objProvicional);
    console.log(ReportesTotales)

}