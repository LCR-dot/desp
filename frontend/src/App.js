import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/`)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => console.error("Error al conectar con el backend:", error));
  }, []);

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
  <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md text-center">
    <h1 className="text-3xl font-bold text-blue-600 mb-4">Página de Presencia modificada GIT</h1>
    <p className="text-gray-700 text-lg">{message}</p>
  </div>
</div>
  );
}

export default App;
