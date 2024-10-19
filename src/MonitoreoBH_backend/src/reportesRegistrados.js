

export const ReportesTotales = [
    {
        municipio: "Aguascalientes",
        colonia: "Colonia Centro",
        calle:"Adolfo López Mateos",
        tipo: "Robo",
        descripcion: "Se reportó un robo a una tienda de conveniencia.",
        fechaYhora: "2024-10-17 14:30"
      },
      {
        municipio: "Calvillo",
        colonia: "Colonia Popular",
        calle:"Guayaba",
        tipo: "Vandalismo",
        descripcion: "Actos de vandalismo en un parque público.",
        fechaYhora: "2024-10-17 12:45"
      },
      {
        municipio: "Rincón de Romos",
        colonia: "Colonia Hidalgo",
        calle:"Nose Queponer",
        tipo: "Asalto",
        descripcion: "Asalto a mano armada en una gasolinera.",
        fechaYhora: "2024-10-17 16:00"
      },
      {
        municipio: "Jesús María",
        colonia: "Colonia El Calvario",
        calle:"Los Ramirez",
        tipo: "Disturbios",
        descripcion: "Disturbios ocasionados por un grupo de jóvenes en la vía pública.",
        fechaYhora: "2024-10-17 13:15"
      },
      {
        municipio: "San Francisco de los Romo",
        colonia: "Colonia Santa Fe",
        calle:"San Pancho",
        tipo: "Accidente de tráfico",
        descripcion: "Colisión entre dos vehículos en una intersección.",
        fechaYhora: "2024-10-17 10:20"
      }
]

export const modificarArreglo=(nuevoOBJ)=>{
 ReportesTotales.push(nuevoOBJ)
 console.log(ReportesTotales, 'hola, estoy imprimendo desde la funcion modificarArreglo')
}