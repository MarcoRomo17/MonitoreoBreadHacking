import { EdoAgs } from "../info"
export  const TC=(Estado)=>{

   const filteredStates =EdoAgs.filter((estadoFiltrado)=> estadoFiltrado.municipio ===Estado)
return filteredStates;
}