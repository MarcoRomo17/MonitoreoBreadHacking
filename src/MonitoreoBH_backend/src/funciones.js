import axios from "axios";

const apiKey = "pk.6273f17ce79d1c44781c0cdf624ffd5e";  // Tu clave API de LocationIQ

// Función para obtener la ubicación actual
export const handleGetCurrentLocation = (setCurrentLocation, setLocationError) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLocationError(null);  // Limpiar cualquier error previo
      },
      (error) => {
        console.error("Error obteniendo la ubicación:", error);
        setLocationError("No se pudo obtener la ubicación actual.");
      }
    );
  } else {
    setLocationError("La geolocalización no es compatible con este navegador.");
  }
};

// Geocodificación inversa: convierte latitud/longitud en una dirección
export const reverseGeocode = async (lat, lon, setReverseGeocodedAddress) => {
  try {
    const response = await axios.get(
      `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`
    );
    const address = response.data.display_name;
    setReverseGeocodedAddress(address);  // Guardar la dirección obtenida
  } catch (error) {
    console.error("Error en la geocodificación inversa:", error);
    setReverseGeocodedAddress("No se pudo obtener la dirección.");
  }
};

// Autocompletado: buscar sugerencias basadas en la entrada de la dirección manual
export const fetchSuggestions = async (query, setSuggestions) => {
  try {
    const response = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${query}&format=json`
    );
    setSuggestions(response.data);
  } catch (error) {
    console.error("Error obteniendo las sugerencias:", error);
  }
};
