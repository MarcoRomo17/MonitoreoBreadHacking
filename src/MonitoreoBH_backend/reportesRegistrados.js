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
        municipio: "Aguascalientes",
        colonia: "Colonia Centro",
        tipo: "Robo",
        descripcion: "Se reportó un robo a una tienda de conveniencia.",
        fechaYhora: "2024-10-17 14:30"
      },
      {
        municipio: "Calvillo",
        colonia: "Colonia Popular",
        tipo: "Vandalismo",
        descripcion: "Actos de vandalismo en un parque público.",
        fechaYhora: "2024-10-17 12:45"
      },
      {
        municipio: "Rincón de Romos",
        colonia: "Colonia Hidalgo",
        tipo: "Asalto",
        descripcion: "Asalto a mano armada en una gasolinera.",
        fechaYhora: "2024-10-17 16:00"
      },
      {
        municipio: "Jesús María",
        colonia: "Colonia El Calvario",
        tipo: "Disturbios",
        descripcion: "Disturbios ocasionados por un grupo de jóvenes en la vía pública.",
        fechaYhora: "2024-10-17 13:15"
      },
      {
        municipio: "San Francisco de los Romo",
        colonia: "Colonia Santa Fe",
        tipo: "Accidente de tráfico",
        descripcion: "Colisión entre dos vehículos en una intersección.",
        fechaYhora: "2024-10-17 10:20"
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