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
    <div>
      <h1>Página de Presencia</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
