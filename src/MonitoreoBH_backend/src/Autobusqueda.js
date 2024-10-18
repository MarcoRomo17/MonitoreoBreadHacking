//recibe el arreglo de las colonias
export const Autobusqueda=(CA, value)=>{
  const coloniasFiltradas = CA[0]['colonias'].filter(colonia =>
      colonia.toLowerCase().includes(value.toLowerCase())
    );
    return coloniasFiltradas;
}