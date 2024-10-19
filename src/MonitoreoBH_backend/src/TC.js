import { EdoAgs } from "./info"//TC por 'TraerColonia'
export  const TC=(Estado)=>{

   const filteredStates =EdoAgs.filter((estadoFiltrado)=> estadoFiltrado.municipio ===Estado)
return filteredStates;
}